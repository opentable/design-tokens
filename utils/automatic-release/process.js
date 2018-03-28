'use strict';

const spawn = require('cross-spawn');
const fs = require('fs-extra');
const path = require('path');
const yaml = require('yamljs');
const differ = require('jest-diff');
const diffToSemver = require('./diffToSemver');
const packagePathResolver = require('./packagePathResolver');
const console = require('console');

// run lernaUpdate and return a list of the packages that need to be updated
const root = path.join(__dirname, '../../');
const latestTemp = path.join(__dirname, './tempNpm');

const checkUPdated = () => {
  const cmd = spawn(
    'node',
    ['node_modules/.bin/lerna', 'updated', '--json', '--loglevel=silen'],
    {
      cwd: root,
      stdout: 'inherit'
    }
  );
  let result = '';
  cmd.stdout.on('data', data => (result += data.toString()));

  return new Promise(resolve => {
    cmd.on('close', code => {
      return resolve(
        JSON.parse(result)
          .filter(pkg => !pkg.private)
          .map(pkg => pkg.name)
      );
    });
  });
};

// locally install latest version of packages
const installLatestFromNPM = packages => {
  fs.ensureDirSync(latestTemp);
  fs.writeJsonSync(`${latestTemp}/package.json`, { name: 'release' });

  return packages.map(pkg => {
    const cmd = spawn('npm', ['install', pkg], {
      stdio: 'inherit',
      cwd: latestTemp
    });
    return new Promise(resolve => {
      cmd.on('close', code => (code === 0 ? resolve(pkg) : resolve(null)));
    });
  });
};

const run = doPublish => {
  return new Promise((resolvePublish, rejectPublish) => {
    checkUPdated().then(updated => {
      Promise.all(installLatestFromNPM(updated))
        .then(installed =>
          installed.map(pkg => {
            return new Promise((resolve, reject) => {
              const updatedContent = yaml.load(
                path.join(root, `${packagePathResolver(pkg)}/token.yml`)
              );

              // If no version has been published yet, publish as major
              let version = 'major';
              let diff;
              const latestPath = path.join(
                latestTemp,
                'node_modules',
                pkg,
                'token.yml'
              );
              if (fs.pathExistsSync(latestPath)) {
                const latestContent = yaml.load(latestPath);
                diff = differ(latestContent.props, updatedContent.props);
                version = diffToSemver(
                  latestContent.props,
                  updatedContent.props
                );
              }

              if (version !== undefined) {
                // spawn lerna publish --force-publish=package --cd-version=version --yes
                // https://github.com/lerna/lerna#--force-publish-packages
                // https://github.com/lerna/lerna#--yes
                // https://github.com/lerna/lerna#--cd-version
                console.log(
                  `${
                    doPublish ? 'publishing' : 'should publish'
                  } ${pkg} as ${version}`
                );
                if (doPublish) {
                  console.log(diff);
                  console.log('--------------------------------');
                  const cmd = spawn(
                    'npm',
                    [
                      'run',
                      'publish',
                      '--',
                      `--force-publish=${pkg}`,
                      `--cd-version=${version}`,
                      '--yes'
                    ],
                    {
                      cwd: root,
                      stdout: 'inherit'
                    }
                  );

                  cmd.stdout.on('data', data => console.log(data.toString()));
                  cmd.on('error', err => {
                    console.log(`Error publishing ${pkg} as ${version}`, err);
                    reject(err);
                  });
                  cmd.on(
                    'close',
                    code => (code === 0 ? resolve(pkg) : reject(code))
                  );
                } else {
                  console.log(`Skipping publishing ${pkg}`);
                  console.log(diff);
                  console.log('--------------------------------');
                  resolve(pkg);
                }
              }
            });
          })
        )
        .then(published => {
          fs.removeSync(latestTemp);
          resolvePublish(
            `Automatic release ${doPublish ? '' : 'test'} successful`
          );
        })
        .catch(err => {
          rejectPublish(
            `Automatic release ${
              doPublish ? '' : 'test'
            } failed with err ${err}`
          );
        });
    });
  }).catch(err => {
    fs.removeSync(latestTemp);
    reject(err);
  });
};

module.exports = { run, checkUPdated, installLatestFromNPM };

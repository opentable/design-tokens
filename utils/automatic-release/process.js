'use strict';

const spawn = require('cross-spawn');
const fs = require('fs-extra');
const path = require('path');
const yaml = require('yamljs');
const differ = require('jest-diff');
const diffToSemver = require('./diffToSemver');
const console = require('console');

// run lernaUpdate and return a list of the packages that need to be updated
const root = path.join(__dirname, '../../');
const latestTemp = path.join(__dirname, './tempNpm');

const checkUPdated = () => {
  const cmd = spawn('npm', ['run', 'updated'], {
    cwd: root
  });
  let result = '';
  cmd.stdout.on('data', function(data) {
    result += data.toString();
  });

  return new Promise(resolve => {
    cmd.on('close', code => {
      return resolve(
        result
          .split('\n')
          .filter(line => line.match(/^-\sot/))
          .map(line => line.replace(/^-\s/, ''))
      );
    });
  });
};

// locally install latest version of packages
const installLatestFromNPM = packages => {
  fs.ensureDirSync(latestTemp);
  fs.writeJsonSync(`${latestTemp}/package.json`, { name: 'release' });

  const installed = packages.map(pkg => {
    const cmd = spawn('npm', ['install', pkg], {
      stdio: 'inherit',
      cwd: latestTemp
    });
    return new Promise(resolve => {
      cmd.on('close', code => (code === 0 ? resolve(pkg) : resolve(null)));
    });
  });

  return installed;
};

const run = () => {
  return new Promise((resolve, reject) => {
    checkUPdated()
      .then(updated => {
        Promise.all(installLatestFromNPM(updated)).then(() => {
          updated.forEach(pkg => {
            const updatedPath = pkg.match(/^ottheme/)
              ? `OTTheme/${pkg}/token.yml`
              : `OTKit/${pkg}/token.yml`;
            const updatedContent = yaml.load(path.join(root, updatedPath));

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
              version = diffToSemver(latestContent.props, updatedContent.props);
            }

            if (version !== undefined) {
              // spawn lerna publish --force-publish=package --cd-version=version --yes
              // https://github.com/lerna/lerna#--force-publish-packages
              // https://github.com/lerna/lerna#--yes
              // https://github.com/lerna/lerna#--cd-version
              console.log(`publishing ${pkg} as ${version}`);
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
                  cwd: root
                }
              );
              cmd.on('error', err => {
                console.log(`Error publishing ${pkg} as ${version}`, err);
                throw err;
              });
            } else {
              console.log(`Skipping publishing ${pkg}`);
            }
            console.log(diff);
            console.log('--------------------------------');
          });
          fs.removeSync(latestTemp);
          resolve('Automatic release successful');
        });
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = { run, checkUPdated, installLatestFromNPM };

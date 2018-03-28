'use strict';

const spawn = require('cross-spawn');

const publishPackage = (pkg, version, root) =>
  new Promise((resolve, reject) => {
    // spawn lerna publish --force-publish=package --cd-version=version --yes
    // https://github.com/lerna/lerna#--force-publish-packages
    // https://github.com/lerna/lerna#--yes
    // https://github.com/lerna/lerna#--cd-version
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
      return reject(err);
    });
    cmd.on('close', code => {
      if (code === 0) {
        console.log(`publishing ${pkg} as ${version}`);
        resolve(pkg);
      } else {
        reject(code);
      }
    });
  });
module.exports = publishPackage;

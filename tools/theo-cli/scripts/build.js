'use strict';

const theo = require('theo')
const fs = require('fs-extra')
const path = require('path')
const argv = require('optimist').argv;

const formats = argv._;
const packagePath = argv.path || argv.p || process.cwd();
const distPath = argv.dist || argv.d || '.';
const fileName = argv.output || argv.o || 'token';
const source = argv.src || argv.s || 'token.yml';
const test = argv.test || argv.t || false;

if (distPath !== '.' && !test) {
  fs.emptyDirSync(path.join(packagePath, distPath))
  console.log();
}

formats.forEach(format => {
  const outputFile = path.join(distPath, `${fileName}.${format}`);
  theo.convert({
    transform: {
      type: 'raw',
      file: path.join(packagePath, source)
    },
    format: {
      type: format
    }
  })
  .then(data => {
    if (!test) {
      fs.outputFile(path.join(packagePath, outputFile), data)
        .then(()=> console.log(`✏️  ${format} tokens created at "${path.basename(packagePath)}/${outputFile}"`))
    } else {
      console.log(`✓ ${path.basename(packagePath)}/${outputFile} compiled correctly`)
    }
  })
  .catch(error => {
    console.log(`💩  Oups, something went wrong: ${error}`)
    process.exit(1);
  })
})

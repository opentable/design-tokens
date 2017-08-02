const theo = require('theo')
const fs = require('fs-extra')
const path = require('path')

const formatSpecs = require('./utils/format-specs')

const formats = process.argv.slice(2);
formats.forEach(format => {
  if (formatSpecs[format]) {
    const spec = formatSpecs[format]
    theo.convert({
      transform: {
        type: 'raw',
        file: 'token.yml'
      },
      format: {
        type: spec.type
      }
    })
    .then(data => {
      const packagePath = process.cwd();
      fs.outputFile(path.join(packagePath, `dist/index.${spec.extension}`), data)
        .then(()=>console.log(`😎  ${spec.type} token succesfully written at "${path.join(packagePath, `dist/index.${spec.extension}`)}"`))
    })
    .catch(error => {
      console.log(`Something went wrong: ${error}`)
      process.exit(1);
    })
  }
})
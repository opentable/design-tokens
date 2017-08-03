# Theo-cli

CLI for [`theo`](https://github.com/salesforce-ux/theo)

## About this tool

This is a [CLI](https://en.wikipedia.org/wiki/Command-line_interface) that allows you to use
`theo` to buld one or multiple tokens. `theo-cli` forwards on the `formats`
and other relevant options to `theo` in order to build the token in the desired formats.

## Installation

This module is distributed via [npm](https://www.npmjs.com/) and should
be added as one of your project's `devDependencies`:

```
$ npm install --save-dev theo-cli
```

## Conventions

`theo-cli` assume that you have a token file in the root of you project named `token.yml` :

```
yourToken/
├── node_modules/
├── token.yml
└── package.json
```

and it will generate the following build structure:

```
yourToken/
├── node_modules/
├── token.yml
├── dist/
│   └── index.<theo-format>
└── package.json
```

## Basic usage

```
$ theo <[formats]> [options]
```

### Formats

Formats are valid theo supported formats as:

- `json`
- `raw.json`
- `rios.json`
- `android.xml`
- `scss`
- `map.scss`
- `map.variables.scss`
- `sass`
- `less`
- `cssmodules.css`
- `aura.tokens`
- `common.js`

Check the [Theo documentation](https://github.com/salesforce-ux/theo#available-formats) for a full list of supported formats.

Usage example with formats:
```
$ theo scss cssmodules.css
```

### Options

|Name|Description|Default|
|----|-----------|-------|
|`--path` \| `-p` |The absolute path where source token is located|`process.cwd`|
|`--dist` \| `-d` |The relative path where to generate the build|`dist/`|
|`--output` \| `-o` |The output filename|`index.<format>` |
|`--src` \| `-s` |The src file|`token.yml` |


## NPM Scripts

Typically you'll use this in your [npm scripts](https://docs.npmjs.com/misc/scripts):

```json
{
  "scripts": {
    "build": "theo scss cssmodules.css"
  }
}
```

the following result will be printed on your terminal:

```
✏️  scss tokens created at "yourToken/dist/index.scss"
✏️  cssmodules.css tokens created at "yourToken/dist/index.cssmodules.css"
✏️  cssmodules.css tokens created at "yourToken/dist/index.cssmodules.css"
✏️  scss tokens created at "yourToken/dist/index.scss"
```

## MonoRepo with Lerna

`theo-cli` can be used together with [lerna](https://github.com/lerna/lerna) to build specific tokens for specific pakacges in your monorepo, using the `exec` command of lerna:

```
$ lerna exec --scope ottheme-* theo scss common.js
```

Use `--` to pass flags:

```
$ lerna exec --scope ottheme-* theo scss common.js -- -o fancyFilename
```

Please checkout the [lerna documentation](https://github.com/lerna/lerna#exec) for further information

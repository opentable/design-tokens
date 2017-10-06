# OTKit tokens

## Available tokens

| Token | Available Formats | Version |
|--------|-------|-------|
| [`otkit-breakpoints`](/OTKit/otkit-breakpoints) | [`scss`, `cssmodules.css`, `common.js`] | [![npm version](https://badge.fury.io/js/otkit-breakpoints.svg)](http://badge.fury.io/js/otkit-breakpoints) |
| [`otkit-colors`](/OTKit/otkit-colors) | [`scss`, `cssmodules.css`, `common.js`] | [![npm version](https://badge.fury.io/js/otkit-colors.svg)](http://badge.fury.io/js/otkit-colors) |
| [`otkit-spacing`](/OTKit/otkit-spacing) | [`scss`, `cssmodules.css`, `common.js`] | [![npm version](https://badge.fury.io/js/otkit-spacing.svg)](http://badge.fury.io/js/otkit-spacing) |
| [`otkit-typography`](/OTKit/otkit-typography) | [`scss`, `cssmodules.css`, `common.js`] | [![npm version](https://badge.fury.io/js/otkit-typography.svg)](http://badge.fury.io/js/otkit-typography) |

***

## Usage

### Install the token

```bash
$ npm install --save-dev <token-name>
```

### Use the token

A Token exposes multiple available formats (listed above). **The format need to be excplicitely referenced upon requiring/importing the token:**

```
require('<token-name>/token.<format>')
```

Examples
```
// cssmodules example:
@value color-primary from 'otkit-colors/token.cssmodules.css';

// common.js require/import examples:
const color = require('otkit-colors/token.common.js');
import color from 'otkit-colors/token.common.js';

// scss example:
@import '../node_modules/ottheme-colors/token.scss';
```

### Preview and debug

Executing `npm run build` will generate the token values in each token's folder, such as `token.scss` or other available formats you specified.

When you publish a token, this step is executed as part of the publishing.

If you are using a token in your project, you can execute `npm link '<token-name>'` in `node_modules` folder to test the token values before publishing.

***

### Publish

A token needs to be published in order for the changes to take effect. To publish a token, navigate to the token's directory, for example `./OTKit/otkit-colors/`, then run `npm publish otkit-colors`.

You need to have an NPM account and be among the "Collaborators" list on the official NPM package page, for example  `https://www.npmjs.com/package/otkit-colors`, to publish. Contact one of the collaborators if you would like to be added.

Note: if you are a developer of OpenTable organization, remember to remove the OpenTable credentials from your `~/.npmrc` file to make sure you are publishing to the public instead of a private registry.



## Contributing

All the design related information are aliased and contained within the [aliases.yml](/aliases/yml) file. This is represent the single source of truth for a specific system and those aliases are then reused within each token for build purpose.

### I need to add a new color, where do I add it?

1. Add the unique name and value for which we intend to represent this color within the company in the [aliases.yml](/aliases/yml) file, for example:

```yml
aliases:
  ...
  the-new-color:
    value: "#F91F14"
  ...
```
2. Use the new value in whichever specific token you need, for example in the otkit-colors token:

```yml
props:
  ...
  color-primary:
    value: "!{the-new-color}"
  border-color:
    value: "!{the-new-color}"
  ...  
```

### I need to add a new format, how do I add it?

1. Edit the related build system in the project root scripts (within the `package.json` file). Check the [theo](https://github.com/salesforce-ux/theo#available-formats) and [theo-cli](https://github.com/salesforce-ux/theo/blob/master/CLI.md) documentation for more information.

```json
...
"scripts": {
  ...
  "build-otkit": "lerna exec --scope otkit-* theo cssmodules.css NEWFORMAT",
  ...
}
...
```

# OTTheme tokens

## Available tokens

| Token | Available Formats | Version |
|--------|-------|-------|
| [`ottheme-colors`](/OTTheme/ottheme-colors) | [`scss`, `cssmodules.css`, `common.js`] | [![npm version](https://badge.fury.io/js/ottheme-colors.svg)](http://badge.fury.io/js/ottheme-colors) |
| [`ottheme-spacing`](/OTTheme/ottheme-spacing) | [`scss`, `cssmodules.css`, `common.js`] | [![npm version](https://badge.fury.io/js/ottheme-spacing.svg)](http://badge.fury.io/js/ottheme-spacing) |

***

## Usage

Install the token:

```bash
$ npm install --save-dev <token-name>
```

Use the token:
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

***

## Contributing

All the design related information are aliased and contained within the [aliases.yml](/aliases/yml) file. This is represent the single source of truth for a specific system and those aliases are then reused within each tokens for build purpose. 

### I need to ad a new color, where do we add it?

1. Add the unique name and value for which we intend to represent this color within the company in the [aliases.yml](/aliases/yml) file, for example:

```yml
aliases:
  ...
  the-new-color:
    value: "#F91F14"
  ...
```
2. Use the new value in whichever specific token you need, for example in the ottheme-colors token:

```yml
props:
  ...
  color-primary:
    value: "!{the-new-color}"
  border-color:
    value: "!{the-new-color}"
  ...  
```

### I need to ad a new format, how do we add it?

1. Edit the related build system in the project root scripts (within the `package.json` file). Check the [theo](https://github.com/salesforce-ux/theo#available-formats) and [theo-cli](https://github.com/opentable/design-tokens/tree/master/tools/theo-cli#theo-cli) documentation for more information.

```json
...
"scripts": {
  ...
  "build-ottheme": "lerna exec --scope otkit-* theo scss NEWFORMAT",
  ...
}
...
```
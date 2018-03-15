# design-tokens

[![Greenkeeper badge](https://badges.greenkeeper.io/opentable/design-tokens.svg)](https://greenkeeper.io/)

Design Tokens repository is the central location to store shared design attributes such as colors, fonts, widths, animations, etc. These attributes can then be transformed and formatted to meet the needs of different projects, teams and platforms.

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

* [Project structure](#project-structure)
  * [OTKit](#otkit)
  * [OTTheme](#ottheme)
* [Usage](#usage)
  * [Install the token](#install-the-token)
  * [Use the token](#use-the-token)
    * [Example: using different formats](#example-using-different-formats)
    * [Example: set your base font size](#example-set-your-base-font-size)
  * [Pixel to Rem conversion](#pixel-to-rem-conversion)
* [Development](#development)
  * [Preview and debug](#preview-and-debug)
  * [Publish](#publish)
* [Contribution](#contribution)
  * [Contributing a new value](#contributing-a-new-value)
    * [I need to add a new value, where do I add it?](#i-need-to-add-a-new-value-where-do-i-add-it)
    * [I need to add a new format, how do I add it?](#i-need-to-add-a-new-format-how-do-i-add-it)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Project structure

A token is a set of design attributes bundled together around a common theme.

We have two sets of design tokens available to consume.

### OTKit

Standard design tokens. Use them if you are following the new design guidelines.

| Token                                                         | Available Formats                 | Version                                                                                                                   |
| ------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [`otkit-borders`](/OTKit/otkit-borders)                       | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-borders.svg)](http://badge.fury.io/js/otkit-borders)                       |
| [`otkit-breakpoints`](/OTKit/otkit-breakpoints)               | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-breakpoints.svg)](http://badge.fury.io/js/otkit-breakpoints)               |
| [`otkit-colors`](/OTKit/otkit-colors)                         | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-colors.svg)](http://badge.fury.io/js/otkit-colors)                         |
| [`otkit-icons`](/OTKit/otkit-icons)                           | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-icons.svg)](http://badge.fury.io/js/otkit-icons)                           |
| [`otkit-shadows`](/OTKit/otkit-shadows)                       | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-shadows.svg)](http://badge.fury.io/js/otkit-shadows)                       |
| [`otkit-spacing`](/OTKit/otkit-spacing)                       | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-spacing.svg)](http://badge.fury.io/js/otkit-spacing)                       |
| [`otkit-typography` (DEPRECATED)](/OTKit/otkit-typography)    | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-typography.svg)](http://badge.fury.io/js/otkit-typography)                 |
| [`otkit-typography-desktop`](/OTKit/otkit-typography-desktop) | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-typography-desktop.svg)](http://badge.fury.io/js/otkit-typography-desktop) |

### OTTheme

Legacy design tokens. Use them if you need the classic look and feel of [OpenTable Theme](https://github.com/opentable/opentable-theme).

| Token                                         | Available Formats                 | Version                                                                                                 |
| --------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [`ottheme-colors`](/OTTheme/ottheme-colors)   | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/ottheme-colors.svg)](http://badge.fury.io/js/ottheme-colors)   |
| [`ottheme-spacing`](/OTTheme/ottheme-spacing) | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/ottheme-spacing.svg)](http://badge.fury.io/js/ottheme-spacing) |

## Usage

### Install the token

```bash
$ npm install --save-dev <token-name>
```

---

### Use the token

A Token exposes multiple available formats (listed above). **The format needs to be explicitly referenced upon requiring/importing the token:**

```
require('<token-name>/token.<format>')
```

#### Example: using different formats

```
// cssmodules example:
@value color-primary from 'otkit-colors/token.cssmodules.css';

// common.js require/import examples:
const color = require('otkit-colors/token.common.js');
import color from 'otkit-colors/token.common.js';

// scss example:
@import '../node_modules/ottheme-colors/token.scss';
```

#### Example: set your base font size

```css
@value font-size-base from 'otkit-typography/token.cssmodules.css';

html {
  font-size: font-size-base;
}
```

---

### Pixel to Rem conversion

All contributions to this project should be in pixels. For users of these tokens, you will have to install [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) to handle the pixel to rem conversion in your CSS files.

```
npm install --save-dev postcss-pxtorem
```

Then add it to your [postcss](https://github.com/postcss/postcss) processors with the following recommended configuration:

```javascript
import pxtorem from 'postcss-pxtorem';
import { fontSizeBase } from 'otkit-typography/token.cssmodules.css';

const processors = [
  pxtorem({
    // fontSizeBase = '16px'.  Need to convert to 16.
    rootValue: parseInt(fontSizeBase, 10),
    selectorBlackList: [/^html$/],
    replace: true
  })
];
```

Note that depending on how you use `postcss`, your processors array may be in a JSON configuration file instead.

If you're not already using [postcss](https://github.com/postcss/postcss), you will either have to use it as an additional build step after you transform your CSS with your current tool or use it as a complete replacement for your current CSS transformation process.

## Development

### Preview and debug

Executing `npm run build` will generate the token values in each token's folder, such as `token.scss` or other available formats you specified.

When you publish a token (more on that below), this step is executed as part of the publishing.

If you are using a token in your project, you can execute `npm link '<token-name>'` in `node_modules` folder to test the token values before publishing.

---

### Publish

Publish is automatic upon a PR get succesfully merged to master. **Please don't do manual publishing, in case of problem, open an issue**
The following rules are automatically identified in CI:

- **Patch version (0.0.x)** -> Release a patch when that contain backwards-compatible changes. This means that for a specific design-system some values are corrected and updated (ie: a color get updated)
- **Minor version (0.x.0)** -> Release a minor when a new functionality is added in a backwards-compatible manner. This means that for a specific design-system you are adding new decisions (ie: a new color is added)
- **Major version (x.0.0)** -> Release a major when a breaking changes is identified. This means that for a specific design token some values where removed (ie: a color was removed)

## Contribution

Design Tokens aim to democratize the design-development workflow at OpenTable. We encourage you to use what we created, review [pull requests](https://github.com/opentable/design-tokens/pulls), and comment + vote on [discussion threads.](https://github.com/opentable/design-tokens/issues)

If you are a non-technical person (such as designer, product manager, etc), your participation is important to us and your feedback will be especially valued. Please let us know how we can make it easier for you by [submitting an issue.](https://github.com/opentable/design-tokens/issues/new)

### Contributing a new value

1. Find the directory containing the tokens that are relevant to your new value (otkit-typography for typography, otkit-colors for colors, etc.). Within that directory, find the token.yml file and add the new value in the props section. For example, we would add the color-gray-primary value in otkit-colors/token.yml in the following way:

```yml
props:
  ...
  color-black:
    value: "#000000"
  ...  
```

2.  Add, commit, and push your changes. Make a PR on `https://github.com/opentable/design-tokens`. Pat yourself on the back as you wait for your PR to be reviewed.

### Contributing a new format?

1.  Edit the related build system in the project root scripts (within the `package.json` file). Check the [theo](https://github.com/salesforce-ux/theo#available-formats) and [theo-cli](https://github.com/salesforce-ux/theo/blob/master/CLI.md) documentation for more information.

```json
...
"scripts": {
  ...
  "build-otkit": "lerna exec --scope otkit-* theo cssmodules.css NEWFORMAT",
  ...
}
...
```

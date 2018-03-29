# design-tokens

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
| [`otkit-icons`](/OTKit/otkit-icons)                           | `scss, cssmodules.css`            | [![npm version](https://badge.fury.io/js/otkit-icons.svg)](http://badge.fury.io/js/otkit-icons)                           |
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

### Contribution

Please refer to the [contributing doc](/CONTRIBUTING.md)

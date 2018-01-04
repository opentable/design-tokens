# design-tokens

[![Greenkeeper badge](https://badges.greenkeeper.io/opentable/design-tokens.svg)](https://greenkeeper.io/)

Design Tokens repository is the central location to store shared design attributes such as colors, fonts, widths, animations, etc. These attributes can then be transformed and formatted to meet the needs of different projects, teams and platforms.

***

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Project structure](#project-structure)
  - [OTKit](#otkit)
  - [OTTheme](#ottheme)
- [Usage](#usage)
  - [Install the token](#install-the-token)
  - [Use the token](#use-the-token)
    - [Example: using different formats](#example-using-different-formats)
    - [Example: set your base font size](#example-set-your-base-font-size)
  - [Pixel to Rem conversion](#pixel-to-rem-conversion)
- [Development](#development)
  - [Preview and debug](#preview-and-debug)
  - [Publish](#publish)
- [Contribution](#contribution)
  - [Contributing a new value](#contributing-a-new-value)
    - [I need to add a new value, where do I add it?](#i-need-to-add-a-new-value-where-do-i-add-it)
    - [I need to add a new format, how do I add it?](#i-need-to-add-a-new-format-how-do-i-add-it)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Project structure

A token is a set of design attributes bundled together around a common theme.

We have two sets of design tokens available to consume.

### OTKit

Standard design tokens. Use them if you are following the new design guidelines.

| Token | Available Formats | Version |
|--------|-------|-------|
| [`otkit-borders`](/OTKit/otkit-borders) | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-borders.svg)](http://badge.fury.io/js/otkit-borders) |
| [`otkit-breakpoints`](/OTKit/otkit-breakpoints) | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-breakpoints.svg)](http://badge.fury.io/js/otkit-breakpoints) |
| [`otkit-colors`](/OTKit/otkit-colors) | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-colors.svg)](http://badge.fury.io/js/otkit-colors) |
| [`otkit-desktop-typography`](/OTKit/otkit-desktop-typography) | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-desktop-typography.svg)](http://badge.fury.io/js/otkit-desktop-typography) |
| [`otkit-shadows`](/OTKit/otkit-shadows) | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-shadows.svg)](http://badge.fury.io/js/otkit-shadows) |
| [`otkit-spacing`](/OTKit/otkit-spacing) | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-spacing.svg)](http://badge.fury.io/js/otkit-spacing) |
| [`otkit-typography`](/OTKit/otkit-typography) | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-typography.svg)](http://badge.fury.io/js/otkit-typography) |


### OTTheme

Legacy design tokens. Use them if you need the classic look and feel of [OpenTable Theme](https://github.com/opentable/opentable-theme).

| Token | Available Formats | Version |
|--------|-------|-------|
| [`ottheme-colors`](/OTTheme/ottheme-colors) | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/ottheme-colors.svg)](http://badge.fury.io/js/ottheme-colors) |
| [`ottheme-spacing`](/OTTheme/ottheme-spacing) | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/ottheme-spacing.svg)](http://badge.fury.io/js/ottheme-spacing) |



## Usage

### Install the token

```bash
$ npm install --save-dev <token-name>
```

***


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


***


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
]
```

Note that depending on how you use `postcss`, your processors array may be in a JSON configuration file instead.

If you're not already using [postcss](https://github.com/postcss/postcss), you will either have to use it as an additional build step after you transform your CSS with your current tool or use it as a complete replacement for your current CSS transformation process.



## Development

### Preview and debug

Executing `npm run build` will generate the token values in each token's folder, such as `token.scss` or other available formats you specified.

When you publish a token (more on that below), this step is executed as part of the publishing.

If you are using a token in your project, you can execute `npm link '<token-name>'` in `node_modules` folder to test the token values before publishing.


***


### Publish

Since every token is a `npm` package, changes to the token, even if the code is merged, must need a new version published to take effect.

Before you publish, you need to have an NPM account and be among the "Collaborators" list on the official NPM package page, for example  `https://www.npmjs.com/package/otkit-colors`, to publish. Contact one of the collaborators if you would like to be added.

Before you publish, make sure you are on your local master branch, and it is fully in sync with this repository's master branch. You do not need to git pull the tags; our `lerna` powered interactive publishing process should take care of that behind the scenes.

Executing `npm run publish` at the root of this repository to publish. Follow the interactive prompts; it should detect all the changes automatically. You will be able to select the version of each token.



## Contribution

Design Tokens aim to democratize the design-development workflow at OpenTable. We encourage you to use what we created, review [pull requests](https://github.com/opentable/design-tokens/pulls), and comment + vote on [discussion threads.](https://github.com/opentable/design-tokens/issues)

If you are a non-technical person (such as designer, product manager, etc), your participation is important to us and your feedback will be especially valued. Please let us know how we can make it easier for you by [submitting an issue.](https://github.com/opentable/design-tokens/issues/new)

### Contributing a new value

**TODO: the process has changed significantly since we do not rely on aliasing anymore. This section needs heavy revising.**

All OTKit design system values are aliased and contained within the [OTKit/aliases.yml](/aliases/yml) file. This file represents the single source of truth for the OTKit design system. The values in aliases.yml are referenced within each token for build purposes.

#### I need to add a new value, where do I add it?

1. In the [OTKit/aliases.yml](/aliases/yml) file, add the value and a unique name for it. Follow the existing conventions as much as possible (place it in the right area, if it one exists, and add a helpful comment about how the value is used).

For example, to add a value named "color-gray-primary", which is used as the text color, you should add the section seen in between the ellipses (...) below:

```yml
aliases:
  ...
  # Primary Gray, used on all text sizes
  # =============================================
  color-gray-primary:
    value: "#333333"
  ...
```

2. Find the directory containing the tokens that are relevant to your new value (otkit-typography for typography, otkit-colors for colors, etc.). Within that directory, find the token.yml file and add the new value in the props section. For example, we would add the color-gray-primary value in otkit-colors/token.yml in the following way:

```yml
props:
  ...
  color-gray-primary:
    value: "!{color-gray-primary}"
  ...  
```
3. Add, commit, and push your changes. Make a PR on `https://github.com/opentable/design-tokens`. Pat yourself on the back as you wait for your PR to be reviewed.

#### I need to add a new format, how do I add it?

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

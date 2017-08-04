# OTKit tokens

## Available tokens

| Token | Available Formats | Version |
|--------|-------|-------|
| [`otkit-colors`](/OTKit/otkit-colors) | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-colors.svg)](http://badge.fury.io/js/otkit-colors) |
| [`otkit-spacing`](/OTKit/otkit-spacing) | `scss, cssmodules.css, common.js` | [![npm version](https://badge.fury.io/js/otkit-spacing.svg)](http://badge.fury.io/js/otkit-spacing) |

***

## Usage

Run the command below will add the needed tokens to your project:

```bash
$ npm install --save-dev <token-name>
```

Or you can manually add the `<token-name>` package line to your project's `devDependnecies` inside `package.json`, then run:

```bash
$ npm install
```

A Token can be consumed multiple available formats (listed above); requiring the token could work differently based on the format you wish to consume.

For example, to consume `cssmodules.css` format of the `otkit-colors` token, you will need to add this inside your css file:

```css
@value color-primary from 'otkit-colors/token.cssmodules.css';
```

***

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

1. Edit the related build system in the project root scripts (within the `package.json` file). Check the [theo](https://github.com/salesforce-ux/theo#available-formats) and [theo-cli](https://github.com/opentable/design-tokens/tree/master/tools/theo-cli#theo-cli) documentation for more information.

```json
...
"scripts": {
  ...
  "build-otkit": "lerna exec --scope otkit-* theo cssmodules.css NEWFORMAT",
  ...
}
...
```

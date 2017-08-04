# design-tokens

Design Token files are a central location to store design related information such as colors, fonts, widths, animations, etc. These raw values can then be transformed and formatted to meet the needs of any platform. Instead of hard coding this information in each platform/format, we store here centralized Design Tokens and publish on npm output files for each platform/format to be consumed.

***

## Project structure

This project is structured to host design-tokens used by the following OpenTable design-systems:

### [OTKit](/OTKit)

| Token | Available Formats | Version |
|--------|-------|-------|
| [`otkit-colors`](/OTKit/otkit-colors) | `css-modules` | [![npm version](https://badge.fury.io/js/otkit-colors.svg)](http://badge.fury.io/js/otkit-colors) |
| [`otkit-spacing`](/OTKit/otkit-spacing) | `css-modules` | [![npm version](https://badge.fury.io/js/otkit-spacing.svg)](http://badge.fury.io/js/otkit-spacing) |


### [OTTheme](/OTTheme)

| Token | Available Formats | Version |
|--------|-------|-------|
| [`ottheme-colors`](/OTTheme/ottheme-colors) | `scss` | [![npm version](https://badge.fury.io/js/ottheme-colors.svg)](http://badge.fury.io/js/ottheme-colors) |
| [`ottheme-spacing`](/OTTheme/ottheme-spacing) | `scss` | [![npm version](https://badge.fury.io/js/ottheme-spacing.svg)](http://badge.fury.io/js/ottheme-spacing) |

***

## Tools:

| Package | Description | Version |
|--------|-------|-------|
| [`theo-cli`](/tools/theo-cli) | CLI for [Theo](https://github.com/salesforce-ux/theo) | [![npm version](https://badge.fury.io/js/theo-cli.svg)](http://badge.fury.io/js/theo-cli) |

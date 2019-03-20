# otkit-icons
All SVG's in this folder will be uploaded to https://cdn.otstatic.com/design-tokens/icons upon a new package publish, with each icon token set to its corresponding CDN url.

For any icon that has only a single fill color, multiple icons (and design tokens) will be generated automatically based on the colors set in `icon-colors.json`.  For example, if you have the icon `foo_icon` and `icon-colors.json` has `ash-dark`, a icon called `foo_icon_ash-dark` will be created automatically.  All colors in `icon-colors.json` must correspond to colors in `otkit-colors`.  
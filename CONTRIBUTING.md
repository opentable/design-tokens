First of all, thank you for contributing. It’s appreciated.

# To submit a pull request

1. Open a GitHub issue before doing significant amount of work and engage with design team.
2. Clone the repo. If it was already cloned, then git pull to get the latest from master.
3. Run `npm install` before anything else, and wait.
4. Write code.
5. Make sure tests pass (`npm run test`) and make a pull request against the master branch. If you are adding a new token, make sure to update the related READMEs ([main radme](https://github.com/opentable/design-tokens/blob/master/README.md) and design-system specific: [ottheme readme](https://github.com/opentable/design-tokens/blob/master/OTTheme/README.md) or [otkit readme](https://github.com/opentable/design-tokens/blob/master/OTKit/README.md) )


### Publish

Publish is automatic upon a PR get succesfully merged to master. **Please don't do manual publishing, in case of problem, open an issue**
The following rules are automatically identified in CI:

- **Patch version (0.0.x)** -> A patch version will be automatically released when tokens contain backwards-compatible changes. This means that for a specific design-system some values are corrected and updated (ie: a color get updated)
- **Minor version (0.x.0)** -> A minor version will be automatically released when a new functionality is added in a backwards-compatible manner. This means that for a specific design-system you are adding new decisions (ie: a new color is added)
- **Major version (x.0.0)** -> A major version will be automatically released when a breaking changes is identified. This means that for a specific design token some values where removed (ie: a color was removed)

## Contribution

Design Tokens aim to democratize the design-development workflow at OpenTable. We encourage you to use what we created, review [pull requests](https://github.com/opentable/design-tokens/pulls), and comment + vote on [discussion threads.](https://github.com/opentable/design-tokens/issues)

If you are a non-technical person (such as designer, product manager, etc), your participation is important to us and your feedback will be especially valued. Please let us know how we can make it easier for you by [submitting an issue.](https://github.com/opentable/design-tokens/issues/new)

### Contributing a new value

**TODO: the process has changed significantly since we do not rely on aliasing anymore. This section needs heavy revising.**

All OTKit design system values are aliased and contained within the [OTKit/aliases.yml](/aliases/yml) file. This file represents the single source of truth for the OTKit design system. The values in aliases.yml are referenced within each token for build purposes.

#### I need to add a new value, where do I add it?

1.  In the [OTKit/aliases.yml](/aliases/yml) file, add the value and a unique name for it. Follow the existing conventions as much as possible (place it in the right area, if it one exists, and add a helpful comment about how the value is used).

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

2.  Find the directory containing the tokens that are relevant to your new value (otkit-typography for typography, otkit-colors for colors, etc.). Within that directory, find the token.yml file and add the new value in the props section. For example, we would add the color-gray-primary value in otkit-colors/token.yml in the following way:

```yml
props:
  ...
  color-gray-primary:
    value: "!{color-gray-primary}"
  ...  
```

3.  Add, commit, and push your changes. Make a PR on `https://github.com/opentable/design-tokens`. Pat yourself on the back as you wait for your PR to be reviewed.

#### I need to add a new format, how do I add it?

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

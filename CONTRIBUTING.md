First of all, thank you for contributing. It’s appreciated.

Design Tokens aim to democratize the design-development workflow at OpenTable. We encourage you to use what we created, review [pull requests](https://github.com/opentable/design-tokens/pulls), and comment + vote on [discussion threads.](https://github.com/opentable/design-tokens/issues)

If you are a non-technical person (such as designer, product manager, etc), your participation is important to us and your feedback will be especially valued. Please let us know how we can make it easier for you by [submitting an issue.](https://github.com/opentable/design-tokens/issues/new)

# To submit a pull request

1. Open a GitHub issue before doing significant amount of work and engage with design team.
2. Clone the repo. If it was already cloned, then git pull to get the latest from master.
3. Run `npm install` before anything else, and wait.
4. Write code.
5. Make sure tests pass (`npm run test`) and make a pull request against the master branch. Do not forget to update the [README](https://github.com/opentable/design-tokens/blob/master/README.md) if you consider it appropriate for the changes you have made.

# To release new versions

Publish is automatic upon a PR get succesfully merged to master. **Please don't do manual publishing, in case of problem, open an issue**
The following rules are automatically identified in CI:

- **Patch version (0.0.x)** -> A patch version will be automatically released when tokens contain backwards-compatible changes. This means that for a specific design-system some values are corrected and updated (ie: a color get updated)
- **Minor version (0.x.0)** -> A minor version will be automatically released when a new functionality is added in a backwards-compatible manner. This means that for a specific design-system you are adding new decisions (ie: a new color is added)
- **Major version (x.0.0)** -> A major version will be automatically released when a breaking changes is identified. This means that for a specific design token some values where removed (ie: a color was removed)

The style-guide get continously deployed and can be accessed here: https://opentable.github.io/design-tokens/

# To contributing a new value

1. Find the directory containing the tokens that are relevant to your new value (otkit-typography for typography, otkit-colors for colors, etc.). Within that directory, find the token.yml file and add the new value in the props section. For example, we would add the color-gray-primary value in otkit-colors/token.yml in the following way:

```yml
props:
  ...
  color-black:
    value: "#000000"
  ...
```

2.  Add, commit, and push your changes. Make a PR on `https://github.com/opentable/design-tokens`. Pat yourself on the back as you wait for your PR to be reviewed.

# To contributing a new format

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

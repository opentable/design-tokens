First of all, thank you for contributing. It’s appreciated.

# To submit a pull request

1. Open a GitHub issue before doing significant amount of work and engage with design team.
2. Clone the repo. If it was already cloned, then git pull to get the latest from master.
3. Run `npm install` before anything else, and wait.
4. Write code.
5. Make sure tests pass (`npm run test`) and make a pull request against the master branch. If you are adding a new token, make sure to update the related READMEs ([main radme](https://github.com/opentable/design-tokens/blob/master/README.md) and design-system specific: [ottheme readme](https://github.com/opentable/design-tokens/blob/master/OTTheme/README.md) or [otkit readme](https://github.com/opentable/design-tokens/blob/master/OTKit/README.md) )


# Nothing is needed to release a new version, therefore **please don't manually publish tokens**

Upon merging to master a PR an automatic release system will make sure that related tokens that need to be updated get published on the public NPM registry following the rules listed below

## Version cheat sheet:
- **Patch version (0.0.x)** -> Release a patch when you make backwards-compatible bug fixes. This means that for a specific design-system some values are corrected and updated (ie: a color get updated)
- **Minor version (0.x.0)** -> Release a minor when you add functionality in a backwards-compatible manner. This means that for a specific design-system you are adding new decisions (ie: a new color is added)
- **Major version (x.0.0)** -> Release a major when you make incompatible changes. This means that for a specific design system some values where removed (ie: a color was removed)

module.exports = pkgName =>
  pkgName.match(/^ottheme/) ? `OTTheme/${pkgName}` : `OTKit/${pkgName}`;

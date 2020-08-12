module.exports = {
  pathPrefix: '/design-tokens', // as in https://opentable.github.io/design-tokens
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss'
  ],
  siteMetadata: {
    title: 'OTKit Style Guide',
    siteUrl: 'https://opentable.github.io/design-tokens',
    description: 'See OTKit design tokens and how to use them'
  }
};

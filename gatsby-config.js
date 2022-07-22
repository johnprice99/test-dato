module.exports = {
  siteMetadata: {
    title: `test-dato`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "4897c9f9c160d673425898183b3cbe"
    }
  }]
};
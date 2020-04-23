module.exports = {
  siteMetadata: {
    title: `NEAR MainNet Wallet`,
    description: `The NEAR Protocol MainNet Web Wallet`,
    author: `@near`,
    siteUrl: `https://wallet.nearprotocol.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-100373569-18",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}

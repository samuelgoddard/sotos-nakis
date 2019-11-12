require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Sotos Nakis`,
    description: `Marketing site for Sotos Nakis`,
    author: `@samuelgoddard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true, 
        whitelistPatterns: [/is-active/],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sotos-nakis`,
        short_name: `sotos`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        specialChars: '/:',
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_KEY,
      },
    },
  ],
}

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env`,
});

module.exports = {
  /* Your site config here */
  plugins: [
    // `gatsby-theme-gallery`,
    `gatsby-transformer-sharp`,

    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Diroboto`,
        short_name: `Cool App`,
        description: `robotics academy platform in alexandra township and mokgwaneng village`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/logo.png`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
      },
    },

    { resolve: `gatsby-plugin-sharp`, options: { failOnError: false } },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        // basePath: process.env.CLOUDINARY_BASE_PATH,
        resourceType: `image`,
        // type: `type Value`,
        prefix: `diroboto/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: 'diroboto',
    description: 'village style robotics & IoT',
    copyright: 'Copyright 2022',
    developer: 'codegarden',
    contact: 'hi@diroboto.co.za',
  },
};

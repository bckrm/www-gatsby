// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

require('dotenv').config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: `Backroom`,
        description: `Brand Development | Baltimore MD | Backroom`,
        author: `asasmith`,
    },
    plugins: [
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: `stqzzq3s`,
                dataset: `production`,
                watchMode: true,
                overlayDrafts: true,
                token: process.env.SANITY_READ_TOKEN,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    'G-Z89KKT8WM3', // Google Analytics / GA
                    'AW-CONVERSION_ID', // Google Ads / Adwords / AW
                    'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    // optimize_id: 'OPT_CONTAINER_ID',
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    // exclude: ['/preview/**', '/do-not-track/me/too/'],
                },
            },
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
                // TODO: use .env, refresh key since it's been in gh
                apiToken: `001645ef451df7777445035847beb5`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `hp-images`,
                path: `${__dirname}/src/images/hp-links`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-postcss',
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                tailwind: true,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'fonts',
                path: `${__dirname}/src/fonts`,
            },
        },
        // {
        //   resolve: "gatsby-plugin-web-font-loader",
        //   options: {
        //     custom: {
        //       families: ['ConnaryFagenThinItalic', 'ConnaryFagenThin', 'ConnaryFagenText', 'ConnaryFagenTextItalic', 'ConnaryFagenRegular', 'ConnaryFagenRegularItalic', 'ConnaryFagenMedium'],
        //       urls: ["/fonts/fonts.css"],
        //     },
        //   },
        // },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};

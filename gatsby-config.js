require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'General Transit Feed Specification',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/home`,
        name: "Home"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/best-practices`,
        name: "Best Practices"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/reference/gtfs/spec`,
        name: "Static Reference"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/reference/gtfs-realtime/spec`,
        name: "Realtime Reference"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/examples`,
        name: "Examples"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/testing`,
        name: "Testing"
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [ // some interesting plugins available to use with
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 250,
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '600',
            }
          },
          'gatsby-remark-copy-linked-files'
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links'
  ],
}

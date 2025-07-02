module.exports = {
  siteMetadata: {
    title: `Yaroslav Vysotskyi`,
    description: `Yaroslav Vysotskyi - fotograf a kameraman Teplice, Ústí nad Labem, Ústecký kraj`,
    author: `websolutionsforyou.com`,
    siteUrl: `https://wisotskiy.cz/`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ["auto", "webp"], 
        },
      },
    },
    {
      resolve: `gatsby-plugin-image`,
      options: {
        formats: ["auto", "webp"], 
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `studio`,
        path: `${__dirname}/src/images/studio`,
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
        name: `terms_and_conditions`,
        path: `${__dirname}/src/terms_and_conditions`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `categories`,
        path: `${__dirname}/categories`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `cs`,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-i18next-wrapper`,
      options: {
        locales: `./i18n/l10n`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        excludes: [
          '/404.html', '/en/404.html', '/ru/404.html', '/404/', '/en/404/', '/ru/404/', '/en/dev-404-page/', '/ru/dev-404-page/'
        ],
        resolveSiteUrl: () => `https://wisotskiy.cz`,
        serialize: ({ path, pageContext }) => {
          return {
            url: `https://wisotskiy.cz${path}`,
            lastmod: pageContext?.modifiedTime,
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kameraman a fotograf Jaroslav Vysockyj`,
        short_name: `Kameraman a fotograf Jaroslav Vysockyj`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },
  ],
}

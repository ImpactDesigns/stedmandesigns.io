require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `stedmandesigns.io`,
    author: {
      name: `Stedman`,
      summary: `likes to Software Engineer.`,
    },
    description: `A portfolio of my web design and development projects.`,
    siteUrl: `https://www.stedmandesigns.io/`,
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-netlify",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    // `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "My portfolio of web projects.",
        short_name: "Stedman's portfolio",
        start_url: "/",
        description: "A portfolio of my UX design and development projects.",
        lang: "en",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/site-favicon.svg", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
  ],
}

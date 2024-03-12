module.exports = {
  siteMetadata: {
    title: `Here is my site title`,
    author: {
      name: `Stedman`,
      summary: `likes to Software Engineer.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://www.stedmandesigns.io/`,
    social: {
      twitter: `thaSteady`,
    },
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    `gatsby-transformer-remark`,
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
  ],
}

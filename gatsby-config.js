/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "The Recipes",
    description: "Nice and clean recipes site",
    author: "Viet",
    person: { name: "viet", age: 29 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "viet", age: 29 },
      { name: "sarah", age: 30 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}

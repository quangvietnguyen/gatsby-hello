import React from "react"
import TagsList from "./TagsList"
import RecipeList from "./RecipeList"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default function AllRecipes() {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)
  //   const recipes = data.allContentfulRecipe.nodes
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipeList recipes={recipes} />
    </section>
  )
}

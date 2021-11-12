import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipeList from "../components/RecipeList"

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default function About({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Pop-up iceland meggings adaptogen.</h2>
            <p>
              Subway tile actually activated charcoal fanny pack edison bulb
              swag semiotics flexitarian chartreuse mustache four loko hoodie
              vape pour-over.
            </p>
            <p>
              Fingerstache polaroid gochujang, salvia meggings food truck
              affogato. Tilde kale chips try-hard, locavore glossier organic
              literally yuccie.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt into the bow"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Our Signatures!</h5>
          <RecipeList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

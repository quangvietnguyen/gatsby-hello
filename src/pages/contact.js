import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import RecipeList from "../components/RecipeList"
import SEO from "../components/SEO"

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

export default function contact({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) {
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>How to contact us!</h3>
            <p>
              Subway tile actually activated charcoal fanny pack edison bulb
              swag semiotics flexitarian chartreuse mustache four loko hoodie
              vape pour-over. Fingerstache polaroid gochujang, salvia meggings
              food truck affogato. Tilde kale chips try-hard, locavore glossier
              organic literally yuccie. Vinyl pop-up ugh hot chicken, 90's four
              dollar toast lo-fi cold-pressed crucifix subway tile 8-bit.
              Gluten-free cred plaid small batch, master cleanse 3 wolf moon
              pickled. Pop-up iceland meggings adaptogen.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xdoyqaaw"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your E-mail</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" id="message" />
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Our Signatures!</h5>
          <RecipeList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

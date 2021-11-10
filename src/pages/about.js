import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function About() {
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
      </main>
    </Layout>
  )
}

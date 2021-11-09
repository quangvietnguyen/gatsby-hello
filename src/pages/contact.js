import React from "react"
import Layout from "../components/Layout"

export default function contact() {
  return (
    <Layout>
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
            <form className="form contact-form">
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
      </main>
    </Layout>
  )
}

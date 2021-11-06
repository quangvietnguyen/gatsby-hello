import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1 style={{ color: "green", textTransform: "capitalize" }}>
        Hello page
      </h1>
      <div>
        <Link to="/about">About page</Link>
      </div>
      <div>
        <Link to="/company/history">History page</Link>
      </div>
      <div>
        <Link to="/contact">Contact page</Link>
      </div>
    </Layout>
  )
}

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Gallery from "../examples/Gallery"
export default function Testing({ data }) {
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

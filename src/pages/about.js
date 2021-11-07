import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"

export default function about() {
  return (
    <Layout>
      <div className={page}>
        <h1>About Page</h1>
        <p>Lorem</p>
      </div>
    </Layout>
  )
}

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { page, text } from "../examples/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>Hello page</h1>
        <div>
          <Link to="/about">About page</Link>
        </div>
        <div>
          <Link to="/company/history">History page</Link>
        </div>
        <div>
          <Link to="/contact">Contact page</Link>
        </div>
        <p>Lorem</p>
      </div>
    </Layout>
  )
}

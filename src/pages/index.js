import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"

export default function Home() {
  return (
    <div>
      <Nav />
      <h1>Hello world!</h1>
      <div>
        <Link to="/about">About page</Link>
      </div>
      <div>
        <Link to="/company/history">History page</Link>
      </div>
    </div>
  )
}

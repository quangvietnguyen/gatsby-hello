import React, { Fragment } from "react"
import Nav from "./nav"
import Footer from "./Footer"
import "normalize.css"
import "../assets/css/css.css"
import "./Layout.css"

export default function Layout(props) {
  return (
    <Fragment>
      <Nav />
      <div className="layout">{props.children}</div>
      <Footer />
    </Fragment>
  )
}

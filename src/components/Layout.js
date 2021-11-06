import React, { Fragment } from "react"
import Nav from "./nav"
import Footer from "./Footer"
import "./Layout.css"
export default function Layout(props) {
  return (
    <Fragment>
      <Nav />
      {props.children}
      <Footer />
    </Fragment>
  )
}

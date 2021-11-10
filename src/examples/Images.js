import React from "react"
import styled from "styled-components"
import meal from "../assets/images/meals.jpeg"
import { StaticImage } from "gatsby-plugin-image"

export default function Images() {
  return (
    <Wrapper>
      <StaticImage src="../assets/images/meals.jpeg" alt="spaghetti" />
      <h2>Images</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

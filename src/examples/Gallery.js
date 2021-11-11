import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
const query = graphql`
  {
    allFile(filter: { relativeDirectory: {}, extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: false }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`
export default function Gallery() {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image
        const pathImage = getImage(image)
        return (
          <article key={index} className="item">
            <GatsbyImage image={pathImage} alt={name} className="gallery-img" />
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

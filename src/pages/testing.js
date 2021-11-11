import React from "react"
import { graphql } from "gatsby"
export default function Testing({ data }) {
  const author = data.site.info.author
  return (
    <div>
      <h2>author: {author}</h2>
    </div>
  )
}
export const data = graphql`
  query {
    site {
      info: siteMetadata {
        author
        description
        person {
          name
          age
        }
        simpleData
        title
        complexData {
          age
          name
        }
      }
    }
  }
`

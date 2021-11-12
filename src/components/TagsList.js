import React from "react"
import setupTags from "../utils/setupTags"

export default function TagsList({ recipes }) {
  const newTags = setupTags(recipes)
  console.log(newTags)
  return (
    <div>
      <p>this is taglist</p>
    </div>
  )
}

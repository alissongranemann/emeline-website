import React from "react"

import ImageCard from "../common/image-card"

const PostItem = ({ title, slug, category, image }) => (
  <article>
    <ImageCard
      slug={slug}
      image={image}
      alt={`featured image thumbnail for post ${title}`}
    >
      <small>{category}</small>
      <h3>{title}</h3>
    </ImageCard>
  </article>
)

export default PostItem

import React from "react"

import ImageCard from "../common/image-card"

const PostItem = ({ title, slug, description, date, image }) => (
  <article>
    <ImageCard
      slug={slug}
      image={image}
      alt={`featured image thumbnail for post ${title}`}
    >
      <small>{date}</small>
      <h3>{title}</h3>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </ImageCard>
  </article>
)

export default PostItem

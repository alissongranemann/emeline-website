import React from "react"

import { Item, Image, Link, ContentContainer } from "./styles"

const PostItem = ({ title, slug, category, date, image }) => (
  <Item>
    <Link to={slug}>
      {image && (
        <Image
          imageInfo={{
            image: image,
            alt: `featured image thumbnail for post ${title}`,
          }}
        />
      )}
      <ContentContainer>
        <small>{category}</small>
        <h3>{title}</h3>
      </ContentContainer>
    </Link>
  </Item>
)

export default PostItem

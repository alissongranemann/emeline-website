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
        {category}
        <h3>{title}</h3>
        <small>{date}</small>
      </ContentContainer>
    </Link>
  </Item>
)

export default PostItem

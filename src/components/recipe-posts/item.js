import React from "react"

import Card from "../common/card"
import { Item, Image, Link, ContentContainer } from "./styles"

const PostItem = ({ title, slug, category, date, image }) => (
  <Card>
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
  </Card>
)

export default PostItem

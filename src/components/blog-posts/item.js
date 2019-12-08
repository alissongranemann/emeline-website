import React from "react"

import Card from "../common/card"
import { Item, Image, Link, ContentContainer } from "./styles"

const PostItem = ({ title, slug, description, date, image }) => (
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
          <small>{date}</small>
          <h3>{title}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </ContentContainer>
      </Link>
    </Item>
  </Card>
)

export default PostItem

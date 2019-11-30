import React from "react"

import Image from "./image"
import { Item, Link, ContentContainer, KeepReading } from "./styles"

const PostItem = ({ title, slug, description, date, image }) => (
  <Item>
    <Link to={slug}>
      {image ? (
        <Image
          imageInfo={{
            image: image,
            alt: `featured image thumbnail for post ${title}`,
          }}
        />
      ) : null}
      <ContentContainer>
        <small>{date}</small>
        <h3>{title}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        {/* <KeepReading to={slug}>Continuar lendo →</KeepReading> */}
      </ContentContainer>
    </Link>
  </Item>
)

export default PostItem

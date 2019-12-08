import React from "react"

import { StyledCard, Link, Image, ContentContainer } from "./styles"

const Card = ({ className, children, slug, image, alt }) => (
  <StyledCard className={className}>
    <Link to={slug}>
      {image && (
        <Image
          imageInfo={{
            image,
            alt,
          }}
        />
      )}
      <ContentContainer>{children}</ContentContainer>
    </Link>
  </StyledCard>
)

export default Card

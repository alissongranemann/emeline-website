import React from "react"
import styled from "styled-components"

import ImageCard from "../common/image-card"

const StyledImageCard = styled(ImageCard)`
  width: 17.5em;
  border-radius: unset;

  &:before {
    border-radius: unset;
  }
`

const Item = ({ title, slug, image }) => (
  <article>
    <StyledImageCard slug={slug} image={image} alt={`ebook ${title}`}>
      <h3>{title}</h3>
    </StyledImageCard>
  </article>
)

export default Item

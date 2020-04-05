import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Card from "../common/card"
import Image from "../preview-compatible-image"

const StyledImageCard = styled(Card)`
  width: 12em;
  border-radius: unset;
`

const Item = ({ title, slug, image }) => (
  <article>
    <Link to={slug}>
      <StyledImageCard slug={slug} image={image} alt={`ebook ${title}`}>
        <Image
          imageInfo={{
            image,
            alt: title,
          }}
        />
      </StyledImageCard>
    </Link>
  </article>
)

export default Item

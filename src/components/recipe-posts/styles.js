import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import PreviewImage from "../preview-compatible-image"
import { device } from "../../config/variables"

export const Container = styled.article`
  display: grid;
  grid-gap: 3rem 2.5rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.laptopL} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 5rem;
`

export const Item = styled.article`
  overflow: hidden;
  text-align: left;
`

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: unset;
`

export const Image = styled(PreviewImage)`
  width: 100%;
  height: 20rem;
  object-fit: cover;
`

export const ContentContainer = styled.section`
  padding: 1rem 2rem;

  > h3 {
    margin: 0.75rem 0;
  }

  > small {
    display: inline-block;
  }
`

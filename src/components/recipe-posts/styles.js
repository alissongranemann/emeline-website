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
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  overflow: hidden;
  text-align: left;

  &:hover {
    transition: all 0.2s ease-out;
    transform: scale(1.02, 1.02);
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.9);
  }
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

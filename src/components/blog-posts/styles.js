import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import PreviewImage from "../preview-compatible-image"
import { device } from "../../config/variables"

export const Container = styled.article`
  display: grid;
  grid-gap: 3rem 2.5rem;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.desktopL} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 5rem;
`

export const Item = styled.article`
  position: relative;
  height: 45rem;
  overflow: hidden;
  text-align: left;

  @media ${device.laptop} {
    height: 30rem;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
`

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: unset;
`

export const Image = styled(PreviewImage)`
  position: absolute !important;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ContentContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  padding: 1rem 2rem;
  z-index: 3;
  color: #fff;

  > h3 {
    font-size: 2.35rem;
  }

  > small {
    display: inline-block;
    margin-bottom: 0.75rem;
  }
`

export const KeepReading = styled.p`
  margin-bottom: unset;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: right;
  margin-top: 2rem;
`

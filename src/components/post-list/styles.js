import { Link as GatsbyLink } from "gatsby"
import GatsbyImage from "gatsby-image"
import styled from "styled-components"

export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 5rem;
`

export const Item = styled.article`
  position: relative;
  width: 45rem;
  height: 30rem;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
  text-align: left;

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

export const Image = styled(GatsbyImage)`
  position: absolute !important;
  width: 100%;
  height: 100%;
  border-radius: unset !important;
  object-fit: cover;
`

export const ContentContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  padding: 1.5rem;
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

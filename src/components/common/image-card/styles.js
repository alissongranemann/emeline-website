import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

import Card from "../card"
import PreviewImage from "../../preview-compatible-image"
import { device } from "../../../config/variables"

export const StyledCard = styled(Card)`
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

    &:hover {
      transition: all 0.2s ease-out;
      transform: scale(1.02, 1.02);
    }
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
  background: #000;
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
    margin-bottom: 1rem;
  }

  > small {
    display: inline-block;
    margin-bottom: 0.75rem;
  }
`

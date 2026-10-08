import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

import Card from "../card"
import PreviewImage from "../../preview-compatible-image"
import { device } from "../../../config/variables"

export const Image = styled(PreviewImage)`
  position: absolute !important;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #000;
  transition: transform 0.4s ease-out;
`

export const StyledCard = styled(Card)`
  position: relative;
  height: 45rem;
  overflow: hidden;
  text-align: left;

  @media ${device.laptop} {
    height: 30rem;
  }

  /* darken only behind the text so the photo keeps its colors */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    /* eased stops avoid a visible edge where the shade ends */
    background: linear-gradient(
      to top,
      rgba(20, 10, 20, 0.85) 0%,
      rgba(20, 10, 20, 0.66) 20%,
      rgba(20, 10, 20, 0.4) 40%,
      rgba(20, 10, 20, 0.17) 58%,
      rgba(20, 10, 20, 0.05) 70%,
      rgba(20, 10, 20, 0) 80%
    );
    z-index: 2;
  }

  &:hover ${Image} {
    transform: scale(1.05);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover ${Image} {
      transform: none;
    }
  }
`

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: unset;
`

export const ContentContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  padding: 2rem 2.5rem;
  z-index: 3;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);

  > h3 {
    font-size: 2.35rem;
    line-height: 1.25;
    margin-bottom: 1rem;
  }

  > small {
    display: inline-block;
    margin-bottom: 0.75rem;
    opacity: 0.9;
  }

  > p {
    margin-bottom: 0;
    line-height: 1.5;
  }
`

import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import PreviewImage from "../preview-compatible-image"

export const Title = styled.h1`
  text-transform: uppercase;
  margin-bottom: 5rem;
`

export const Item = styled.article`
  position: relative;
  width: 45rem;
  height: 30rem;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
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

  &:hover {
    transition: all 0.3s ease-out;
    transform: translateY(-5px);
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.9);
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

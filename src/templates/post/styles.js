import styled from "styled-components"

import { device } from "../../config/variables"
import PreviewImage from "../../components/preview-compatible-image"
import Picture from "./author-picture"

export const Article = styled.article`
  min-height: 80vh;
  max-width: 80vw;
  margin: 6rem auto;

  @media ${device.tablet} {
    max-width: 65vw;
  }

  @media ${device.laptop} {
    max-width: 50vw;
  }
`

export const Image = styled(PreviewImage)`
  width: 100%;
  max-height: 25rem;
  margin-bottom: 3rem;
`

export const Divider = styled.hr`
  margin-top: 3rem;
`

export const Author = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const AuthorPicture = styled(Picture)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`

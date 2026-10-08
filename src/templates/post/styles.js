import styled from "styled-components"

import { device } from "../../config/variables"
import PreviewImage from "../../components/preview-compatible-image"
import Picture from "./author-picture"

export const Article = styled.article`
  min-height: 80vh;
  /* about 70 characters per line, the comfortable range for long reads */
  width: 88%;
  max-width: 720px;
  margin: 6rem auto;
  font-size: max(1.8rem, 16px);
  line-height: 1.75;

  > h1 {
    margin-bottom: 3rem;
  }

  section h2,
  section h3 {
    margin-top: 4rem;
    line-height: 1.3;
  }

  section img {
    border-radius: 8px;
  }

  @media ${device.tablet} {
    width: 80%;
  }
`

export const Image = styled(PreviewImage)`
  width: 100%;
  max-height: 40rem;
  margin-bottom: 3rem;
  border-radius: 12px;
  object-fit: cover;
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

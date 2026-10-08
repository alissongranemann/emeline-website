import styled from "styled-components"

import SectionTitle from "../common/section-title"
import { device } from "../../config/variables"

export const Container = styled.article`
  display: grid;
  grid-gap: 3rem 2.5rem;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }
`

export const Title = SectionTitle

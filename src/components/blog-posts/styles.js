import styled from "styled-components"
import { device } from "../../config/variables"

export const Container = styled.article`
  display: grid;
  grid-gap: 3rem 2.5rem;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }
`

export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 5rem;
`

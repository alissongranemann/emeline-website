import styled from "styled-components"

import { colors } from "../../../config/variables"

// Section heading with a short accent bar under it; the bar follows the
// heading's text-align
const SectionTitle = styled.h2`
  margin-bottom: 5rem;

  /* a list that is the page itself renders this as h1: keep the h2 size */
  h1& {
    font-size: 3.4rem;
  }

  &::after {
    content: "";
    display: block;
    width: 5rem;
    height: 4px;
    margin: 1.5rem auto 0;
    border-radius: 2px;
    background-color: ${({ $accent }) => $accent || colors.primary};
  }
`

export default SectionTitle

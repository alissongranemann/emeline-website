import styled from "styled-components"

import { colors } from "../../../config/variables"

// Section heading with a short accent bar under it; the bar follows the
// heading's text-align
const SectionTitle = styled.h2`
  margin-bottom: 5rem;

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

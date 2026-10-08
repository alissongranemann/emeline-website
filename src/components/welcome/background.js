import styled from "styled-components"

import pattern from "../../images/pattern.png"

const Background = styled.section`
  background-image: linear-gradient(
      to right bottom,
      rgba(125, 140, 103, 0.96),
      rgba(125, 140, 103, 0.96)
    ),
    url(${pattern});
`

export default Background

import styled from "styled-components"

import Background from "./background"
import Logo from "./logo"

export const Header = styled.header`
  margin-bottom: 50px;
`

export const CustomBackground = styled(Background)`
  padding: 0 10%;
  background-color: purple;
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80vh);
`

export const Container = styled.div`
  max-width: 70px;
  padding: 5px 0;
  margin: 0 auto;
`

export const CustomLogo = styled(Logo)`
  width: 10rem;
`

import React from "react"
import styled from "styled-components"

import Logo from "./logo"

const Container = styled.div`
  max-width: 70px;
  margin: auto;
`

const Header = () => (
  <header>
    <Container>
      <Logo />
    </Container>
  </header>
)

export default Header

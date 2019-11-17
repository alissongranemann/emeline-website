import React from "react"
import Fade from "react-reveal/Fade"

import Welcome from "../welcome"
import {
  Header as CustomHeader,
  Container,
  CustomBackground,
  CustomLogo as Logo,
} from "./styles"

const Header = () => (
  <CustomHeader>
    <CustomBackground>
      <Container>
        <Fade>
          <Logo />
        </Fade>
      </Container>
      <Welcome />
    </CustomBackground>
  </CustomHeader>
)

export default Header

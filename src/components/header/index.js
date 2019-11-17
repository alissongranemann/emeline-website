import React from "react"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"

import Logo from "./logo"
import Welcome from "../welcome"
import Background from "../../images/background.jpg"
import { StyledHeader, Container } from "./styles"

const Header = ({ className }) => (
  <StyledHeader className={className} backgroundImg={Background}>
    <Container>
      <Fade>
        <Logo />
      </Fade>
    </Container>
    <Welcome />
  </StyledHeader>
)

Header.propTypes = {
  className: PropTypes.string,
}

Header.defaultProps = {
  className: undefined,
}

export default Header

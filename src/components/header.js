import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Logo from "./logo"
import Welcome from "./welcome"
import Background from "../images/background.jpg"

const StyledHeader = styled.header`
  background-image: linear-gradient(
      to right bottom,
      rgba(49, 18, 49, 1),
      rgba(106, 27, 154, 0.95)
    ),
    url(${props => props.backgroundImg});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80vh);
`

const Container = styled.div`
  max-width: 70px;
  padding: 5px 0;
  margin: 0 auto;
`

const Header = ({ className }) => (
  <StyledHeader className={className} backgroundImg={Background}>
    <Container>
      <Logo />
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

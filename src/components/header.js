import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Logo from "./logo"

const Container = styled.div`
  max-width: 70px;
  margin: auto;
  margin-top: 5px;
`

const Header = ({ className }) => (
  <header className={className}>
    <Container>
      <Logo />
    </Container>
  </header>
)

Header.propTypes = {
  className: PropTypes.string,
}

Header.defaultProps = {
  className: undefined,
}

export default Header

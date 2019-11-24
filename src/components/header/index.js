import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import { CustomLogo as Logo, Header as CustomHeader, Menu } from "./styles"

const Header = () => (
  <CustomHeader>
    <Fade>
      <Logo />
    </Fade>
    <Menu>
      <Link to="/">Início</Link>
      <Link to="/blog">Blog</Link>
    </Menu>
  </CustomHeader>
)

export default Header

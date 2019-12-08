import React from "react"
import { Link } from "gatsby"

import {
  CustomLogo as Logo,
  Header as CustomHeader,
  NavBar,
  MobileNavBar,
} from "./styles"
import Menu from "./menu"

const Header = () => (
  <CustomHeader>
    <Link to="/">
      <Logo />
    </Link>
    <NavBar>
      <Menu />
    </NavBar>
    <MobileNavBar>
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <Menu />
    </MobileNavBar>
  </CustomHeader>
)

export default Header

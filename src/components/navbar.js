import React from "react"
import Scrollspy from "react-scrollspy"
import styled from "styled-components"
import { FaHome, FaUser, FaListAlt, FaWrench, FaComments } from "react-icons/fa"

import styles from "./navbar.module.css"

const StyledScrollSpy = styled(Scrollspy)`
  margin: unset;
  list-style: none;
`

const Nav = styled.nav`
  position: fixed;
  top: 35%;
  left: 5%;
  padding: 15px 10px;
  border-radius: 25px;
  box-shadow: -1px 0px 5px 0px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
`

const ListItem = styled.li`
  margin: unset;

  & + & {
    margin-top: 25px;
  }
`

const Link = styled.a`
  display: inline-flex;
  color: unset;

  svg {
    width: 30px;
    height: auto;
    color: #d8d8d8;
  }
`

const NavBar = () => (
  <Nav>
    <StyledScrollSpy
      items={["welcome", "about", "specialties", "services", "contact"]}
      currentClassName={styles.active}
      offset={-300}
    >
      <ListItem>
        <Link href="#welcome">
          <FaHome />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#about">
          <FaUser />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#specialties">
          <FaListAlt />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#services">
          <FaWrench />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#contact">
          <FaComments />
        </Link>
      </ListItem>
    </StyledScrollSpy>
  </Nav>
)

export default NavBar

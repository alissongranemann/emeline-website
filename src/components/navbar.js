import React from "react"
import Scrollspy from "react-scrollspy"
import styled from "styled-components"
import { FaHome, FaUser, FaListAlt, FaWrench, FaComments } from "react-icons/fa"
import { device } from "../layouts/variables"

import styles from "./navbar.module.css"

const StyledScrollSpy = styled(Scrollspy)`
  margin: unset;
  list-style: none;
`

const Nav = styled.nav`
  display: none;
  position: fixed;
  top: 35%;
  left: 3%;
  padding: 8px 7px;
  border-radius: 25px;
  box-shadow: -1px 0px 5px 0px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  animation: fadein 1s;

  @media ${device.tablet} {
    display: block;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
    width: 15px;
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

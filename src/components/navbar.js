import React from "react"
import Scrollspy from "react-scrollspy"
import styled from "styled-components"

import HomeIcon from "../images/ic-home.svg"
import PersonIcon from "../images/ic-person.svg"
import SpecialtiesIcon from "../images/ic-specialties.svg"
import ServicesIcon from "../images/ic-services.svg"
import ContactIcon from "../images/ic-contact.svg"
import styles from "./navbar.module.css"

const StyledScrollSpy = styled(Scrollspy)`
  margin: unset;
  list-style: none;
`

const Nav = styled.nav`
  position: fixed;
  top: 35%;
  left: 100px;
  padding: 15px 10px;
  border-radius: 25px;
  box-shadow: -1px 0px 5px 0px;
`

const ListItem = styled.li`
  margin: unset;

  & + & {
    margin-top: 20px;
  }
`

const Link = styled.a`
  display: inline-flex;
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
          <HomeIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#about">
          <PersonIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#specialties">
          <SpecialtiesIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#services">
          <ServicesIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#contact">
          <ContactIcon />
        </Link>
      </ListItem>
    </StyledScrollSpy>
  </Nav>
)

export default NavBar

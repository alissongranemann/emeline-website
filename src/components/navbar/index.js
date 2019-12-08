import React from "react"

import {
  FaHome,
  FaUser,
  FaListAlt,
  FaWrench,
  FaComments,
  FaBlog,
  FaBlender,
} from "react-icons/fa"

import { StyledScrollSpy, Nav, ListItem, Link } from "./styles"

const NavBar = () => (
  <Nav>
    <StyledScrollSpy
      items={[
        "welcome",
        "about",
        "specialties",
        "services",
        "blog",
        "recipes",
        "contact",
      ]}
      currentClassName="active"
      offset={-200}
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
        <Link href="#blog">
          <FaBlog />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#recipes">
          <FaBlender />
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

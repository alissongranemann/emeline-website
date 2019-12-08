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

import {
  HOME_SECTION,
  ABOUT_SECTION,
  SPECIALTIES_SECTION,
  SERVICES_SECTION,
  BLOG_SECTION,
  RECIPES_SECTION,
  CONTACT_SECTION,
} from "../../config/variables"

import { StyledScrollSpy, Nav, ListItem, Link, Tooltip } from "./styles"

export const LANDING_PAGE_SECTIONS = [
  { id: HOME_SECTION, icon: <FaHome />, description: "Início" },
  { id: ABOUT_SECTION, icon: <FaUser />, description: "Sobre mim" },
  {
    id: SPECIALTIES_SECTION,
    icon: <FaListAlt />,
    description: "Especialidades",
  },
  { id: SERVICES_SECTION, icon: <FaWrench />, description: "Serviços" },
  { id: BLOG_SECTION, icon: <FaBlog />, description: "Blog" },
  { id: RECIPES_SECTION, icon: <FaBlender />, description: "Receitas" },
  { id: CONTACT_SECTION, icon: <FaComments />, description: "Contato" },
]

const NavBar = () => (
  <Nav>
    <StyledScrollSpy
      items={LANDING_PAGE_SECTIONS.map(item => item.id)}
      currentClassName="active"
      offset={-200}
    >
      {LANDING_PAGE_SECTIONS.map(item => (
        <ListItem>
          <Link href={`#${item.id}`}>{item.icon}</Link>
          <Tooltip>
            <span>{item.description}</span>
          </Tooltip>
        </ListItem>
      ))}
    </StyledScrollSpy>
  </Nav>
)

export default NavBar

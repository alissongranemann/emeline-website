import React from "react"

import {
  FaHome,
  FaUser,
  FaListAlt,
  FaWrench,
  FaComments,
  FaBlog,
  FaBlender,
  FaBook,
} from "react-icons/fa"

import {
  HOME_SECTION,
  ABOUT_SECTION,
  SPECIALTIES_SECTION,
  SERVICES_SECTION,
  BLOG_SECTION,
  RECIPES_SECTION,
  EBOOKS_SECTION,
  CONTACT_SECTION,
} from "../../config/variables"

import { List, Nav, ListItem, Link, Tooltip } from "./styles"
import useScrollSpy from "./use-scroll-spy"

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
  { id: EBOOKS_SECTION, icon: <FaBook />, description: "eBooks" },
  { id: CONTACT_SECTION, icon: <FaComments />, description: "Contato" },
]

const SECTION_IDS = LANDING_PAGE_SECTIONS.map(item => item.id)

const NavBar = () => {
  const activeId = useScrollSpy(SECTION_IDS, -200)

  return (
    <Nav>
      <List>
        {LANDING_PAGE_SECTIONS.map(item => (
          <ListItem
            key={item.id}
            className={item.id === activeId ? "active" : undefined}
          >
            <Link href={`#${item.id}`}>{item.icon}</Link>
            <Tooltip>
              <span>{item.description}</span>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Nav>
  )
}

export default NavBar

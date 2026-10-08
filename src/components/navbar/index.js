import React from "react"

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

import { List, Nav, ListItem, Link, Label } from "./styles"
import useScrollSpy from "./use-scroll-spy"

export const LANDING_PAGE_SECTIONS = [
  { id: HOME_SECTION, description: "Início" },
  { id: ABOUT_SECTION, description: "Sobre mim" },
  { id: SPECIALTIES_SECTION, description: "Especialidades" },
  { id: SERVICES_SECTION, description: "Serviços" },
  { id: BLOG_SECTION, description: "Blog" },
  { id: RECIPES_SECTION, description: "Receitas" },
  { id: EBOOKS_SECTION, description: "eBooks" },
  { id: CONTACT_SECTION, description: "Contato" },
]

const SECTION_IDS = LANDING_PAGE_SECTIONS.map(item => item.id)

const NavBar = () => {
  const activeId = useScrollSpy(SECTION_IDS, -200)

  return (
    <Nav aria-label="Seções da página">
      <List>
        {LANDING_PAGE_SECTIONS.map(item => (
          <ListItem key={item.id}>
            <Link
              href={`#${item.id}`}
              aria-current={item.id === activeId ? "location" : undefined}
            >
              <Label>{item.description}</Label>
            </Link>
          </ListItem>
        ))}
      </List>
    </Nav>
  )
}

export default NavBar

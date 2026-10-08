import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about"
import Specialties from "../components/specialties"
import Services from "../components/services-offered"
import Contact from "../components/contact"
import NavBar from "../components/navbar"
import Welcome from "../components/welcome"
import Blog from "../components/blog-section"
import Recipes from "../components/recipe-section"
import Ebooks from "../components/ebook-section"

import {
  HOME_SECTION,
  ABOUT_SECTION,
  SPECIALTIES_SECTION,
  SERVICES_SECTION,
  BLOG_SECTION,
  RECIPES_SECTION,
  EBOOKS_SECTION,
  CONTACT_SECTION,
} from "../config/variables"

const IndexPage = () => {
  return (
    <Layout>
      <NavBar />
      <Welcome id={HOME_SECTION} />
      <section id={ABOUT_SECTION}>
        <About />
      </section>
      <section id={SPECIALTIES_SECTION}>
        <Specialties />
      </section>
      <section id={SERVICES_SECTION}>
        <Services />
      </section>
      <section id={BLOG_SECTION}>
        <Blog />
      </section>
      <section id={RECIPES_SECTION}>
        <Recipes />
      </section>
      <section id={EBOOKS_SECTION}>
        <Ebooks />
      </section>
      <section id={CONTACT_SECTION}>
        <Contact />
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = ({ location }) => (
  <Seo
    title="Nutricionista Araranguá, Curitibanos e Lages"
    pathname={location.pathname}
  />
)

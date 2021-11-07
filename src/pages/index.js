import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
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

const Section = styled.section`
  h2 {
    text-transform: uppercase;
  }
`
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 1200, height: 1200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Nutricionista Araranguá, Curitibanos e Lages"
        image={data.placeholderImage.childImageSharp.fixed.src}
      />
      <NavBar />
      <Welcome id={HOME_SECTION} />
      <Section id={ABOUT_SECTION}>
        <About />
      </Section>
      <Section id={SPECIALTIES_SECTION}>
        <Specialties />
      </Section>
      <Section id={SERVICES_SECTION}>
        <Services />
      </Section>
      <Section id={BLOG_SECTION}>
        <Blog />
      </Section>
      <Section id={RECIPES_SECTION}>
        <Recipes />
      </Section>
      <Section id={EBOOKS_SECTION}>
        <Ebooks />
      </Section>
      <Section id={CONTACT_SECTION}>
        <Contact />
      </Section>
    </Layout>
  )
}

export default IndexPage

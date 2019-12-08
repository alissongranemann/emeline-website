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
import Blog from "../components/blog"
import Recipes from "../components/recipes"

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
        title="Nutricionista Florianópolis e Lages"
        image={data.placeholderImage.childImageSharp.fixed.src}
      />
      <NavBar />
      <Welcome />
      <Section id="about">
        <About />
      </Section>
      <Section id="specialties">
        <Specialties />
      </Section>
      <Section id="services">
        <Services />
      </Section>
      <Section id="blog">
        <Blog />
      </Section>
      <Section id="recipes">
        <Recipes />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </Layout>
  )
}

export default IndexPage

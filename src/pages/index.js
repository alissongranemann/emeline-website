import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Specialties from "../components/specialties"
import Services from "../components/services-offered"
import Contact from "../components/contact"
import NavBar from "../components/navbar"
import Header from "../components/header"

const Section = styled.section`
  h2 {
    text-transform: uppercase;
  }
`

const StyledHeader = styled(Header)`
  padding-bottom: 50px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Nutricionista" />
    <StyledHeader />
    <NavBar />
    <Section id="about">
      <About />
    </Section>
    <Section id="specialties">
      <Specialties />
    </Section>
    <Section id="services">
      <Services />
    </Section>
    <Section id="contact">
      <Contact />
    </Section>
  </Layout>
)

export default IndexPage

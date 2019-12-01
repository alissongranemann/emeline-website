import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Specialties from "../components/specialties"
import Services from "../components/services-offered"
import Contact from "../components/contact"
import NavBar from "../components/navbar"
import Welcome from "../components/welcome"
import FullLogo from "../images/full-logo.png"

const Section = styled.section`
  h2 {
    text-transform: uppercase;
  }
`
const IndexPage = () => (
  <Layout>
    <SEO title="Nutricionista Florianópolis e Lages" image={FullLogo} />
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
    <Section id="contact">
      <Contact />
    </Section>
  </Layout>
)

export default IndexPage

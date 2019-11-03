import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/welcome"
import About from "../components/about"
import Specialties from "../components/specialties"
import Services from "../components/services"
import Contact from "../components/contact"

const Section = styled.section`
  min-height: 600px;
  margin-bottom: 100px;

  &:first-child {
    min-height: unset;
    height: 50vh;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Nutricionista" />
    <Section id="welcome">
      <Welcome />
    </Section>
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

import React from "react"
import styled from "styled-components"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Specialties from "../components/specialties"
import Services from "../components/services-offered"
import Contact from "../components/contact"

const Section = styled.section`
  h2 {
    font-weight: 900;
    font-size: 34px;
    text-transform: uppercase;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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

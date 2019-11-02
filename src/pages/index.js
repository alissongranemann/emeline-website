import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Welcome from "../components/welcome"
import About from "../components/about"
import Services from "../components/services"
import Testimonials from "../components/testimonials"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Nutricionista" />
    <Welcome />
    <About />
    <Services />
    <Testimonials />
    <Contact />
  </Layout>
)

export default IndexPage

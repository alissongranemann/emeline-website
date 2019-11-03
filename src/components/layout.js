/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./header"
import NavBar from "../components/navbar"
import "./layout.css"
import Footer from "./footer"

const StyledHeader = styled(Header)`
  margin-bottom: 50px;
`

const Main = styled.main`
  margin: 0 auto;
  max-width: 1400px;
  padding: 0px 20px 25px;
  padding-top: 0;
`

const Layout = ({ children }) => {
  return (
    <>
      <StyledHeader />
      <NavBar />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

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

const StyledHeader = styled(Header)`
  margin-bottom: 50px;
`

const Layout = ({ children }) => {
  return (
    <>
      <StyledHeader />
      <NavBar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1400,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Developed by
          {` `}
          <a href="https://github.com/alissongranemann">Alisson</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

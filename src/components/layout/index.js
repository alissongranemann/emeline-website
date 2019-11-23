/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import { purple } from "@material-ui/core/colors"

import "./layout.css"
import Footer from "../footer"

const Main = styled.main`
  padding-top: 0;
`

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
  typography: {
    fontSize: 16,
  },
})

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

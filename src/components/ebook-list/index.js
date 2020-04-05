import React from "react"
import PropTypes from "prop-types"

import PostItem from "./item"
import { Container, Title } from "./styles"

const EbookList = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    <Container>{children}</Container>
  </>
)

EbookList.Item = PostItem

PropTypes.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default EbookList

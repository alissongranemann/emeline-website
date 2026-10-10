import React from "react"
import PropTypes from "prop-types"

import PostItem from "./item"
import { Container, Title } from "./styles"

const PostList = ({ title, headingLevel = "h2", children }) => (
  <>
    <Title as={headingLevel}>{title}</Title>
    <Container>{children}</Container>
  </>
)

PostList.Item = PostItem

PostList.propTypes = {
  title: PropTypes.string.isRequired,
  // "h1" where the list is the page itself rather than a section of it
  headingLevel: PropTypes.oneOf(["h1", "h2"]),
  children: PropTypes.node.isRequired,
}

export default PostList

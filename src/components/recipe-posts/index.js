import React from "react"
import PropTypes from "prop-types"

import PostItem from "./item"
import { Container, Title } from "./styles"

const PostList = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    <Container>{children}</Container>
  </>
)

PostList.Item = PostItem

PropTypes.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default PostList

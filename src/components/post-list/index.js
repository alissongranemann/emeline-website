import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import PostItem from "./item"
import { Title } from "./styles"

const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
`

const PostList = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
)

PostList.Item = PostItem

PropTypes.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default PostList

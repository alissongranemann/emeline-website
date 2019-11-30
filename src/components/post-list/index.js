import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import PostItem from "./item"
import { Title } from "./styles"

const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

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

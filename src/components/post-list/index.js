import React from "react"
import PropTypes from "prop-types"

import PostItem from "./item"
import { Title } from "./styles"

const PostList = ({ title, children }) => (
  <article>
    <Title>{title}</Title>
    {children}
  </article>
)

PostList.Item = PostItem

PropTypes.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default PostList

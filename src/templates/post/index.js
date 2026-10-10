import React from "react"

import Layout from "../../components/layout"
import { Article, Image, Divider, Author, AuthorPicture } from "./styles"

const PostTemplate = ({ title, image, children }) => {
  return (
    <Layout>
      <Article>
        <h1>{title}</h1>
        {image && (
          <Image
            imageInfo={{
              image: image,
              alt: title.trim(),
            }}
          />
        )}
        {children}
        <Divider />
        <Author>
          <AuthorPicture />
          <small>Emeline Abreu, Nutricionista (CRN 10 4569)</small>
        </Author>
      </Article>
    </Layout>
  )
}

export default PostTemplate

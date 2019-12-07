import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Article, Image, Divider, Author, AuthorPicture } from "./styles"

const PostTemplate = ({ title, description, image, children }) => {
  return (
    <Layout>
      <SEO title={title} description={description} image={image} />
      <Article>
        <h1>{title}</h1>
        {image && (
          <Image
            imageInfo={{
              image: image,
              alt: `featured image thumbnail for post ${title}`,
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

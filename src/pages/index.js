import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <p>{data.contentfulArticle.img.title}</p>
    <p>{data.contentfulArticle.img.description}</p>
      <img src={data.contentfulArticle.img.resolutions.src} alt=""/>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
  contentfulArticle {
    img {
      title
      description
      resolutions {
        src
      }
    }
  }
}
`

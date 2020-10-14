import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <p>{data.contentfulArticle.img.title}</p>
    <p>{data.contentfulArticle.img.description}</p>
      <img src={data.contentfulArticle.img.resolutions.src} alt=""/>
    <h1>Hi people</h1>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
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

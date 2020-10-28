import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const aizere = ({ data }) => {

  if(!data) return <h1>Aizere</h1>

  return <Layout>
    <SEO title="Aizere"/>
    <div>
      <p>{data.contentfulArticle.img.title}</p>
      <p>{data.contentfulArticle.img.description}</p>
      <img src={data.contentfulArticle.img.resolutions.src} alt="Aizere" style={{ float: "right" }}/>
      <h1>Hello! My name is {data.contentfulArticle.name}.</h1>
      <p>I'm from {data.contentfulArticle.city + ", " + data.contentfulArticle.country}.</p>
      <p>I'm {data.contentfulArticle.age} yours old pretty girl.</p>
      <p>My birthday is {data.contentfulArticle.birthday}</p>
    </div>
  </Layout>
}

export default aizere

export const query = graphql`
  query AizereQuery {
    contentfulArticle(img: {resolutions: {}}) {
      age
      birthday
      city
      country
      name
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
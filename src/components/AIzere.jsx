import React from "react"
import { graphql } from "gatsby"
import SEO from "./seo"
import Layout from "./layout"

const Aizere = ({ data }) => {

  return <div>
    <p>{data.contentfulArticle.img.title}</p>
    <p>{data.contentfulArticle.img.description}</p>
    <img src={data.contentfulArticle.img.resolutions.src} alt="Aizere" style={{ float: "right" }}/>
    <h1>Hello! My name is {data.contentfulArticle.name}.</h1>
    <p>I'm from {data.contentfulArticle.city + ", " + data.contentfulArticle.country}.</p>
    <p>I'm {data.contentfulArticle.age} yours old pretty girl.</p>
    <p>My birthday is {data.contentfulArticle.birthday}</p>
  </div>
}

export default Aizere
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const player = ({ data }) => {

  if(!data) return <h1>Player</h1>

  return <Layout>
    <SEO title="Player data"/>
    <div style={{ marginTop: "25px" }}>
      <img src={data.contentfulPlayerData.faceImg.resolutions.src} alt="PlayerPhoto" style={{ float: "left" }}/>
      <div style={{ marginLeft: "180px" }}>
        <div><span>Name: </span> <span>{data.contentfulPlayerData.name}</span></div>
        <div><span>Age: </span> <span>{data.contentfulPlayerData.age}</span></div>
        <div><span>Bithday: </span> <span>{data.contentfulPlayerData.birthday}</span></div>
        <div><span>Height: </span> <span>{data.contentfulPlayerData.height}</span></div>
        <div><span>Weight: </span> <span>{data.contentfulPlayerData.weight}</span></div>
        <div><span>Country: </span> <span>{data.contentfulPlayerData.country}</span></div>
        <div><span>City: </span> <span>{data.contentfulPlayerData.city}</span></div>
        <div><span>Goals: </span> <span>{data.contentfulPlayerData.goals}</span></div>
      </div>
    </div>
  </Layout>
}

export default player

export const query = graphql`
  query PlayerQuery2 {
    contentfulPlayerData(faceImg: {}) {
      height
      goals
      weight
      name
      country
      city
      birthday
      age
      faceImg {
        resolutions {
          src
        }
      }
    }
  }
`
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BrowserRouter, NavLink, Route } from "react-router-dom"
import PlayerData from "../components/Players/PlayerData"
import Aizere from "../components/AIzere"

const IndexPage = ({ data }) => (
  <BrowserRouter>
    <Layout>
      <NavLink to="/player" style = {{display: "block"}}>Player link</NavLink>
      <NavLink to="/aizere">Aizere</NavLink>
      <SEO title="Home"/>
      <div>
        <Route path='/player' render={() => <PlayerData data={data}/>}/>
        <Route path='/aizere' render={() => <Aizere data={data}/>}/>
      </div>
    </Layout>
  </BrowserRouter>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
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

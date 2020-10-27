import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BrowserRouter, NavLink, Route } from "react-router-dom"
import PlayerData from "../components/Players/PlayerData"
import Aizere from "../components/AIzere"

const IndexPage = ({ data }) => (
  <BrowserRouter>
    <Layout>
      <SEO title="Home"/>
      <NavLink to="/player" style = {{display: "block"}}>Player link</NavLink>
      <NavLink to="/aizere">Aizere</NavLink>
      <Route path='/player' render={() => <PlayerData data={data}/>}/>
      <Route path='/aizere' render={() => <Aizere data={data}/>}/>
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
//   <div>
//   <Route exact path='/player' render={() => <PlayerData data={data}/>}/>
// <Route exact path='/aizere' render={() => <Aizere data={data}/>}/>
// </div>

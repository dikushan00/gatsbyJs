import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  return <Layout>
      <SEO title="Home"/>
      <Link to="/player" style = {{display: "block"}}>Player link</Link>
      <Link to="/aizere"> Aizere </Link>
    </Layout>
}

export default IndexPage

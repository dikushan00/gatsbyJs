import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import { Link } from "gatsby"

const Layout = ({ children }) => {

  console.log(children)

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Link to="/">Go to Main Page</Link>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

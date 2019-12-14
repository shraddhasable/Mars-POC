import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import SimpleSlider from "./carousal"
import Customerask from "./customerask"
import Homeheader from "./homeheader"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteTitleQueryAndSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="main-wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {/* <mai  n>{children}</main> */}
      <SimpleSlider />
      <Homeheader />
      <Customerask />
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

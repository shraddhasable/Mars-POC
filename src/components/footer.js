import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./footer.css"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `#FFB10E`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {/* <img className="logo" /> */}
      <div className="header">
        <div className="header-right">
          <a className="active" href="#dogfood">DOG FOOD</a>
          <a href="#whypedigree">Why Pedigree</a>
          <a href="#dogcare">Dog Care</a>
          <a href="#gettinganewdog">Getting A New Dog</a>
          <a href="#helpingdogs">Helping Dogs</a>
          <a href="#buynow" className="black-text">Buy Now</a>
          <a href="#newsletter" className="black-text">Newsletter</a>
        </div>
      </div>      
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#FFB10E`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
      <img src={require('../images/pedigree-logo.png')} className="logo" alt=""/>
      <div className="header">
        <div className="header-right">
          <a className="active" href="#dogfood">DOG FOOD</a>
          <a href="/#whypedigree">Why Pedigree</a>
          <a href="/#dogcare">Dog Care</a>
          <a href="/#gettinganewdog">Getting A New Dog</a>
          <a href="/#helpingdogs">Helping Dogs</a>
          <a href="/#buynow" className="black-text">Buy Now</a>
          <a href="/#newsletter" className="black-text">Newsletter</a>
          
          <a href="/#" className="">
            <span class="glyphicon glyphicon-search clickable"></span>
          </a>
        </div>
      </div>      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

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
      {/* <div className="header">
        <div className="header-right">
          <a className="active" href="#dogfood">DOG FOOD</a>
          <a href="#whypedigree">Why Pedigree</a>
          <a href="#dogcare">Dog Care</a>
          <a href="#gettinganewdog">Getting A New Dog</a>
          <a href="#helpingdogs">Helping Dogs</a>
          <a href="#buynow" className="black-text">Buy Now</a>
          <a href="#newsletter" className="black-text">Newsletter</a>
      
        </div>
      </div>   */}

<div id="FooterContent_T2B341F4F004_Col00" class="sf_colsIn col-md-9" data-sf-element="Column 1" data-placeholder-label="Column 1">
    <div class="footer-nav primary">
        <ul>
                <li><a href="/dog-foods" target="_self">Buy Now</a></li>
                <li><a href="/faqs" target="_self">FAQs</a></li>
                <li><a href="/why-pedigree/about-us" target="_self">About Us</a></li>
                <li><a href="/contact-us" target="_self">Contact Us</a></li>
                <li><a href="/pedigree-foundation" target="_self">Foundation</a></li>
                <li><a href="/location-selector" target="_self">Location Selector</a></li>
                <li><a href="/sitemap" target="_self">Sitemap</a></li>
        </ul>
    </div>
    <div class="footer-nav secondary">
        <ul>
                <li><a href="http://www.mars.com/global/policies/privacy/pp-english" target="_blank">Privacy Policy</a></li>
                <li><a href="https://www.mars.com/cookies-english" target="_blank">Cookies Notice</a></li>
                <li class="optanon-item-list"><div class="optanon-show-settings-popup-wrapper"><div class="optanon-show-settings-button optanon-toggle-display"><div class="optanon-show-settings-left"></div><div class="optanon-show-settings-middle"><a class="optanon-show-settings">Cookie Settings</a></div><div class="optanon-show-settings-right"></div></div></div></li>
                <li><a href="https://www.mars.com/legal" target="_blank">Legal</a></li>
                <li><a href="https://www.mars.com/modern-slavery-act" target="_blank">Modern Slavery Act</a></li>
                <li><a href="http://www.mars.com/global/about-mars/mars-pia/our-supply-chain/supplier-relationships.aspx" target="_blank">Supply Chain Transparency</a></li>
                <li><a href="https://www.mars.com/mars-incorporated-adchoices-united-states" target="_blank">Ad Choices</a></li>
                <li><a href="https://www.mars.com/accessibility" target="_blank">Accessibility</a></li>
        </ul>
    </div>
    <div class="copyright">
    <div><p>© 2019 Mars and Affiliates.</p></div>    
  </div>
  </div>
  <div id="FooterContent_T2B341F4F004_Col01" class="sf_colsIn col-md-3" data-sf-element="Column 2" data-placeholder-label="Column 2">
     {/* <ul class="footer-nav social">
            <li>
              <a href="https://www.facebook.com/Pedigree/" target="_blank">
                <img src={require('../images/fb.png')} className="social-icon" alt="fb icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/pedigreeus/?utm_source=ig_profile_share&amp;igshid=pr5fi4viz1ur" target="_blank">
                <img src={require('../images/insta.png')} className="social-icon" alt="fb icon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/pedigreeus" target="_blank">
                <img src={require('../images/twitter.png')} className="social-icon" alt="fb icon" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/pedigreebrand" target="_blank">
                <img src={require('../images/youtube.png')} className="social-icon" alt="fb icon" />
              </a>
            </li>
      </ul> */}



      <ul id="navlist"> 
            <li className="fb-icon"><a href="#"></a></li>
            <li className="insta-icon"><a href="#"></a></li> 
            <li className="twitter-icon"><a href="#"></a></li> 
            <li className="youtube-icon"><a href="#"></a></li> 
      </ul>



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

import React from "react"
import PropTypes from "prop-types"
import NearLogo from "../images/near-logo.svg"

import { COLORS } from "../styles/constants"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      padding: "1rem",
      backgroundColor: COLORS.lightGray,
    }}
  >
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 240px))",
        padding: "1rem 2rem 0rem",
        fontSize: ".85rem",
      }}
    >
      <div style={{ width: 200, marginBottom: 10 }}>
        <img style={{ width: 140, marginBottom: 0 }} src={NearLogo} />
      </div>
      <div style={{width: 350, marginBottom: 10}}>
        <p style={{fontSize: 12, fontWeight: 300, color: "black", marginBottom: 0}}>NEAR is a scalable computing and storage platform that changes how the web works for better. 
          <a href="https://nearprotocol.com"> Learn More</a></p>
      </div>
      <div style={{ fontSize: 12, fontWeight: 300, color: "rgb(153, 153, 153)", marginBottom: 10 }}>
        © {new Date().getFullYear()}
        {` `}
        {`NEAR Inc. All Rights Reserved.`}<br></br>
        <span><a style={{color: "rgb(153, 153, 153)", textDecoration: "underline"}} href="">Terms of Service</a> | <a href="" style={{color: "rgb(153, 153, 153)", textDecoration: "underline"}}>Privacy Policy</a></span>
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

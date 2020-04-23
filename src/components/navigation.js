import React from "react"
import PropTypes from "prop-types"

import NearWallet from "../images/near-wallet.png"

const Navigation = ({ siteTitle }) => (
    <div
      style={{
        height: "70px",
        width: "100%",
        background: "rgb(36, 39, 42)"
      }}>
      <a><img style={{width: 180}} src={NearWallet} /></a>
    </div>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation

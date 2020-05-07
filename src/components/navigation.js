import React from "react"
import PropTypes from "prop-types"

const Navigation = ({ siteTitle }) => (
    <div
      style={{
        height: "70px",
        width: "100%",
        background: "rgb(36, 39, 42)"
      }}>
      <a><img style={{width: 180}} src="https://yc3.s3.us-east-2.amazonaws.com/near-wallet.png" /></a>
    </div>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation

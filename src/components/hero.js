import React from "react"
import PropTypes from "prop-types"

const Hero = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem 2rem",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center", fontWeight: 500 }}>Welcome to NEAR!</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
    This will soon be the NEAR MainNet Wallet
    </p>
    {/* <p style={{ textAlign: "center"}}>Read our <a href="https://nearprotocol.com/blog/mainnet-roadmap/">The Road to MainNet and Beyond</a> post to learn more.</p> */}
    <p style={{ textAlign: "center" }}>
     We've moved the TestNet Wallet to <a href="https://wallet.testnet.near.org">wallet.testnet.near.org</a>
    </p><br></br>
    <p style={{ textAlign: "center", fontSize: 18, fontWeight: 500 }}>
      You can learn more about our MainNet roadmap <a href="https://near.org/blog/near-mainnet-genesis/">here:</a>      
    </p>
    <img style={{width: 700}} src="https://yc3.s3.us-east-2.amazonaws.com/genesis-timeline-1.png" />
  </div>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero

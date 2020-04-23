import React from "react"
import PropTypes from "prop-types"

import Button from "./button"

const Content = ({ siteTitle }) => (
    <div
      style={{
        display: "grid",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 300px))",
        padding: "0rem 2rem",
        fontFamily: "benton-sans, sans-serif",
        fontSize: 16,
        maxWidth: 1050,
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: "4rem"
      }}
    >
      <div style={{ flexDirection: "column"}}>
        <p style={{ fontWeight: 600 }}>1. Use Account Recovery</p>
        <p style={{ lineHeight: "1.4285em", color: "rgb(74, 79, 84)"}}> If you've setup account recovery (Email, Phone, Seed Phrase), click below:</p>
        <a href="https://wallet.testnet.nearprotocol.com/recover-account"><Button>RECOVER ACCOUNT</Button></a>
      </div>
      <div style={{ flexDirection: "column"}}>
        <p style={{ fontWeight: 600 }}>2. Retrieve Keys from LocalStorage</p>
        <p style={{ lineHeight: "1.4285em", color: "rgb(74, 79, 84)"}}>If you are comfortable working with LocalStorage:</p>
        <p style={{ lineHeight: "1.4285em", color: "rgb(74, 79, 84)"}}>Copy your keys and move them to <a href="https://wallet.testnet.nearprotocol.com">wallet.testnet.nearprotocol.com</a></p>
      </div>
      <div style={{ flexDirection: "column"}}>
        <p style={{ fontWeight: 600 }}>3. Contact Us</p>
        <p style={{ lineHeight: "1.4285em", color: "rgb(74, 79, 84)"}}>If the other options don't work for you, <a href="https://discordapp.com/invite/jsAu4pP" target="_blank">please contact us!</a></p>
        <p style={{ lineHeight: "1.4285em", color: "rgb(74, 79, 84)"}}>We'll help you access your account</p>
      </div>
    </div>
)

Content.propTypes = {
  siteTitle: PropTypes.string,
}

Content.defaultProps = {
  siteTitle: ``,
}

export default Content

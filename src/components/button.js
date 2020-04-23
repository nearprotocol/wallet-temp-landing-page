import React from "react"

import "../styles/button.css"

const Button = ({ children }) => (
  <button
    style={{
      borderColor: "rgb(106, 209, 227)",
      background: "rgb(106, 209, 227)",
      color: "rgb(255, 255, 255)",
      fontWeight: 600,
      letterSpacing: "0.5px",
      width: "220px",
      height: "40px",
      fontSize: "14px",
      fontFamily: "benton-sans, sans-serif !important",
      margin: "0px 0px 40px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "initial",
      borderImage: "initial",
      borderRadius: "30px",
      textTransform: "uppercase",
      cursor: "pointer"
    }}
  >
    {children}
  </button>
)

export default Button

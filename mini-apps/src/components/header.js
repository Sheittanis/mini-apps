import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, }}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="headerLink">
          {siteTitle}
        </Link>
        <span className="verticalLine">
          <Link to="/coinFlip" className="headerLink">
            Coin Flip
        </Link>
        </span>
        <span className="verticalLine">
          <Link to="/diceRoll" className="headerLink">
            Roll a Dice
        </Link>
        </span>
        
        <span className="verticalLine">
          <Link to="/countTo" className="headerLink">
            Count To
        </Link>
        </span>
      </h1>
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

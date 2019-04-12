import React from "react"
import { Link } from "gatsby"

const Header = () => (
    <header>
    <div
      style={{
        // margin: `0 auto`,
        //maxWidth: 1200,
        padding: `1.0rem 1.0875rem`,
      }}
    >
      <h2 style={{ margin: 0, float: `right` }}>
        <Link
          to="/"
          style={{color: `white`, textDecoration: `none`}}
        >
          Gian Winckler
        </Link>
      </h2>
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <Link to="/"><li>Home</li></Link>
          <a href="/"><li>About</li></a>
          <a href="/"><li>Info</li></a>
          <a href="/"><li>Contact</li></a>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
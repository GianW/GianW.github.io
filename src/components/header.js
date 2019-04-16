import React from "react"
import {  StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"


class Header extends React.Component {

  render() {
    const { data } = this.props
    const menuLinks = data.site.siteMetadata.menuLinks

    return (
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
              {menuLinks.map(menu => {
                return (<Link key={menu.name} to={menu.link}><li> {menu.name}</li></Link>)
              })}

            </ul>
          </div>
        </div>
      </header>
    )
  }
}

// export default Header

// <Link to="/"><li>Home</li></Link>
// <a href="/"><li>About</li></a>
// <a href="/"><li>Info</li></a>
// <a href="/"><li>Contact</li></a>

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)


import React from "react"
import {  StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

class Header extends React.Component {

  barControl = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";

    if(height === 0){
      document.getElementsByClassName("progress-container")[0].style.display = "none";
    }else{
      document.getElementsByClassName("progress-container")[0].style.display = "block";
    }
  }

  componentDidMount() {
    window.onscroll = () => { this.barControl() };
    this.barControl();
  }

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
              style={{color: `white`, textDecoration: `none`}}>
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
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </header>

    )
  }
}

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


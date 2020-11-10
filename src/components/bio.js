import React from "react"
import { StaticQuery, graphql } from "gatsby"

function Bio() {
    return (
    <StaticQuery
        query={bioQuery}
        render={data => {
            const { author, avatar } = data.site.siteMetadata
            return (
                <div style={{display: `flex`, marginBottom: `10px` }}>
                <img src={avatar} alt="Gian" className="authorImg"/>
                <p>Written by <strong>{author}</strong> who lives and works in Porto Alegre/BR building useful things. <br/>
                <i><a href="https://github.com/GianW" style={{textDecoration: `none`, color: `#b9b9b9`}}>github.com/GianW</a></i></p>
            </div>
            )
        }}
    />
    )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        avatar
      }
    }
  }
`

export default Bio
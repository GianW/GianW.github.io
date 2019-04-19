import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import '../pages/main.css';
import '../pages/prism-tomorrow.css';

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {

  render() {
    const post = this.props.data.markdownRemark
    // const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <div style={{
            margin: `0 auto`,
            maxWidth: `48rem`,
            padding: `1.0rem 1.0875rem`,
            // color: `#b9b9b9`
          }}>
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              // ...scale(-1 / 5),
              display: `block`,
              // marginBottom: rhythm(1),
              // marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <hr/>
          <div dangerouslySetInnerHTML={{ __html: post.html }} className="mainPost" />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(
      fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import './main.css';

import SEO from "../components/seo"
import Layout from "../components/layout"
import PostsGrid from "../components/postsGrid"


class PageIndex extends React.Component {
    render() {
        const { data } = this.props
        // const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges
        return (
            <Layout>
                <SEO
                  title="Gian Winckler page"
                  keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <PostsGrid posts={posts} />
            </Layout>
        )
     }
}


export default PageIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter:  { fileAbsolutePath: { glob: "**/blog/**/*.md" } }
            ) {
            edges{
                node{
                    excerpt
                    fields {
                        slug
                    }
                     frontmatter {
                        title
                        description
                        date(formatString: "MMMM DD, YYYY")
                        tags
                    }
                }
            }
        }
    }
`
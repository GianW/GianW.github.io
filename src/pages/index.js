import React from "react"
import { graphql } from "gatsby"
import './main.css';

import Layout from "../components/layout"
import PostsGrid from "../components/postsGrid"


class PageIndex extends React.Component {
    render() {
        const { data } = this.props
        // const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges

        return (
            <Layout>
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
                    }
                }
            }
        }
    }
`
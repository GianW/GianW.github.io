import React from "react"
import { graphql } from "gatsby"
import './main.css';

import Layout from "../components/layout"

class PageIndex extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges

        console.log(data);
        return (
            <Layout>


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
            filter:  { fileAbsolutePath: { glob: "**/brain/**/*.md" } }
            ) {
            edges{
                node{
                    excerpt
                }
            }
        }
    }
`
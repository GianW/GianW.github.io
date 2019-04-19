import React from "react"
import { graphql } from "gatsby"
import './main.css';

import Layout from "../components/layout"
import BrainsGrid from "../components/brainGrid"

class Brain extends React.Component {
    render() {

        const { data } = this.props
        const brains = data.allMarkdownRemark.edges

        return (
            <Layout>
                <BrainsGrid brains={brains} />
            </Layout>

        )
     }
}


export default Brain


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
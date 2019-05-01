import React from "react"
import { graphql } from "gatsby"
import './main.css';

import Layout from "../components/layout"
import BrainsGrid from "../components/brainGrid"
import SEO from "../components/seo"

class Brain extends React.Component {
    render() {

        const { data } = this.props
        const brains = data.allMarkdownRemark.edges
        const imgs = data.allFile.edges

        return (
            <Layout>
                <SEO
                  title="Gian Winckler page"
                  keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <BrainsGrid brains={brains} imgs={imgs} />
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
        allFile(filter: {extension: {eq: "png"}}) {
          edges {
            node {
              id,
              publicURL
              name
            }
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
import React from "react"
import { graphql } from "gatsby"
import './main.css';

import SEO from "../components/seo"
import Layout from "../components/layout"
import PostsGrid from "../components/postsGrid"
import config from "../components/config"


class PageIndex extends React.Component {

    state = {
        lang: config.getStorage().lang,
        posts: []
    }

    updatePosts = () => {
        const { data } = this.props
        const posts = data.allMarkdownRemark.edges

        this.setState({
            lang: this.state.lang,
            posts: posts
        })
    }

    componentDidMount() {
        this.updatePosts()
    }

    changeLang = (lang) => {
        this.setState({
            lang: lang,
            posts: this.state.posts
        });
        document.getElementById("menuToggle").firstChild.checked = false;

        config.setStorage({lang})
    }

    render() {
        const { data } = this.props
        const ukFlag = data.allFile.edges.find(data => (data.node.name === "ukFlag")).node
        const brFlag = data.allFile.edges.find(data => (data.node.name === "brFlag")).node

        let brClass, ukClass;

        if (this.state.lang === "br"){
          brClass = "langSelected";
          ukClass = "";
        }else{
          ukClass = "langSelected";
          brClass = "";
        };

        return (
            <Layout onChangeLang={this.changeLang} lang={this.state.lang}>
                <div className="flagsRow">
                    <div className="flagsCard">
                        <div className={brClass} onClick={(event) => this.changeLang("br")}>
                          <img src={brFlag.publicURL} alt="Brazil Flag" />
                        </div>
                        <div className={ukClass} onClick={(event) => this.changeLang("en")}>
                          <img src={ukFlag.publicURL} alt="UK Flag"/>
                        </div>
                    </div>
                </div>
                <SEO
                  title="Gian Winckler page"
                  keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <PostsGrid posts={this.state.posts} lang={this.state.lang} />
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
        allFile(filter: {extension: {eq: "png"}, name: {regex:"\/Flag/"}}) {
          edges {
            node {
              publicURL
              name
            }
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
                        lang
                    }
                }
            }
        }
    }
`
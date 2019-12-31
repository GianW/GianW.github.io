import React from "react"
import { graphql } from "gatsby"
import './main.css';

import SEO from "../components/seo"
import Layout from "../components/layout"
import PostsGrid from "../components/postsGrid"
import config from "../components/config"


class PageIndex extends React.Component {

	state = {
		posts: []
	}

	updatePosts = () => {
		const { data } = this.props
		const posts = data.allMarkdownRemark.edges

		this.setState({
				posts: posts
		})
	}

	componentDidMount() {
		this.updatePosts()
	}

	render() {
		const { data } = this.props

		return (
			<Layout onChangeLang={this.changeLang} lang={this.state.lang}>
				<SEO
					title="Gian Winckler page"
					keywords={[`blog`, `gatsby`, `javascript`, `react`]}
				/>
				<PostsGrid posts={this.state.posts} />
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
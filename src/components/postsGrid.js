import React from "react"
import { Link } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

class PostsGrid extends React.Component {
    render() {
        const data = this.props
        const posts = data.posts
        const lang = data.lang
        return(
            <div className="cardGrid">
                {posts.map(({node}) => {
                    const title = node.frontmatter.title || node.fields.slug;
                    const desc = node.frontmatter.description || "";
                    const tags = node.frontmatter.tags || [];
                    const postLang = node.frontmatter.lang;

                    if (postLang === lang) {
                        return(
                            <div className="postCard" key={title}>
                                <Link style={{ textDecoration: `none` }} to={node.fields.slug} >
                                    <h3 className="cardPostTitle">{title}</h3>
                                    <small className="cardPostDate">{node.frontmatter.date}</small>
                                    <p className="cardPostDesc"> {desc}</p>
                                </Link>
                                <div className="tagPostGrid">
                                    {tags.map(tag => (
                                        (
                                            <Link to={`/tags/${kebabCase(tag)}/`} className="tagPost" key={tag}>
                                                {tag}
                                            </Link>
                                        )
                                    ))}
                                </div>
                            </div>
                        )
                    }else{return ""}
                })}
            </div>
        )
    }

}
export default PostsGrid;
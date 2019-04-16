import React from "react"

class PostsLayout extends React.Component {
    render() {
        const data = this.props
        const posts = data.posts
        return(
            <div className="cardGrid">

                 {posts.map(({node}) => {
                    const title = node.frontmatter.title || node.fields.slug;
                    const desc = node.frontmatter.description || "";

                    return(
                        <div key={title} className="postCard">
                            <h3>{title}</h3>
                            <p> {desc}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}
export default PostsLayout;
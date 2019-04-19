import React from "react"
import { Link } from "gatsby"

class BrainGrid extends React.Component {
    render() {
        const data = this.props
        const brains = data.brains

        return(
            <div className="cardGrid">

                 {brains.map(({node}) => {
                    const title = node.frontmatter.title || node.fields.slug;
                    const desc = node.frontmatter.description || "";

                    return(
                        <Link style={{ textDecoration: `none` }} to={node.fields.slug} className="postCard" key={title}>
                            <div>
                                <h3 className="cardPostTitle">{title}</h3>
                                <small className="cardPostDate">{node.frontmatter.date}</small>
                                <p className="cardPostDesc"> {desc}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }

}
export default BrainGrid;
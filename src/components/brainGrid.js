import React from "react"
import { Link } from "gatsby"

class BrainGrid extends React.Component {
    render() {
        const data = this.props
        const brains = data.brains
        const imgs = data.imgs

        return(
            <div className="cardGrid">
                {brains.map(({node}) => {
                    const title = node.frontmatter.title || node.fields.slug;

                    return(
                        <Link style={{ textDecoration: `none` }} to={node.fields.slug} className="brainCard" key={title}>
                            <div>
                                <h3 className="cardBrainTitle">{title}</h3>
                                <p className="cardBrainImg">
                                {imgs.map(img => {
                                    if (img.node.name === title) {
                                        return(<img src={img.node.publicURL} alt={title} key={img.node.id} />)
                                    }else{return ""}
                                })}
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}
export default BrainGrid;
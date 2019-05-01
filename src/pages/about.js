import React from "react"
import './main.css';

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
    render() {

        return (
            <Layout>
                <SEO
                  title="Gian Winckler page"
                  keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <div className="mainPost" style={{margin: `0 auto`,maxWidth: `48rem`,padding: `1.0rem 1.0875rem`}}>
                    <p>Nice to see you here :)</p>
                    <p>I made this page to store my studies, snippets and explanation about projects i done, to keep in a place where i can consult anytime and anywhere.</p>
                    <p>Im would be happy if it's content could be usefull to someone too.</p>
                    <p>Feel free to contact me at <b style={{color:`white`}}>gianbwinckler@gmail.com</b></p><br/>
                    <hr/>
                    <p><a href="https://github.com/GianW" target="_blank" rel="noopener noreferrer">Github</a></p>
                    <p><a href="https://www.linkedin.com/in/giancarlo-winckler-46b6ba82" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                    <p><a href="https://twitter.com/GianWinckler" target="_blank" rel="noopener noreferrer">Twitter</a></p>

                </div>


            </Layout>

        )
     }
}


export default About
import React from "react"
import Header from "./header"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => (
    <div>
        <Helmet>
            <title>Gian Winckler</title>
        </Helmet>
        <Header siteTitle="teste" />
        <main>{children}</main>
    </div>
)


export default Layout
import React from "react"
import Helmet from 'react-helmet'
import "../styles/layout.css"
import Header from "./header.js"
import Footer from "./footer.js"
import favicon from "../../static/favicon.ico"

const Layout = ({ children }) => {
    return (
        <div>
            <Helmet>
                <title>Panite</title>
                <meta name="Panite" content="Paner(完全数)のHPです。自分の気に入った数学パズルなどをまとめたQ-List、素数大富豪にまつわる様々な記事や、おすすめのアニメの紹介などをしています。"/>
                <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
            </Helmet>
            <div className="layout">
                <Header />
                <main style={{marginTop:"60px"}}>{children}</main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
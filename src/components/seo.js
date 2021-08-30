import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description }) => {
    return (
        <Helmet
            htmlAttributes={{ lang: "ja-jp" }}
            title={title}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:site_name`,
                    content: `Panite`,
                },
                {
                    property: `og:locale`,
                    content: `ja_JP`,
                },
                { 
                    name: 'twitter:card', 
                    content: 'summary'
                },
                { 
                    property: 'og:image', 
                    content: '../../static/favicon.ico' 
                },
                { 
                    property: 'og:url', 
                    content: "https://hungry-stonebraker-a61d3b.netlify.app/" 
                }
            ]}
        />
    )
}

export default Seo
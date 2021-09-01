import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router";

const Seo = ({ title, description }) => {
    var pathname= useLocation.pathname;
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
                    name: `twitter:creator`,
                    content: "@tus_toshi1213",
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: description,
                },
                { 
                    property: 'og:image', 
                    content: '../../static/favicon.ico' 
                },
                { 
                    property: 'og:url', 
                    content: 'https://hardcore-wright-1f3de9.netlify.app'+pathname
                }
            ]}
        />
    )
}

export default Seo
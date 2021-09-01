import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router";

const Seo = ({ title, description }) => {
    var pathname= useLocation.pathname;
    return (
        <Helmet>
            <title>{title}</title>
            <html lang="ja_JP" />
            <meta property="description" content={description}></meta>
            <meta property="title" content={title}></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:description" content={description}></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:site_name" content="Panite"></meta>
            <meta property="og:locale" content="ja_JP"></meta>
            <meta property="og:image" content='../../static/favicon.ico'></meta>
            <meta property="og:url" content={'https://hardcore-wright-1f3de9.netlify.app'+pathname}></meta>
            <meta property="twitter:card" content="summary"></meta>
            <meta property="twitter:creater" content="@tus_toshi1213"></meta>
            <meta name="twitter:title" content={title} />
            <meta name="twitter:image" content="../../static/favicon.ico" />
            <meta property="twitter:description" content={description}></meta>
        </Helmet>
    )
}

export default Seo
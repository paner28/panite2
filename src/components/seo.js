import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router";

const Seo = ({ title, description }) => {
    var pathname= useLocation.pathname;
    return (
        <Helmet>
            <meta name="google-site-verification" content="0MSjeENpVJWLuELDIaxF_zlL5nm1DFuh1Z6YNhlwuQs" />
            <title>{title}</title>
            <html lang="ja_JP" />
            <meta name="description" content={description}></meta>
            <meta name="title" content={title}></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:description" content={description}></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:site_name" content="Panite"></meta>
            <meta property="og:locale" content="ja_JP"></meta>
            <meta property="og:image" content='../../static/favicon.ico'></meta>
            <meta property="og:url" content={'https://hardcore-wright-1f3de9.netlify.app'+pathname}></meta>
            <meta name="twitter:card" content="summary"></meta>
            <meta name="twitter:creater" content="@tus_toshi1213"></meta>
            <meta name="twitter:title" content={title} />
            <meta name="twitter:image" content="https://raw.githubusercontent.com/paner28/panite2/main/static/favicon.ico" />
            <meta name="twitter:description" content={description}></meta>
        </Helmet>
    )
}

export default Seo
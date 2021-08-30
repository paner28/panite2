import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/404.css"

export default function NotFound() {
    return (
        <Layout>
            <Seo title="Not Found | Panite" description="ページが見つかりません" />
            <div className="not-found-message">
                <h1>404 Not Found</h1>
                <Link to="/">Homeに戻る</Link>
            </div>
            <img src="https://images.unsplash.com/photo-1533225737818-2a9101586b15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" className="not-found-image" alt="not found" />
        </Layout>
    )
}
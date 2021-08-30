import React from "react"
import PostLink from "../components/post-link"
import { graphql, Link } from "gatsby"
import { Pagination } from "../components/tag-pagination"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/list.css"

export default function Home({ data,pageContext }) {
    const num = parseInt(pageContext.num)
    const tag = pageContext.tag
    return (
        <Layout>
            <Seo title="Q-List | Panite" description="Panerが気に入った問題や数学クイズのリストです." />
            <section id="banner" className="style1" style={{height:"300px"}}>
                <div className="inner">
                <header className="major">
                    <h1>Q-List <span style={{fontSize:"medium"}}>[{tag}]({pageContext.current})</span></h1>
                </header>
                <div className="content">
                    <p>Panerが気に入った問題や数学クイズのリストです.</p>
                </div>
                </div>
            </section>
            <div className="list">
                {data.allContentfulPost.edges.map(edge =>
                    <PostLink key={edge.node.slug} post={edge.node} />
                )}
            </div>
            <Pagination totalCount={num} value={pageContext.current} tag={tag}/>
            <div style={{textAlign:"center"}}>
                <Link to="/"><button type="button" className="btn btn-outline-dark">Homeに戻る</button></Link>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ($limit: Int, $skip: Int, $tag: String!) {
            allContentfulPost(filter: {body: {childMarkdownRemark: {frontmatter: {tags: {in: [$tag]}}}}}, 
            limit:$limit, 
            skip:$skip
        ) {
            edges {
                node {
                    title
                    image {
                        title
                        file {
                            url
                        }
                    }
                    body {
                        childMarkdownRemark {
                            html
                            frontmatter {
                                tags
                                title
                            }
                        }
                      }
                    description {
                        description
                    }
                    slug
                    updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
                }
            }
        },
        allMarkdownRemark(
            sort: { fields: frontmatter___title, order: DESC }
            filter: {frontmatter: {tags: {in: [$tag]}}} 
        ) {
        group(field: frontmatter___tags) {
            fieldValue
            totalCount
        }
      }
    }
`
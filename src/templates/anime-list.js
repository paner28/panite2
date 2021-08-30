import React from "react"
import { graphql, Link } from "gatsby"
import { Pagination } from "../components/anime-pagination"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Home({ data, pageContext }) {
    return (
        <Layout>
            <Seo title="Anime-List | Panite" description="Panerが好きなアニメやおススメしたいアニメのリストです" />
            <section id="banner" className="style5" style={{height:"300px"}}>
                <div className="inner">
                <header className="major">
                    <h1>Anime-List</h1>
                </header>
                <div className="content">
                    <p>Panerが好きなアニメやおススメしたいアニメのリストです</p>
                </div>
                </div>
            </section>
            <div className="container-fluid content" style={{height:"auto"}}>
                <div className="row">
                    {data.allContentfulAnimePost.edges.map(edge =>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card">
                                <img src={edge.node.picture} className="card-img-top" alt=""/>
                                <div className="card-body" style={{margin:"0"}}>
                                    <h4 className="card-title">{edge.node.title}</h4>
                                    {/* <p>{edge.node.suggest}</p> */}
                                    <div className="card-text" dangerouslySetInnerHTML={{ __html: edge.node.feedback.childMarkdownRemark.html }}/>
                                </div>
                                <div className="container">
                                    <div className="card-footer row">
                                        <a href={edge.node.home} className="btn btn-primary col-5" style={{marginRight:"15px"}}>HP</a>
                                        <a href={edge.node.annict} className="btn btn-primary col-6">Annict</a>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    )}
                </div>
            </div>
            <Pagination totalCount={data.allContentfulAnimePost.totalCount} value={pageContext.current}/>
            <div style={{textAlign:"center"}}>
                <Link to="/"><button type="button" className="btn btn-outline-dark">Homeに戻る</button></Link>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query allContentfulAnimePost($limit: Int, $skip: Int) {
        allContentfulAnimePost(limit:$limit, skip:$skip, sort: { fields: suggest, order: DESC }) {
            edges {
                node {
                    picture
                    situation
                    suggest
                    updatedAt
                    title
                    home
                    annict
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                    feedback {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            },
            totalCount
        }
    }
`
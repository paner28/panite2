import React from "react"
import PostLink from "../components/post-link"
import { graphql , Link } from "gatsby"
import { Pagination } from "../components/pagination"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/list.css"

export default function Home({ data, pageContext }) {
  return (
    <Layout>
      <Seo title="Q-List | Panite" description="Panerが気に入った問題や数学クイズのリストです." />
      <section id="banner" className="style1" style={{height:"300px"}}>
        <div className="inner">
          <header className="major">
              <h1>Q-List <span style={{fontSize:"medium"}}>({pageContext.current})</span></h1>
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
      <Pagination totalCount={data.allContentfulPost.totalCount} value={pageContext.current}/>
      <div style={{textAlign:"center"}}>
        <Link to="/"><button type="button" className="btn btn-outline-dark">Homeに戻る</button></Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query allContentfulPost($limit: Int, $skip: Int) {
      allContentfulPost(limit:$limit, skip:$skip,sort: { fields: updatedAt, order: DESC }) {
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
        },
        totalCount
      }
    }
`
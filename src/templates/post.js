import { Link, navigate} from "gatsby";
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/post.css"
import ShareButtonList from "../components/shareButtonList";

export default function Post({ pageContext }) {
    const { title, updatedAt, image } = pageContext.post;
    const body = pageContext.post.body.childMarkdownRemark.html;

    return (
        <Layout>
            <Seo title={title} description={body} />
            <section id="banner" className="style1" style={{minHeight:"200px",height:"100%"}}>
                <div className="inner">
                    <header className="major">
                        <h1>{title}</h1>
                    </header>
                    {/* <div className="container">
                        <div className="row"> */}
                        <div style={{display:"flex",flexWrap:"wrap"}}>
                                <div className="">
                                    <p>{updatedAt}</p>
                                </div>
                                <div className="">
                                    {pageContext.post.body.childMarkdownRemark.frontmatter.tags.map(tags =>
                                        <Link className="badge badge-primary link-text" style={{backgroundColor:"skyblue",margin:"2px",height:"25px"}} to={`/tags/${tags}/1`}>{tags}</Link>
                                    )}
                                </div>
                                <div className="">
                                    <ul className="icons">
                                        <ShareButtonList title="Panite" url={`https://hungry-stonebraker-a61d3b.netlify.app/`} />
                                    </ul>
                                </div>
                        </div>
                        {/* </div>
                    </div> */}
                </div>
            </section>
            <div className="post-content">
                <div style={{textAlign:"center"}}>
                    <img src={image.file.url} className="post-image picture" alt="post-cover"></img>
                </div>
                <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
            </div>
            <div className="container" style={{textAlign:"center"}}>
                <div className="row">
                    <div className="col-6">
                        <button type="button" className="btn btn-outline-dark" onClick={() => navigate(-1)} style={{marginRight:"20px"}}>リストに戻る</button>
                    </div>
                    <div className="col-6">
                        <Link to="/"><button type="button" className="btn btn-outline-dark">Homeに戻る</button></Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
import { Link } from "gatsby";
import React from "react"
import "../styles/post-link.css"

export default function PostLink({ post }) {
    const { title, updatedAt, image } = post;
    const pageLink = `/post/${post.slug}/`
    const description = post.description.description

    return (
        <Link className="link-text" to={pageLink}>
            <div className="card">
                <div className="row">
                    <img src={image.file.url} className="card-img-top col-lg-4 col-sm-6" alt="post-cover" style={{maxWidth:"200px",maxHeight:"200px"}}></img>
                    <div className="card-body col-lg-8 col-sm-6">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <p className="post-link-date">{updatedAt}</p>
                        {post.body.childMarkdownRemark.frontmatter.tags.map(tags =>
                            <Link className="badge badge-primary link-text" style={{backgroundColor:"black",margin:"2px"}} to={`/tags/${tags}/1`}>{tags}</Link>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}
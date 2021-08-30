import { Link } from "gatsby"
import React from "react"
import "../styles/footer.css"
import ShareButtonList from "./shareButtonList"
import { useLocation } from "@reach/router"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8" style={{marginBottom:"40px"}}>
                        <div className="container">
                            <div className="row">
                                <Link to="/" className="footer-link col-md-4 col-lg-2">Home</Link>
                                <Link to="/list/1" className="footer-link col-md-4 col-lg-2">Q-List</Link>
                                <Link to="/prime" className="footer-link col-md-4 col-lg-2">Prime</Link>
                                <Link to="/math" className="footer-link col-md-4 col-lg-2">Math</Link>
                                <Link to="/program" className="footer-link col-md-4 col-lg-2">Progaram</Link>
                                <Link to="/hobby" className="footer-link col-md-4 col-lg-2">Hobby</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <ul className="icons">
                            <ShareButtonList title="Panite" url={`https://hardcore-wright-1f3de9.netlify.app${useLocation().pathname}`} />
                        </ul>
                    </div>
                </div>
            </div>
            © {new Date().getFullYear()} Panite
        </footer>
    )
}
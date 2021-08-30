import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"

export default function Header(props) {
    return (
        <header className="sticky-top header">
            <div>
                <Link to="/" className="logo link-text"><strong>Panite</strong> <span>by Gatsby</span></Link>
            </div>
            <div className="hamburger-menu">
                <input type="checkbox" id="menu-btn-check"/>
                <label for="menu-btn-check" className="menu-btn"><span></span></label>
                <div className="menu-content">
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/list/1">Q-LIST</Link>
                        </li>
                        <li>
                            <Link to="/prime">PRIME</Link>
                        </li>
                        <li>
                            <Link to="/math">MATH</Link>
                        </li>
                        <li>
                            <Link to="/program">PROGRAM</Link>
                        </li>
                        <li>
                            <Link to="/hobby">HOBBY</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
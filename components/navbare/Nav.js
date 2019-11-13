import React from 'react'
import "./Nav.scss"
import logo from "../../logo.png"

export default function Nav() {
    return (
        <nav className="nav">
            <img src={logo} alt="logo"/>
            <ul className="navlinks">
                <li>
                    <a href="/" className="navlink">
                        home
                    </a>
                </li>
                <li>
                    <a href="/" className="navlink">
                        about
                    </a>
                </li>
                <li>
                    <a href="/" className="navlink active">
                        tours
                    </a>
                </li>
            </ul>
        </nav>       
    )
}

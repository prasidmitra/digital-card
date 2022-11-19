import React from "react"
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"


export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <a href="https://twitter.com/prasidmitra"> 
                    <img src={twitter} />
                </a>
                <a href="https://www.facebook.com/prasidmitra"> 
                    <img src={facebook} />
                </a>
                <a href="https://www.instagram.com/prasidmitra/"> 
                    <img src={instagram} />
                </a>
                <a href="https://github.com/prasidmitra/"> 
                    <img src={github} />
                </a>  
            </div>
        </footer>
    )
}
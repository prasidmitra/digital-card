import React from "react"
import headshot from "../images/headshot.jpg"
import email from "../images/Icon.png"
import linkedin from "../images/Vector.png"

export default function Info() {
    return (
        <div>
            <img className="info-headshot" src={headshot} />
            <h1 className="info-name">Prasid Mitra</h1>
            <h2 className="info-position">Senior Software Engineer</h2>
            <h3 className="info-email">prasidmitra@gmail.com</h3>
            <div className="info-buttons">
                <a href="mailto:prasidmitra@gmail.com" style={{textDecoration: 'none'}}>
                    <button className="email-button" type="button">
                        <div>
                            <img src={email} />
                            <h4>Email</h4>
                        </div>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/prasidmitra" style={{textDecoration: 'none'}}>
                    <button className="linkedin-button" type="button">
                        <div>
                            <img src={linkedin} />
                            <h4>LinkedIn</h4>
                        </div>
                    </button>
                </a>
            </div>
        </div>
    )
}
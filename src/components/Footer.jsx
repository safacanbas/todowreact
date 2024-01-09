import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <p>Made by <a href="https://www.linkedin.com/in/safacanbas/">Safa Can BAŞ</a> ⓒ {year}</p>
        </div>
    )
}

export default Footer;
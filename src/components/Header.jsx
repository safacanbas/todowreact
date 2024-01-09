import React from "react";
import Logo from "../components/images/logo.gif"


function Header() {
    return(
        <header>
            <img src={Logo} alt="todo-logo" />
            <h1>MEMORY</h1>
        </header>
    );
}

export default Header;
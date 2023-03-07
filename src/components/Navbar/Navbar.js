import React from "react";
import "./Navbar.css"

const Navbar = () => {

    return (
        <>
            <navbar className="navbar">
                <div className="navbar__icon">
                    <span class="material-symbols-outlined">
                        diamond
                    </span>
                </div>
                <ul className="navbar__list">
                    <li>Home</li>
                    <li>Sobre</li>
                </ul>
            </navbar>
        </>
    )
}

export default Navbar;
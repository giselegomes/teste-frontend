import React from "react";
import "./Menu.css"

const Menu = () => {

    return (
        <>
            <section className="menu">
                <div className="perfil">
                    <img className="perfil__photo" src="https://github.com/giselegomes.png" alt="foto de perfil"></img>
                    <p className="perfil__name">Gisele Gomes</p>
                    <p className="perfil__plan">your plan: <span className="perfil__plan--type">Premium</span></p>      
                </div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </>
    )
}

export default Menu;
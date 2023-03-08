import React from "react";
import "./Menu.css"

const Menu = () => {

    return (
        <>
            <section className="menu">
                <div className="perfil">
                    <img className="perfil__photo" src="https://github.com/giselegomes.png" alt="foto de perfil"></img>
                    <p className="perfil__name">Gisele Gomes</p>
                    <p className="perfil__plan">Your plan: <span className="perfil__plan--type">Premium</span></p>
                </div>
                <ul className="list">
                    <p className="list__title">General</p>
                    <li className="list__item">
                        <span class="material-symbols-outlined">
                            empty_dashboard
                        </span>
                        Overview
                    </li>
                    <li className="list__item">
                        <span class="material-symbols-outlined">
                            quick_reference_all
                        </span>
                        Analytics</li>
                    <li className="list__item">
                        <span class="material-symbols-outlined">
                            savings
                        </span>
                        Finance
                    </li>
                    <li className="list__item">
                        <span class="material-symbols-outlined">
                            account_box
                        </span>
                        Account
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Menu;
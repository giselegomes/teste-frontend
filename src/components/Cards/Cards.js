import React from "react";
import Pagination from "../Pagination/Pagination";
import "./Cards.css";
import { useState, useEffect } from "react";

const Cards = () => {

    const [cards, setCards] = useState([])
    const [cardsPerPage, setItemsPerPage] = useState(25)
    const [currentPage, setCurrentPage] = useState(0)


    const pages = Math.ceil(cards.length / cardsPerPage)
    const startIndex = currentPage + cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = cards.slice(startIndex, endIndex)

    useEffect(() => {

        fetch('https://compras.dados.gov.br/contratos/v1/contratos.json?uasg=153229')
            .then(response => response.json())
            .then(data => setCards(data._embedded.contratos))
    }, []
    )

    return (
        <>
            <section className="content_cards">
                <section className="cards">
                    {currentCards.map(card => {
                        return (
                            <div className="cards__item">
                                <p><span className="cards__item--bold">uasg: </span> {card.uasg}</p>
                                <p><span className="cards__item--bold">modalidade: </span> {card.modalidade_licitacao}</p>
                                <p><span className="cards__item--bold">número do aviso da licitação: </span> {card.numero_aviso_licitacao}</p>
                                <a href={`https://compras.dados.gov.br${card._links.self.href}`} rel="noreferrer" target="_blank">
                                    visualizar
                                    <span class="material-symbols-outlined">
                                        open_in_new
                                    </span>
                                </a>
                            </div>
                        )
                    })}
                </section>
                <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </section>
        </>
    )
}

export default Cards;
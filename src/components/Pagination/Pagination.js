import React from "react";
import "./Pagination.css"
 
const Pagination = ({pages, currentPage, setCurrentPage}) => {

    return (
        <>
             <section className="pagination">
                {Array.from(Array(pages), (card, index) => {
                    return <button 
                        style = { index === currentPage ? { backgroundColor: "gray"} : null }
                        className="pagination__button"
                        value={index} 
                        onClick={(e) => 
                            setCurrentPage(Number(e.target.value))}>
                                {index + 1}
                        </button>
                })}
            </section>
        </>
    )
}

export default Pagination;
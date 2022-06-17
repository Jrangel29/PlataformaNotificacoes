import React from 'react';

const Pagination = ({itemsPerPage, totalItems, paginate, currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <nav className='p-0 paginacaoTop'>
            <ul className='pagination paginacao'>
                {pageNumbers.map(number => {
                    return(
                        <li key={number} className='page-item'>
                            {console.log(currentPage, number)}
                            <a onClick={() => paginate(number)} className={currentPage === number ? 'page-link selecionado' : 'page-link notSelecionado'}>
                                {number}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination;
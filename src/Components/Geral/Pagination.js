import React from 'react';

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
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
                            <a onClick={() => paginate(number)} className='page-link'>
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
import React from 'react';

const Pagination = ({itemsPerPage, totalItems, paginate, currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <nav className='p-0 paginacaoTop'>
            <ul className='pagination paginacao'>
                <li className='page-item2'>
                    <a onClick={() => paginate(1)} className={'page-link notSelecionado'}>
                        Start
                    </a>
                </li>
                <li className='page-item2'>
                    <a onClick={currentPage - 1 < 1 ? null : () => paginate(currentPage - 1)} className={'page-link notSelecionado'}>
                        Prev
                    </a>
                </li>
                {pageNumbers.map(number => {
                    if(currentPage - 5 <= number && currentPage + 5 >= number || currentPage < 6 && number <= 11 || currentPage > pageNumbers.length - 6 && number > pageNumbers.length - 11){
                        return(
                            <li key={number} className='page-item'>
                                <a onClick={() => paginate(number)} className={currentPage === number ? 'page-link selecionado' : 'page-link notSelecionado'}>
                                    {number}
                                </a>
                            </li>
                        )
                    }
                })}
                <li className='page-item2'>
                    <a onClick={currentPage + 1 > pageNumbers.length ? null : () => paginate(currentPage + 1)} className={'page-link notSelecionado'}>
                        Next
                    </a>
                </li>
                <li className='page-item2'>
                    <a onClick={() => paginate(pageNumbers.length)} className={'page-link notSelecionado'}>
                        End
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;
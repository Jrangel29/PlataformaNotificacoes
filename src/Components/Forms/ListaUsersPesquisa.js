import React from 'react';

const ListaUsersPesquisa = (props) => {
    return(
        <>
            <input type="text" placeholder="Pesquisa" className='barraPesquisaForm py-1 px-3 w-100'/>
            {props.tipo === "Individuais" ?
                <span className='row ListaUsersForm'>
                    <span className='col-12 row itemListaUsersFormCasa m-0'>
                        <p className='col-6 infoCasaForm'><b>Casa do Ricardo</b></p>
                    </span>
                    <span className='col-12 row itemListaUsersForm m-0'>
                        <p className='col-8 infoCasaFormUser'>Ricardo Lima</p>
                        <span className='col-4'>
                            <p className='btn btn-primary btnListaUser disabled disabledButton'>Adicionado</p>
                        </span>
                    </span>
                    <span className='col-12 row itemListaUsersForm m-0'>
                        <p className='col-8 infoCasaFormUser'>Patrícia Silva</p>
                        <span className='col-4'>
                            <p className='btn btn-primary btnListaUser disabled disabledButton'>Adicionado</p>
                        </span>
                    </span>
                    <span className='col-12 row itemListaUsersFormCasa m-0'>
                        <p className='col-6 infoCasaForm'><b>Casa Marco</b></p>
                    </span>
                    <span className='col-12 row itemListaUsersForm m-0'>
                        <p className='col-8 infoCasaFormUser'>Marco Costa</p>
                        <span className='col-4'>
                            <p className='btn btn-primary btnListaUser disabled disabledButton'>Adicionado</p>
                        </span>
                    </span>
                    <span className='col-12 row itemListaUsersFormCasa m-0'>
                        <p className='col-6 infoCasaForm'><b>Casa Maria</b></p>
                    </span>
                    <span className='col-12 row itemListaUsersForm m-0'>
                        <p className='col-8 infoCasaFormUser'>Bruno Costa</p>
                        <span className='col-4'>
                            <p className='btn btn-primary btnListaUser disabled disabledButton'>Adicionado</p>
                        </span>
                    </span>
                    <span className='col-12 row itemListaUsersForm m-0'>
                        <p className='col-8 infoCasaFormUser'>Maria Costa</p>
                        <span className='col-4'>
                            <p className='btn btn-primary btnListaUser'>Adicionar</p>
                        </span>
                    </span>
                </span>
            :
                <span className='row ListaUsersForm'>
                    <span className='col-12 row itemListaUsersFormCasa m-0'>
                        <p className='col-8 infoCasaForm'><b>Pessoas que assistem a "Simpsons"</b></p>
                        <span className='col-4'>
                            <p className='btn btn-primary btnListaUser disabled disabledButton'>Adicionado</p>
                        </span>
                    </span>
                </span>
            }
        </>             
                                
    ) 
}

export default ListaUsersPesquisa;
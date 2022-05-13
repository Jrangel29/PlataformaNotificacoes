import React from 'react';

export const ListaUsersPesquisa = (props) => {
    return(
        <>
            <input type="text" placeholder="Pesquisa" className='barraPesquisaForm py-1 px-3 w-100'/>
        
            <span className='row ListaUsersForm'>
                <span className='col-12 row itemListaUsersFormCasa m-0'>
                    <p className='col-6 infoCasaForm'><b>Casa do Ricardo</b></p>
                </span>
                <span className='col-12 row itemListaUsersForm m-0'>
                    <p className='col-8 infoCasaFormUser'>Ricardo Lima</p>
                    <span className='col-4'>
                        <p className='btn btnListaUser disabled disabledButton'>Adicionado</p>
                    </span>
                </span>
                <span className='col-12 row itemListaUsersForm m-0'>
                    <p className='col-8 infoCasaFormUser'>Patrícia Silva</p>
                    <span className='col-4'>
                        <p className='btn btnListaUser disabled disabledButton'>Adicionado</p>
                    </span>
                </span>
                <span className='col-12 row itemListaUsersFormCasa m-0'>
                    <p className='col-6 infoCasaForm'><b>Casa Marco</b></p>
                </span>
                <span className='col-12 row itemListaUsersForm m-0'>
                    <p className='col-8 infoCasaFormUser'>Marco Costa</p>
                    <span className='col-4'>
                        <p className='btn btnListaUser disabled disabledButton'>Adicionado</p>
                    </span>
                </span>
                <span className='col-12 row itemListaUsersFormCasa m-0'>
                    <p className='col-6 infoCasaForm'><b>Casa Maria</b></p>
                </span>
                <span className='col-12 row itemListaUsersForm m-0'>
                    <p className='col-8 infoCasaFormUser'>Bruno Costa</p>
                    <span className='col-4'>
                        <p className='btn btnListaUser disabled disabledButton'>Adicionado</p>
                    </span>
                </span>
                <span className='col-12 row itemListaUsersForm m-0'>
                    <p className='col-8 infoCasaFormUser'>Maria Costa</p>
                    <span className='col-4'>
                        <p className='btn btnListaUser'>Adicionar</p>
                    </span>
                </span>
            </span>
            
        </>             
                                
    ) 
}

export const ListaUsersAdicionados = (props) => {
    return(
        <span className='row ListaUsersFormAdicionados'>
            <span className='col-12 row itemListaUsersFormCasa m-0'>
                <p className='col-6 infoCasaForm'><b>Casa do Ricardo</b></p>
            </span>
            <span className='col-12 row itemListaUsersForm m-0'>
                <p className='col-8 infoCasaFormUser'>Ricardo Lima</p>
                <span className='col-4'>
                    <p className='btn btnListaUser'>Remover</p>
                </span>
            </span>
            <span className='col-12 row itemListaUsersForm m-0'>
                <p className='col-8 infoCasaFormUser'>Patrícia Silva</p>
                <span className='col-4'>
                    <p className='btn btnListaUser'>Remover</p>
                </span>
            </span>
            <span className='col-12 row itemListaUsersFormCasa m-0'>
                <p className='col-6 infoCasaForm'><b>Casa Marco</b></p>
            </span>
            <span className='col-12 row itemListaUsersForm m-0'>
                <p className='col-8 infoCasaFormUser'>Marco Costa</p>
                <span className='col-4'>
                    <p className='btn btnListaUser'>Remover</p>
                </span>
            </span>
            <span className='col-12 row itemListaUsersFormCasa m-0'>
                <p className='col-6 infoCasaForm'><b>Casa Maria</b></p>
            </span>
            <span className='col-12 row itemListaUsersForm m-0'>
                <p className='col-8 infoCasaFormUser'>Bruno Costa</p>
                <span className='col-4'>
                    <p className='btn btnListaUser'>Remover</p>
                </span>
            </span>
            <span className='col-12 row itemListaUsersForm m-0'>
                <p className='col-8 infoCasaFormUser'>Maria Costa</p>
                <span className='col-4'>
                    <p className='btn btnListaUser'>Remover</p>
                </span>
            </span>
        </span>        
                                
    )
}

export const ListaCasasPesquisa = (props) => {
    return(
        <>
            <input type="text" placeholder="Pesquisa" className='barraPesquisaForm py-1 px-3 w-100'/>
            <span className='row ListaUsersForm'>
                <span className='col-12 row itemListaUsersFormCasa m-0'>
                    <p className='col-8 infoCasaForm'><b>Casa do Rui</b></p>
                    <span className='col-4'>
                        <p className='btn btnListaUser disabled disabledButton'>Escolhido</p>
                    </span>
                </span>
                <span className='col-12 row itemListaUsersFormCasa m-0'>
                    <p className='col-8 infoCasaForm'><b>Casa do Ricardo</b></p>
                    <span className='col-4'>
                        <p className='btn btnListaUser'>Escolher</p>
                    </span>
                </span>
                <span className='col-12 row itemListaUsersFormCasa m-0'>
                    <p className='col-8 infoCasaForm'><b>Casa Marco</b></p>
                    <span className='col-4'>
                        <p className='btn btnListaUser'>Escolher</p>
                    </span>
                </span>
                <span className='col-12 row itemListaUsersFormCasa m-0'>
                    <p className='col-8 infoCasaForm'><b>Casa da Maria</b></p>
                    <span className='col-4'>
                        <p className='btn btnListaUser'>Escolher</p>
                    </span>
                </span>
            </span>
        </>                                     
    ) 
}
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHousesList, getHousePeopleList } from '../../Store/Casas/Actions';
import LoadingComponent from '../../Components/Geral/LoadingComponent';

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

    const dispatch = useDispatch();

    const casasList = useSelector(({ casas }) => casas.data)
    const isLoadingCasas = useSelector(({ casas }) => casas.isLoading)

    useEffect(() => {
        dispatch(getHousesList())
    }, [])

    if (isLoadingCasas) {
        return (
            <LoadingComponent />
        )
    }

    return(
        <>
            <input type="text" placeholder="Pesquisa" className='barraPesquisaForm py-1 px-3 w-100'/>
            <span className='row ListaUsersFormCasa'>
                {casasList.map((item, index) => {
                    return(
                        <span className='col-12 row itemListaUsersFormCasa m-0'>
                            <p className='col-8 infoCasaForm'><b>{item.nome}</b></p>
                            {props.casa === item.id_casa ?
                            <span className='col-4'>
                                <p className='btn btnListaUser disabled disabledButton'>Escolhido</p>
                            </span>
                            :
                            <span className='col-4'>
                                <p className='btn btnListaUser' onClick={() => props.muda(item.id_casa, 'adiciona')}>Escolher</p>
                            </span>
                            }
                        </span>
                    )
                })}
            </span>
        </>                                     
    ) 
}

export const MostraCasaEscolhida = (props) => {

    const dispatch = useDispatch();

    const casaInfo = useSelector(({ casas }) => casas.singleCasa)
    const isLoadingCasaInfo = useSelector(({ casas }) => casas.isLoadingPeople)

    useEffect(() => {
        if(props.casa !== ''){
            dispatch(getHousePeopleList(props.casa))
        }
    }, [props.casa])

    if (isLoadingCasaInfo || props.casa === '') {
        return (
            <span className='row ListaCasaInfo'>
                
                <span className='itemListaCasaInfoTitle m-0'>
                    <span className='col-8 m-0 p-0'>
                        <p className='infoCasaFormNome'><b>Escolhe a casa à qual o utilizador pertence</b></p>
                    </span>
                </span>
                
            </span>
        )
    }

    return(
        <>
            <span className='row ListaCasaInfo'>
                <span className='itemListaCasaInfoTitle m-0'>
                    <span className='col-8 m-0 p-0'>
                        <p className='infoCasaFormNome'><b>{casaInfo.nome}</b></p>
                        <p className='infoCasaForm'><b>Localidade:</b> {casaInfo.localidade}</p>
                        <p className='infoCasaForm'><b>ID da box:</b> {casaInfo.id_box}</p>
                    </span>
                    <span className='col-4' style={{margin: 'auto'}}>
                        <p className='btn btnListaUser' onClick={() => props.muda(props.casa, 'remove')}>Remover</p>
                    </span>
                </span>
                {casaInfo.utilizadores.map((item, index) => {
                    return(
                        <span className='itemListaUsersForm m-0'>
                            <p className='infoCasaFormUser'>{item.nome}</p>
                        </span>
                    )
                })}
            </span>
        </>                                     
    ) 
}
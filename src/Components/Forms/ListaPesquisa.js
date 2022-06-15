import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHousesList, getHousePeopleList } from '../../Store/Casas/Actions';
import { getUsersList } from '../../Store/Users/Actions';
import { getTipologiaUsersList } from '../../Store/Users/Actions';
import LoadingComponent from '../../Components/Geral/LoadingComponent';

const GetUsers = (props) => {
    
    let contagem = 0;
    return(
        <>
        {
            props.allUsers.map((item, index) => {
                if(item.id_casa === props.id && contagem === 0){
                    contagem++;
                    return(
                        <span key={index} className='col-12 row itemListaUsersFormCasa m-0'>
                            <p className='col-6 infoCasaForm'><b>{props.nome}</b></p>
                        </span>
                    )
                }
            })
        }
        {
            props.allUsers.map((value, index) => {
                contagem = 0;
                return(
                    <span key={index} className='m-0 p-0'>
                    {value.id_casa === props.id ?
                    <span key={index} className='m-0 p-0'>
                        <span className='col-12 row itemListaUsersForm m-0'>
                            <p className='col-8 infoCasaFormUser'>{value.utilizador}</p>
                            {props.added.length !== 0 ?
                                <>
                                {props.added.map((val) => {
                                    if(val.idUser === value.id_utilizador){
                                        contagem++;
                                    }
                                })}
                                {contagem !== 0 ?
                                    <span key={index} className='col-4'>
                                        <p className='btn btnListaUser disabled disabledButton'>Adicionado</p>
                                    </span>
                                    :
                                    props.tipo === 1 || props.tipo === 4 ?
                                        <span key={index} className='col-4'>
                                            <p className='btn btnListaUserDisabled' disabled>Adicionar</p>
                                        </span>
                                        :
                                        <span key={index} className='col-4'>
                                            <p className='btn btnListaUser' onClick={() => props.add({idCasa: value.id_casa, nomeCasa: value.casa, idUser: value.id_utilizador, nome: value.utilizador, informacao: value.info})}>Adicionar</p>
                                        </span>
                                }
                                </>
                            :
                            <span className='col-4'>
                                <p className='btn btnListaUser' onClick={() => props.add({idCasa: value.id_casa, nomeCasa: value.casa, idUser: value.id_utilizador, nome: value.utilizador, informacao: value.info})}>Adicionar</p>
                            </span>
                            }
                        </span>
                    </span>
                    :
                    <></>
                    }
                    </span>
                
                )
            })
       
        }
        </>
    )

}


export const ListaUsersPesquisa = (props) => {

    const dispatch = useDispatch();

    const casasList = useSelector(({ casas }) => casas.data)
    const isLoadingCasas = useSelector(({ casas }) => casas.isLoading)
    const usersList = useSelector(({ utilizadores }) => utilizadores.data)
    const isLoadingTipologiaUsers = useSelector(({ utilizadores }) => utilizadores.isLoadingTipologiaUsers)

    

    useEffect(() => {
        if(!casasList){
            dispatch(getHousesList())
        }
    }, [])

    useEffect(() => {
        dispatch(getTipologiaUsersList(props.idTipologia))
    }, [props.idTipologia])

    if (isLoadingCasas || isLoadingTipologiaUsers) {
        return (
            <LoadingComponent />
        )
    }


    return(
        <>
            <input type="text" placeholder="Pesquisa" className='barraPesquisaForm py-1 px-3 w-100'/>
            <span className='row ListaUsersForm'>
                {casasList.map((item, index) => {
                    return(
                        <GetUsers key={index} id={item.id_casa} allUsers={usersList} nome={item.nome} add={props.adiciona} added={props.adicionados} tipo={props.idTipologia}></GetUsers>
                    )
                })}
            </span>
            
        </>             
                                
    ) 
}

export const ListaUsersAdicionados = (props) => {
    let [array, setArray] = useState([]);
    let contagem = 0;

    useEffect(() => {
        if(props.adicionados.length > 0){
            props.adicionados.map(item  => {
                if(array.length === 0){
                    setArray([item.idCasa])
                }else if(!array.includes(item.idCasa)){
                    setArray([...array, item.idCasa])
                }
            })
        }
    }, [props.adicionados])

    return(
        <span className='row ListaUsersFormAdicionados'>
            {array.length === 0 || props.adicionados.length === 0 ?
            <span className='col-12 row itemListaUsersFormCasa m-0'>
                <p className='col-6 infoCasaForm'><b>Escolhe quem vai receber a notificação</b></p>
            </span>
            :
            array.map((val, index) => {
                contagem = 0;
                return(
                    <span className='m-0 p-0' key={index}>
                        {props.adicionados.map((item, index) => {
                            if(val === item.idCasa && contagem === 0){
                                contagem++;
                                return(
                                    <span className='m-0 p-0' key={index}>
                                        <span className='col-12 row itemListaUsersFormCasa m-0'>
                                            <p className='col-6 infoCasaForm'><b>{item.nomeCasa}</b></p>
                                        </span>
                                        <span className='col-12 row itemListaUsersForm m-0'>
                                            <p className='col-8 infoCasaFormUser'>{item.nome}</p>
                                            <span className='col-4'>
                                                <p className='btn btnListaUser' onClick={() => props.remove(index)}>Remover</p>
                                            </span>
                                        </span>
                                    </span>
                                )
                            }
                            if(val === item.idCasa && contagem !== 0){
                                return(
                                    <span className='col-12 row itemListaUsersForm m-0' key={index}>
                                        <p className='col-8 infoCasaFormUser'>{item.nome}</p>
                                        <span className='col-4'>
                                            <p className='btn btnListaUser' onClick={() => props.remove(index)}>Remover</p>
                                        </span>
                                    </span>
                                )
                            }
                        })}
                    </span>
                )
            })}
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
                        <span key={index} className='col-12 row itemListaUsersFormCasa m-0'>
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

export const CasasPesquisa = (props) => {

    const dispatch = useDispatch();

    const casasList = useSelector(({ casas }) => casas.data)
    const isLoadingCasas = useSelector(({ casas }) => casas.isLoading)
    const usersList = useSelector(({ utilizadores }) => utilizadores.data)
    const isLoadingUsers = useSelector(({ utilizadores }) => utilizadores.isLoading)

    let contagem = 0;

    useEffect(() => {
        dispatch(getHousesList())
        dispatch(getUsersList())
    }, [])

    const adicionaCasa = (info) => {
        let contaUser = 0;
        let user;
        usersList.map((item) => {
            //console.log(item.id_casa, info.id)
            if(item.id_casa === info.id && contaUser === 0){
                contaUser++;
                //console.log({idCasa: item.id_casa, nomeCasa: item.casa, idUser: item.id_utilizador, nome: item.utilizador})
                user = {idCasa: item.id_casa, nomeCasa: item.casa, idUser: item.id_utilizador, nome: item.utilizador, informacao: item.info}
            }
        })
        contaUser--;
        props.adiciona(info, user)
    }

    if (isLoadingCasas || isLoadingUsers) {
        return (
            <LoadingComponent />
        )
    }

    return(
        <>
            <input type="text" placeholder="Pesquisa" className='barraPesquisaForm py-1 px-3 w-100'/>
            <span className='row ListaUsersFormCasa'>
                {casasList.map((item, index) => {
                    contagem = 0;
                    return(
                        <>
                        {props.casasEscolhidas.length > 0 ?
                            <>
                            {props.casasEscolhidas.map(val => {
                                if(val.id === item.id_casa){
                                    contagem++;
                                }
                            })}
                            {contagem === 0 ?
                                <span key={index} className='col-12 row itemListaUsersFormCasa m-0'>
                                    <p className='col-8 infoCasaForm'><b>{item.nome}</b></p>
                                    <span className='col-4'>
                                        <p className='btn btnListaUser' onClick={() => adicionaCasa({id: item.id_casa, nome: item.nome})}>Escolher</p>
                                    </span>
                                </span>
                            :
                            <span key={index} className='col-12 row itemListaUsersFormCasa m-0'>
                                <p className='col-8 infoCasaForm'><b>{item.nome}</b></p>
                                <span className='col-4'>
                                    <p className='btn btnListaUser disabled disabledButton'>Escolhido</p>
                                </span>
                            </span>
                            }
                            </>
                        :
                        <span key={index} className='col-12 row itemListaUsersFormCasa m-0'>
                            <p className='col-8 infoCasaForm'><b>{item.nome}</b></p>
                            <span className='col-4'>
                                <p className='btn btnListaUser' onClick={() => adicionaCasa({id: item.id_casa, nome: item.nome})}>Escolher</p>
                            </span>
                        </span>
                        }
                        
                        </>
                    )
                })}
            </span>
        </>                                     
    ) 
}

export const CasasEscolhidas = (props) => {
    return(
        <>
        {props.casas.length > 0 ?
        <span className='row ListaUsersFormAdicionados'>
        {props.casas.map((item, index) => {
            return(
                <span key={index} className='col-12 row itemListaUsersFormCasa m-0'>
                    <p className='col-8 infoCasaForm'><b>{item.nome}</b></p>
                    <span className='col-4'>
                        <p className='btn btnListaUser' onClick={() => props.remove(index)}>Remover</p>
                    </span>
                </span>
            )
        })}</span>
        :
        <span className='row ListaCasaInfo m-0 p-0'>
            <span className='itemListaCasaInfoTitle m-0'>
                <span className='col-8 m-0 p-0'>
                    <p className='infoCasaFormNome'><b>Escolhe as casas que vão receber a notificação</b></p>
                </span>
            </span>
        </span>
        }
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
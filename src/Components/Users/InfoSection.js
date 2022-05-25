import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleUser } from '../../Store/Users/Actions';
import Loading from '../../Pages/Loading';
import { useParams } from 'react-router';

const InfoSection = (props) => {

    const dispatch = useDispatch();

    const {id} = useParams();

    const user = useSelector(({ utilizadores }) => utilizadores.userUnique)
    const isLoadingUser = useSelector(({ utilizadores }) => utilizadores.isLoadingUser)

    useEffect(() => {
        dispatch(getSingleUser(id))
    }, [])

    if (isLoadingUser) {
        return (
            <Loading />
        )
    }

    return(
        <div className='row m-0' style={{padding: "10px 40px"}}>
            {console.log(user)}
            
            <div className='col-4'>
                <h1 className='textoSeccaoPagina'><b>Nome:</b> {user.nome}</h1>
                <p className='textoSeccaoPagina'><b>Idade:</b> {user.idade} anos</p>
                <p className='textoSeccaoPagina'><b>Casa:</b> {user.casa}</p>
                <p className='textoSeccaoPagina' style={{marginBottom: '0'}}><b>Tipos de notificação que não quer receber:</b></p>
                <p className='textoSeccaoPagina'>
                    {
                    user.blacklist.length > 0 ?
                    user.blacklist.map((item, index) => {
                        return(
                            <span key={index} className='m-0 p-0'>{item.nome}{index + 1 === user.blacklist.length ? '' : ', '}</span>
                        )
                    })
                    :
                    'O utilizador quer receber todas as categorias'}
                </p>
            </div>
            <div className='col-6'>
                <p className='textoSeccaoPagina'><b>Informações adicionais:</b></p>
                <p className='textoSeccaoPagina' style={{maxHeight: '100px', overflowY: 'auto'}}>{user.info === null || user.info === '' ? 'O utilizador não tem informações adicionais.' : user.info}</p>
            </div>
        </div>
    )
}

export default InfoSection;
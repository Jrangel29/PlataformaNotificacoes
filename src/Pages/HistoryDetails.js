import React, {useEffect, useState} from 'react';
import Navbar from '../Components/Geral/Navbar';
import Header from '../Components/Geral/Header';
import '../Styles/User.css';
import UserDetailCards from '../Components/Cards/UserDetailCards';
import {Table} from 'react-bootstrap';
import { getNotificationInfo } from '../Store/Notifications/Actions';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../Pages/Loading';

const HistoryDetails = () => {

    const dispatch = useDispatch();
    const {id} = useParams();

    const notificationInfo = useSelector(({ notificacoes }) => notificacoes.data)
    const isLoadingNotificationInfo = useSelector(({ notificacoes }) => notificacoes.isLoadingSingle)

    useEffect(() => {
        dispatch(getNotificationInfo(id))
    }, [])

    if(isLoadingNotificationInfo){
        return(
            <Loading/>
        )
    }

    return(
        <div>
            {/*console.log(notificationInfo)*/}
            <div className='mainBodyForm p-0 container'>
            <Navbar/>
                <Header nome="Histórico" detalhe="sim" apagaMuda="nao"/>
                <div className='prevSeccao ms-0'>
                    <h1 className='tituloSeccaoPaginaNotifs'>Informação da notificação</h1>
                </div>
                <div style={{padding: '0 40px'}} className="mx-2">
                    <p className='subtituloSeccaoPagina mt-2 mb-0'>Mensagem da notificação</p>
                    <p className='textoSeccaoPagina'>{notificationInfo[0].mensagem}</p>
                    <p className='subtituloSeccaoPagina mt-2 mb-0'>Título do rodapé</p>
                    <p className='textoSeccaoPagina'>{notificationInfo[0].titulo ? notificationInfo[0].titulo : 'Esta notificação não tem título de rodapé.'}</p>
                    <p className='subtituloSeccaoPagina mt-2 mb-0'>Descrição do rodapé</p>
                    <p className='textoSeccaoPagina mb-3'>{notificationInfo[0].descricao ? notificationInfo[0].descricao : 'Esta notificação não tem descrição de rodapé.'}</p>
                </div>
                <div className='prevSeccao ms-0'>
                    <h1 className='tituloSeccaoPaginaNotifs'>Interações</h1>
                </div>
                <div style={{padding: '0 40px'}} className="mx-2">
                    <p className='subtituloSeccaoPagina mt-2'>Contagem</p>
                    <Table striped bordered hover className='tabelaHistorico'>
                        <thead>
                            <tr>
                                <th style={{fontSize: '16px'}}>Interação</th>
                                <th style={{fontSize: '16px'}}>Contagem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{fontSize: '14px'}}>Fechou</td>
                                <td style={{fontSize: '14px'}}>0</td>
                            </tr>
                            <tr>
                                <td style={{fontSize: '14px'}}>Relembrar daqui a 15 minutos</td>
                                <td style={{fontSize: '14px'}}>0</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p className='subtituloSeccaoPagina'>Interações detalhadas</p>
                    {/*<UserDetailCards historico="sim"/>*/}
                </div>
            </div>
        </div>
    )
    
}

export default HistoryDetails;
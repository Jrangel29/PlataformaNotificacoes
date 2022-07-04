import React, {useEffect, useState} from 'react';
import Navbar from '../Components/Geral/Navbar';
import Header from '../Components/Geral/Header';
import '../Styles/User.css';
import UserNotificationCards from '../Components/Cards/UserNotificationCards';
import {Table} from 'react-bootstrap';
import { getNotificationInfo } from '../Store/Notifications/Actions';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../Pages/Loading';
import { PieChart } from '../Components/Charts/PieChart';

const HistoryDetails = () => {

    const dispatch = useDispatch();
    const {id} = useParams();

    const notificationInfo = useSelector(({ notificacoes }) => notificacoes.singleNotification)
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
            <div className='mainBodyForm p-0 container'>
            <Navbar/>
                <Header nome="Notificações agendadas" detalhe="sim" apagaMuda="nao"/>
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
                <div style={{padding: '0 40px'}} className="mx-2 row mt-2">
                    <UserNotificationCards historico="nao" info={notificationInfo} tipo='Por enviar'/>
                </div>
            </div>
        </div>
    )
    
}

export default HistoryDetails;
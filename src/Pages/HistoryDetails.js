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

const HistoryDetails = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const [dataHora, setDataHora] = useState([])

    const notificationInfo = useSelector(({ notificacoes }) => notificacoes.singleNotification)
    const isLoadingNotificationInfo = useSelector(({ notificacoes }) => notificacoes.isLoadingSingle)

    useEffect(() => {
        dispatch(getNotificationInfo(id))
    }, [])

    useEffect(() => {

        if(!isLoadingNotificationInfo){
            let dataNova = new Date(notificationInfo[0].data);
            var dataFinal = ((dataNova.getDate() > 9) ? dataNova.getDate() : ('0' + dataNova.getDate()))  + '/' + ((dataNova.getMonth() > 8) ? (dataNova.getMonth() + 1) : ('0' + (dataNova.getMonth() + 1))) + '/' + dataNova.getFullYear();

            var hora = 'Indefinida'

            if(notificationInfo[0].hora !== null){
                hora = notificationInfo[0].hora.substring(0, 5);
            }

            setDataHora([dataFinal, hora])
        }
    }, [isLoadingNotificationInfo])

    if(isLoadingNotificationInfo){
        return(
            <Loading/>
        )
    }
    //console.log(notificationInfo[0])

    return(
        <div>
            <div className='mainBodyForm p-0 container'>
            <Navbar/>
                <Header nome="Histórico" detalhe="sim" apagaMuda="nao"/>
                <div className='prevSeccao ms-0'>
                    <h1 className='tituloSeccaoPaginaNotifs'>Informação da notificação</h1>
                </div>
                <div style={{padding: '0 40px'}} className="mx-2">
                    <span className='m-0 p-0'>
                        <p className='subtituloSeccaoPagina mt-2 mb-0'>Nome do evento</p>
                        <p className='textoSeccaoPagina'>{notificationInfo[0].nomeEvento}</p>
                    </span> 
                    <div className='m-0 p-0'>
                        <p className='subtituloSeccaoPagina mt-3 mb-0'>Informação da notificação</p>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div className='mb-3 mt-1 p-0'>
                                <p className='textoSeccaoPagina'><b>Mensagem da notificação:</b> {notificationInfo[0].mensagem}</p>
                                <p className='textoSeccaoPagina'><b>Título do rodapé:</b> {notificationInfo[0].titulo ? notificationInfo[0].titulo : 'Esta notificação não tem título de rodapé.'}</p>
                                <p className='textoSeccaoPagina'><b>Descrição do rodapé:</b> {notificationInfo[0].descricao ? notificationInfo[0].descricao : 'Esta notificação não tem descrição de rodapé.'}</p>
                            </div>
                            <div className='m-0 mt-1 px-4'>
                                <p className='textoSeccaoPagina'><b>Dia: </b>{notificationInfo[0].data ? dataHora[0] : 'Esta notificação não tem data definida.'}</p>
                                <p className='textoSeccaoPagina'><b>Hora:</b> {dataHora[1]}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='prevSeccao ms-0'>
                    <h1 className='tituloSeccaoPaginaNotifs'>Interações detalhadas</h1>
                </div>
                <div style={{padding: '0 40px'}} className="mx-2 row mt-2">
                    <UserNotificationCards historico="sim" info={notificationInfo}/>
                </div>
            </div>
        </div>
    )
    
}

export default HistoryDetails;
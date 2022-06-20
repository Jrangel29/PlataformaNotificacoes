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

    const [estatiticas, setEstatisticas] = useState([
        {
            name: 'Fechou',
            value: 0
        },
        {
            name: 'Abriu',
            value: 0
        },
        {
            name: 'Recebeu',
            value: 0
        },
        {
            name: 'Enviou',
            value: 0
        },
    ])

    const notificationInfo = useSelector(({ notificacoes }) => notificacoes.singleNotification)
    const isLoadingNotificationInfo = useSelector(({ notificacoes }) => notificacoes.isLoadingSingle)

    useEffect(() => {
        dispatch(getNotificationInfo(id))
    }, [])

    useEffect(() => {

        var fechou = 0;
        var abriu = 0;
        var recebeu = 0;
        var enviou = 0;

        if(!isLoadingNotificationInfo){
            notificationInfo.map(item => {
                if(item.enviado.data[0] !== 0){
                    enviou++;
                }
                if(item.recebido.data[0] !== 0){
                    recebeu++;
                }
                if(item.fechou.data[0] !== 0){
                    abriu++;
                } else {
                    fechou++
                }
            })
            setEstatisticas([
                {
                    name: 'Fechou',
                    value: 123
                },
                {
                    name: 'Abriu',
                    value: 77
                },
                {
                    name: 'Recebeu',
                    value: 200
                },
                {
                    name: 'Enviou',
                    value: 225
                },
            ])
        }
    }, [isLoadingNotificationInfo])

    if(isLoadingNotificationInfo){
        return(
            <Loading/>
        )
    }
    console.log(notificationInfo[0])
    return(
        <div>
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
                    <h1 className='tituloSeccaoPaginaNotifs'>Estatísticas</h1>
                </div>
                <div style={{padding: '0 40px'}} className="mx-2 row">
                    <p className='subtituloSeccaoPagina mt-2 px-0'>Contagem das interações</p>
                    <span className='col-6 m-0 p-0'>
                        <Table striped bordered hover className='tabelaHistorico'>
                            <thead>
                                <tr>
                                    <th style={{fontSize: '16px'}}>Envio/Receção da notificação</th>
                                    <th style={{fontSize: '16px'}}>Contagem</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{fontSize: '14px'}}>A notificação foi enviada.</td>
                                    <td style={{fontSize: '14px'}}>{estatiticas[3].value}</td>
                                </tr>
                                <tr>
                                    <td style={{fontSize: '14px'}}>A notificação foi recebida.</td>
                                    <td style={{fontSize: '14px'}}>{estatiticas[2].value}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </span>
                    <span className='col-6 m-0 p-0'>
                        <Table striped bordered hover className='tabelaHistorico'>
                            <thead>
                                <tr>
                                    <th style={{fontSize: '16px'}}>Interação</th>
                                    <th style={{fontSize: '16px'}}>Contagem</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{fontSize: '14px'}}>O utilizador fechou a notificação.</td>
                                    <td style={{fontSize: '14px'}}>{estatiticas[0].value}</td>
                                </tr>
                                <tr>
                                    <td style={{fontSize: '14px'}}>O especatador escolheu "Relembrar daqui a 15 minutos".</td>
                                    <td style={{fontSize: '14px'}}>{estatiticas[1].value}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </span>
                    <span className='row col-12 m-0 p-0'>
                        <p className='subtituloSeccaoPagina px-0 mb-0 pb-0'>Representação gráfica</p>
                        <PieChart info={estatiticas}/>
                    </span>
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
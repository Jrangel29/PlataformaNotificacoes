import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Accordion, Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Loading from '../../Pages/Loading';
import { getNotificationsUser } from '../../Store/Notifications/Actions';

const EventCards = (props) => {

    const dispatch = useDispatch();
    const {id} = useParams();

    let contagemFuture = 0;
    let contagemPast = 0;

    const notificationList = useSelector(({ notificacoes }) => notificacoes.data)
    const isLoading = useSelector(({ notificacoes }) => notificacoes.isLoading)

    useEffect(() => {
        dispatch(getNotificationsUser(id))
    }, [])

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return(            
        <div className='container m-0'>
            <div className='row cartasMainBody'>
                
                {notificationList.length !== 0 && notificationList.map((item, index) => {

                    let currentDate = new Date();
                    let dataNova = new Date(item.data);
                    var dataFinal = ((dataNova.getMonth() > 8) ? (dataNova.getMonth() + 1) : ('0' + (dataNova.getMonth() + 1))) + '/' + ((dataNova.getDate() > 9) ? dataNova.getDate() : ('0' + dataNova.getDate()))  + '/' + dataNova.getFullYear();

                    var hora = 'Indefinida'
                    let diaSemana = dataNova.getDay()

                    if(item.hora !== null){
                        hora = item.hora.substring(0, 5);
                    }

                    if(props.seccao === 'Por Enviar'){
                        if(dataNova >= currentDate){
                            contagemFuture++
                            return(
                                <span key={index} className='col-4 ps-0 pb-3'>
                                    <Card as={Link} to={`/notifications/${item.id_notificacao}`} style={{ textDecoration: 'none', cursor: "pointer", minHeight: "100%"}} onClick={() => props.showModal(item)}>
                                        <Card.Header style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                            <span className='col-9 p-0 tituloNotificacao'>{item.mensagem}</span>
                                            <span className='col-3 p-0 dataNotificacao'>
                                                {dataFinal}
                                            </span>
                                        </Card.Header>
                                        <Card.Body className='bodyCartaRotina row m-0 px-0'>
                                            <span className='col-9'>
                                                <Card.Title className='dataNotifsTitle'>Dia</Card.Title>
                                                <Card.Text className='dataNotifs'>
                                                    {diaSemana === 1 ? 'Segunda-Feira' : diaSemana === 2 ? 'Terça-Feira' : diaSemana === 3 ? 'Quarta-Feira' : diaSemana === 4 ? 'Quinta-Feira' : diaSemana === 5 ? 'Sexta-Feira' : diaSemana === 6 ? 'Sábado' : 'Domingo' }
                                                </Card.Text>
                                            </span>
                                            <span className='col-3 d-flex flex-column' style={{textAlign: "right"}}>
                                                <Card.Title className='dataNotifsTitle'>Horas</Card.Title>
                                                <Card.Text className='dataNotifs'>{hora}</Card.Text>
                                            </span>
                                        </Card.Body>
                                    </Card>
                                </span>
                            )
                        }
                        if(index + 1 === notificationList.length && contagemFuture === 0){
                            return(
                                <span key={index} className='col-12 ps-0 pb-3' style={{textAlign:'center'}}>
                                    Não encontramos nenhuma notificação por enviar!
                                </span>
                            )
                        }
                    } else {
                        if(dataNova <= currentDate){
                            contagemPast++
                            return(
                                <span key={index} className='col-4 ps-0 pb-3'>
                                    <Card as={Link} to={`/history/${item.id_notificacao}`} style={{ textDecoration: 'none', cursor: "pointer", minHeight: "100%"}}>
                                        <Card.Header style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                            <span className='col-9 p-0 tituloNotificacao'>{item.mensagem}</span>
                                            <span className='col-3 p-0 dataNotificacao'>
                                                {dataFinal}
                                            </span>
                                        </Card.Header>
                                        <Card.Body className='bodyCartaRotina row m-0 px-0'>
                                            <span className='col-9'>
                                                <Card.Title className='dataNotifsTitle'>Dia</Card.Title>
                                                <Card.Text className='dataNotifs'>
                                                    {diaSemana === 1 ? 'Segunda-Feira' : diaSemana === 2 ? 'Terça-Feira' : diaSemana === 3 ? 'Quarta-Feira' : diaSemana === 4 ? 'Quinta-Feira' : diaSemana === 5 ? 'Sexta-Feira' : diaSemana === 6 ? 'Sábado' : 'Domingo' }
                                                </Card.Text>
                                            </span>
                                            <span className='col-3 d-flex flex-column' style={{textAlign: "right"}}>
                                                <Card.Title className='dataNotifsTitle'>Horas</Card.Title>
                                                <Card.Text className='dataNotifs'>{hora}</Card.Text>
                                            </span>
                                        </Card.Body>
                                    </Card>
                                </span>
                            )
                        }
                        if(index + 1 === notificationList.length && contagemPast === 0){
                            return(
                                <span key={index} className='col-12 ps-0 pb-3' style={{textAlign:'center'}}>
                                    Não encontramos nenhuma notificação enviada!
                                </span>
                            )
                        }
                    }
                })}
                {notificationList.length === 0 ?
                    <span className='col-12 ps-0 pb-3' style={{textAlign:'center'}}>
                        Não encontramos nenhuma notificação!
                    </span>
                    :
                    <></>
                }
            </div>
        </div>
    ) 
}

export default EventCards;
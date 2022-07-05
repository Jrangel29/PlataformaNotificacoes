import React from 'react';
import '../../Styles/Cards.css';
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap';
import Lixo from '../../Images/LixoBranco.svg';
import Editar from '../../Images/EditarBranco.svg';
import Plus from '../../Images/Plus.svg';
import {Link} from 'react-router-dom';

const EventNotifications = (props) => {

    let contagemFuture = 0;
    let contagemPast = 0;
    let sorted = props.notificacoes.sort((a, b) => new Date(a.data) - new Date(b.data));
    
    return(
        <div className='container m-0'>
            <div className='row cartasMainBody'>
                {props.notificacoes.length !== 0 && sorted.map((item, index) => {

                    let currentDate = new Date();
                    let getDate = item.data.substring(0, 10);
                    let dataNova = new Date(getDate);
                    var dataFinal = ((dataNova.getDate() > 9) ? dataNova.getDate() : ('0' + dataNova.getDate()))  + '/' + ((dataNova.getMonth() > 8) ? (dataNova.getMonth() + 1) : ('0' + (dataNova.getMonth() + 1))) + '/' + dataNova.getFullYear();

                    let diaSemana = dataNova.getDay()

                    let hora = item.data.substring(11, 16);

                    if(props.seccao === 'Por Enviar'){
                        if(dataNova >= currentDate){
                            contagemFuture++
                            return(
                                <span key={index} className='col-4 ps-0 pb-3'>
                                    <Card as={Link} to={`/notifications/${item.id_notificacao}`} style={{textDecoration: 'none', cursor: "pointer", minHeight: "100%"}}>
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
                        if(index + 1 === props.notificacoes.length && contagemFuture === 0){
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
                                    <Card as={Link} to={`/history/${item.id_notificacao}`} style={{textDecoration: 'none', cursor: "pointer", minHeight: "100%"}}>
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
                        if(index + 1 === props.notificacoes.length && contagemPast === 0){
                            return(
                                <span key={index} className='col-12 ps-0 pb-3' style={{textAlign:'center'}}>
                                    Não encontramos nenhuma notificação enviada!
                                </span>
                            )
                        }
                    }
                })}
                {props.notificacoes.length === 0 ?
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

export default EventNotifications;
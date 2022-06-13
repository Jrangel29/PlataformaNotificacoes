import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../Styles/Cards.css';
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap';
import Lixo from '../../Images/LixoBranco.svg';
import Editar from '../../Images/EditarBranco.svg';
import Plus from '../../Images/Plus.svg';
import {Link} from 'react-router-dom';
import Loading from '../../Pages/Loading';
import { getNotifications } from '../../Store/Notifications/Actions';
import NotificationModal from '../../Components/Modal/NotificationModal';

const NotificationCards = (props) => {

    const dispatch = useDispatch();
    
    const notificationList = useSelector(({ notificacoes }) => notificacoes.data)
    const isLoadingAll = useSelector(({ notificacoes }) => notificacoes.isLoadingAll)
    const [modal, setModal] = useState([false, {}]);

    useEffect(() => {
        dispatch(getNotifications())
    }, [])

    if (isLoadingAll) {
        return (
            <Loading />
        )
    }

    const dataAtual = new Date();

    var sorted = notificationList.sort((a, b) => new Date(b.data) - new Date(a.data));

    return(
        <div className='container m-0' style={props.pagina === 'users' ? {padding: "0 40px"} : null}>
            <div className='row cartasMainBody'>
                {sorted.map((item, index) => {
                    let dataNova = new Date(item.data);
                    var dataFinal = ((dataNova.getDate() > 9) ? dataNova.getDate() : ('0' + dataNova.getDate()))  + '/' + ((dataNova.getMonth() > 8) ? (dataNova.getMonth() + 1) : ('0' + (dataNova.getMonth() + 1))) + '/' + dataNova.getFullYear();

                    var hora = 'Indefinida'
                    let diaSemana = dataNova.getDay()

                    if(item.hora !== null){
                        hora = item.hora.substring(0, 5);
                    }

                    if(dataNova < dataAtual && props.tipo === 'Enviadas' || dataNova >= dataAtual && props.tipo === 'Por enviar'){
                        if(props.pesquisa === ''){
                            return(
                                <span key={index} className='col-4 ps-0 pb-3'>
                                    {props.tipo === 'Por enviar' ?
                                    <Card style={{cursor: "pointer", minHeight: "100%"}}>
                                        <Card.Header onClick={() => setModal([true, item])} style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                            <span className='col-9 p-0 tituloNotificacao'>{item.mensagem}</span>
                                            <span className='col-3 p-0 dataNotificacao'>
                                                {dataFinal}
                                            </span>
                                        </Card.Header>
                                        
                                        <Card.Body onClick={() => setModal([true, item])} style={{textDecoration: "none", color: "black"}} className='bodyCartaRotina row m-0 px-0'>
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
                                    :
                                    <Card style={{cursor: "pointer", minHeight: "100%"}}>
                                        <Card.Header as={Link} to={`/history/${item.id_notificacao}`} style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                            <span className='col-9 p-0 tituloNotificacao'>{item.mensagem}</span>
                                            <span className='col-3 p-0 dataNotificacao'>
                                                {dataFinal}
                                            </span>
                                        </Card.Header>
                                        
                                        <Card.Body as={Link} to={`/history/${item.id_notificacao}`} style={{textDecoration: "none", color: "black"}} className='bodyCartaRotina row m-0 px-0'>
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
                                    }
                                </span>
                            )
                        } else {
                            let pesquisado = props.pesquisa.toLowerCase();
                            let nomes = item.mensagem.toLowerCase();
                            if(item.mensagem.startsWith(props.pesquisa) || nomes.startsWith(pesquisado)){
                                return(
                                    <span key={index} className='col-4 ps-0 pb-3'>
                                        {props.tipo === 'Por enviar' ?
                                        <Card style={{cursor: "pointer", minHeight: "100%"}}>
                                            <Card.Header onClick={() => setModal([true, item])} style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                                <span className='col-9 p-0 tituloNotificacao'>{item.mensagem}</span>
                                                <span className='col-3 p-0 dataNotificacao'>
                                                    {dataFinal}
                                                </span>
                                            </Card.Header>
                                            
                                            <Card.Body onClick={() => setModal([true, item])} style={{textDecoration: "none", color: "black"}} className='bodyCartaRotina row m-0 px-0'>
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
                                        :
                                        <Card style={{cursor: "pointer", minHeight: "100%"}}>
                                            <Card.Header as={Link} to={`/history/${item.id_notificacao}`} style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                                <span className='col-9 p-0 tituloNotificacao'>{item.mensagem}</span>
                                                <span className='col-3 p-0 dataNotificacao'>
                                                    {dataFinal}
                                                </span>
                                            </Card.Header>
                                            
                                            <Card.Body as={Link} to={`/history/${item.id_notificacao}`} style={{textDecoration: "none", color: "black"}} className='bodyCartaRotina row m-0 px-0'>
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
                                        }
                                    </span>
                                )
                            }
                        }
                    }
                })}
            </div>
            <NotificationModal show={modal[0]} onHide={() => setModal([false, {}])} tipo="notificacoes" info={modal[1]}/>
        </div>
    )
}

export default NotificationCards;
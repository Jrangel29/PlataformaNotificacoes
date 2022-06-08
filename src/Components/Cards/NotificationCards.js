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

const NotificationCards = (props) => {

    const dispatch = useDispatch();
    
    const notificationList = useSelector(({ notificacoes }) => notificacoes.data)
    const isLoadingAll = useSelector(({ notificacoes }) => notificacoes.isLoadingAll)

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

                    if(dataNova < dataAtual && props.tipo === 'Enviadas' || dataNova >= dataAtual && props.tipo === 'Por enviar'){
                        return(
                            <span key={index} className='col-4 ps-0 pb-3'>
                                <Card style={{cursor: "pointer", minHeight: "100%"}}>
                                    <Card.Header as={Link} to="/history/details" style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                        <span className='col-9 p-0 tituloNotificacao'>{item.mensagem}</span>
                                        <span className='col-3 p-0 dataNotificacao'>
                                            {dataFinal}
                                        </span>
                                    </Card.Header>
                                    
                                    <Card.Body as={Link} to="/history/details" style={{textDecoration: "none", color: "black"}} className='bodyCarta m-0'>
                                        <Card.Text className='p-0' style={{fontSize: '14px'}}>O Benfica defronta o Liverpool em casa, para a Champions League, amanhã.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </span>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default NotificationCards;
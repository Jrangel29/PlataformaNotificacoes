import React from 'react';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Card} from 'react-bootstrap';

const UserNotificationCards = (props) => {

    return(    
        <>
        {props.tipo === 'Por Enviar' ?
        <div className='container m-0 p-0'>
            <div className='row mt-1'>
                {props.info.length > 0 ?
                props.info.map((item, index) => {
                    return(
                        <span key={index} className='col-3 mb-2'>
                            <Card>
                                <Card.Body className='m-0 cartaGrupos'>
                                    <span>
                                        <p className='tituloUserCartaSmall mb-1'>
                                            {item.nomeUser}
                                        </p>
                                        <p className='textoSmall mb-0' style={{fontSize: '14px'}}>
                                            {item.idade} anos
                                        </p>
                                    </span>
                                </Card.Body>
                            </Card>
                        </span>
                    )
                })
                :
                <span className='col-12' >
                    Este evento não tem utilizadores.
                </span>
            }
            </div>
        </div> 
        :
        <div className='container m-0 p-0'>
            <div className='row mt-1'>
                {props.info.length > 0 ?
                props.info.map((item, index) => {
                    return(
                        <span key={index} className='col-3 mb-2'>
                            <Card>
                                <Card.Body className='m-0 cartaGrupos'>
                                    <span>
                                        <p className='tituloUserCartaSmall mb-1'>
                                            {item.nomeUser}
                                        </p>
                                        <p className='textoSmall mb-0' style={{fontSize: '14px'}}>
                                            {item.idade} anos
                                        </p>
                                    </span>
                                </Card.Body>
                                {props.historico === "sim" ?
                                <Card.Footer className={item.fechou.data[0] === 0 ? 'recusa m-0' : 'aceita m-0'}>
                                    {item.fechou.data[0] === 0 ? 'Fechou a notificação' : 'Relembrou'}
                                </Card.Footer>
                                :
                                <></>
                                }
                            </Card>
                        </span>
                    )
                })
                :
                <span className='col-12' >
                    Este evento não tem utilizadores.
                </span>
            }
            </div>
        </div>
        }  
        </>    
    )
}

export default UserNotificationCards;
import React from 'react';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Card} from 'react-bootstrap';

const UserHouseDetailsCards = (props) => {

    return(            
        <div className='container m-0 p-0'>
            <div className='row mt-1'>
                {props.users.length > 0 ?
                props.users.map((item, index) => {
                    return(
                        <span key={index} className='col-3 mb-2'>
                            <Card>
                                <Card.Body className='m-0 cartaGrupos'>
                                    <span>
                                        <p className='tituloUserCartaSmall mb-1'>
                                            {item.nome}
                                        </p>
                                        <p className='textoSmall mb-0' style={{fontSize: '14px'}}>
                                            {item.idade} anos
                                        </p>
                                    </span>
                                </Card.Body>
                                {props.historico === "sim" ?
                                <Card.Footer className='adicionarConteudoNotif m-0'>
                                    Relembrar daqui a 15 minutos
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
                    {props.tipo === 'casa' ? 
                    'Esta casa não tem utilizadores.'
                    :
                    'Este evento não tem utilizadores.'}
                </span>
                }
            </div>
        </div>    
    )
}

export default UserHouseDetailsCards;
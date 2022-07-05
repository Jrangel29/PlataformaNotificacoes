import React from 'react';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserDetailsCards = (props) => {

    return(            
        <div className='container m-0 p-0'>
            <div className='row mt-1'>
                {props.users.length > 0 ?
                props.users.map((item, index) => {
                    return(
                        <span key={index} className='col-3 mb-2'>
                            <Card as={Link} to={`/users/${item.id_utilizador}`} style={{ textDecoration: 'none' }}>
                                <Card.Body className='m-0 cartaGrupos'>
                                    <span>
                                        <p className='tituloUserCartaSmall mb-2'>
                                            {item.nomeUser}
                                        </p>
                                        <p className='textoSmall mb-0' style={{fontSize: '14px'}}>
                                            {item.nomeCasa}
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
                    Este evento não tem utilizadores.
                </span>
                }
            </div>
        </div>    
    )
}

export default UserDetailsCards;
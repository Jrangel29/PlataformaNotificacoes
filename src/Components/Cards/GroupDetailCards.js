import React from 'react';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Card} from 'react-bootstrap';

const GroupDetailsCards = (props) => {

    return(            
        <div className='container m-0 p-0'>
            <div className='row mt-1'>
                {props.users.map((item, index) => {
                    return(
                        <span key={index} className='col-3 mb-2'>
                            <Card>
                                <Card.Body className='m-0 cartaGrupos'>
                                    <span>
                                        <p className='tituloUserCarta mb-2'>
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
                })}
            </div>
        </div>    
    )
}

export default GroupDetailsCards;
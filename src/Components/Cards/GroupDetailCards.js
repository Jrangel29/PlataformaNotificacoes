import React from 'react';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Card} from 'react-bootstrap';

const GroupDetailsCards = (props) => {

    console.log(props.users)

    return(            
        <div className='container'>
            <div className='row mt-1 seccaoCards'>
                {props.users.map((item, index) => {
                    return(
                        <span key={index} className='col-3 mb-2'>
                            <Card>
                                <Card.Body className='m-0 cartaGrupos'>
                                    <span>
                                        <p className='tituloUserCarta mb-1'>
                                            {item.nome}
                                        </p>
                                        <p className='mb-0' style={{fontSize: '14px'}}>
                                            Idade: {item.idade} anos
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
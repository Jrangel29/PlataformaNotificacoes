import React from 'react';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Card} from 'react-bootstrap';

class GroupDetailsCards extends React.Component {

    render(){
        return(            
            <div className='container'>
                <div className='row mt-1'>
                    <Card className='col-3 p-0'>
                        <Card.Body className='m-0 cartaGrupos'>
                            <span>
                                <p className='tituloUserCarta mb-1'>
                                    Ricardo Lima
                                </p>
                                <p className='mb-0' style={{fontSize: '14px'}}>
                                    66 anos
                                </p>
                                <p className='mb-0' style={{fontSize: '14px'}}>
                                    Vila Nova de Gaia, Porto
                                </p>
                            </span>
                        </Card.Body>
                        {this.props.historico === "sim" ?
                        <Card.Footer className='adicionarConteudoNotif m-0'>
                            Relembrar daqui a 15 minutos
                        </Card.Footer>
                        :
                        <></>
                        }
                    </Card>
                </div>
            </div>    
        )
    } 
}

export default GroupDetailsCards;
import React from 'react';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Accordion, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class HouseCards extends React.Component {

    render(){
        return(            
            <div className='container m-0 p-0'>
                <div className='row cartasMainBody'>
                    <Accordion defaultActiveKey="0" className='col-4 pb-3'>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='m-0'>
                                <span>
                                    <p className='tituloGrupoCarta mb-2'>
                                        Casa dos Limas
                                    </p>
                                    <p className='mb-0'>
                                        Vila Nova de Gaia, Porto
                                    </p>
                                    <p className='mb-0 textHouseCards'>
                                        José Lima, Maria Lima
                                    </p>
                                </span>
                            </Accordion.Header>
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button as={Link} to="/houses/house" className='textoBtnUser col-5 mx-2' variant='flat'>Ver mais informação</Button>
                                <Button as={Link} to="/notifications/create" className='textoBtnUser col-5 mx-2' variant='flat'>Enviar notificação</Button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>    
        )
    } 
}

export default HouseCards;
import React from 'react';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Accordion, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class UserCards extends React.Component {

    render(){
        return(            
            <div className='container m-0 p-0'>
                <div className='row cartasMainBody'>
                    <Accordion defaultActiveKey="0" className='col-4'>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='m-0'>
                                <span>
                                    <p className='tituloUserCarta mb-2'>
                                        Ricardo Lima
                                    </p>
                                    <p className='mb-0'>
                                        66 anos
                                    </p>
                                    <p className='mb-0'>
                                        Vila Nova de Gaia, Porto
                                    </p>
                                </span>
                            </Accordion.Header>
                            {this.props.pagina === "criaGrupo" ?
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button className='textoBtnUser col-5 mx-2' variant='flat'>Eliminar</Button>
                            </Accordion.Body>
                            :
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button as={Link} to="/users/user" className='textoBtnUser col-5 mx-2' variant='flat'>Ver mais informação</Button>
                                <Button as={Link} to="/notifications/create" className='textoBtnUser col-5 mx-2' variant='flat'>Enviar notificação</Button>
                            </Accordion.Body>
                            }
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey="0" className='col-4 pt-0 pb-0'>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='m-0'>
                                <span>
                                    <p className='tituloUserCarta mb-2'>
                                        Patrícia Silva
                                    </p>
                                    <p className='mb-0'>
                                        21 anos
                                    </p>
                                    <p className='mb-0'>
                                        Espinho, Aveiro
                                    </p>
                                </span>
                            </Accordion.Header>
                            {this.props.pagina === "criaGrupo" ?
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button className='textoBtnUser col-5 mx-2' variant='flat'>Eliminar</Button>
                            </Accordion.Body>
                            :
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button as={Link} to="/users/user" className='textoBtnUser col-5 mx-2' variant='flat'>Ver mais informação</Button>
                                <Button as={Link} to="/notifications/create" className='textoBtnUser col-5 mx-2' variant='flat'>Enviar notificação</Button>
                            </Accordion.Body>
                            }
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey="0" className='col-4 pt-0 pb-0'>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='m-0'>
                                <span>
                                    <p className='tituloUserCarta mb-2'>
                                        Marco Costa
                                    </p>
                                    <p className='mb-0'>
                                        42 anos
                                    </p>
                                    <p className='mb-0'>
                                        Amadora, Lisboa
                                    </p>
                                </span>
                            </Accordion.Header>
                            {this.props.pagina === "criaGrupo" ?
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button className='textoBtnUser col-5 mx-2' variant='flat'>Eliminar</Button>
                            </Accordion.Body>
                            :
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button as={Link} to="/users/user" className='textoBtnUser col-5 mx-2' variant='flat'>Ver mais informação</Button>
                                <Button as={Link} to="/notifications/create" className='textoBtnUser col-5 mx-2' variant='flat'>Enviar notificação</Button>
                            </Accordion.Body>
                            }
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>    
        )
    } 
}

export default UserCards;
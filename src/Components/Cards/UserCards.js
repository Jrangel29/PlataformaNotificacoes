import React from 'react';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Accordion, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class UserCards extends React.Component {

    render(){
        return(            
            <div className='container m-0 p-0'>
                <div className={this.props.pagina === "criaGrupo" ? 'row cartasForm' : 'row cartasMainBody'}>
                    <Accordion defaultActiveKey="0" className={this.props.pagina === "criaGrupo" ? 'col-6 pb-1' : 'col-4 pb-3'}>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='m-0'>
                                <span>
                                    <p className='tituloUserCartaSmall mb-2'>
                                        Ricardo Lima
                                    </p>
                                    <p className='textoSmall mb-0'>
                                        66 anos
                                    </p>
                                    <p className='textoSmall mb-0'>
                                        Casa do Ricardo
                                    </p>
                                </span>
                            </Accordion.Header>
                            {this.props.pagina === "criaGrupo" ?
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button className='textoBtnUser col-7 mx-2' variant='flat'>Eliminar</Button>
                            </Accordion.Body>
                            :
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button as={Link} to="/users/user" className='textoBtnUser col-5 mx-2' variant='flat'>Mais informação</Button>
                                <Button as={Link} to="/notifications/create" className='textoBtnUser col-5 mx-2' variant='flat'>Criar evento</Button>
                            </Accordion.Body>
                            }
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey="0" className={this.props.pagina === "criaGrupo" ? 'col-6' : 'col-4 pb-3'}>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='m-0'>
                                <span>
                                    <p className='tituloUserCartaSmall mb-2'>
                                        Patrícia Silva
                                    </p>
                                    <p className='textoSmall mb-0'>
                                        21 anos
                                    </p>
                                    <p className='textoSmall mb-0'>
                                        Casa do Ricardo
                                    </p>
                                </span>
                            </Accordion.Header>
                            {this.props.pagina === "criaGrupo" ?
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button className='textoBtnUser col-5 mx-2' variant='flat'>Eliminar</Button>
                            </Accordion.Body>
                            :
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button as={Link} to="/users/user" className='textoBtnUser col-5 mx-2' variant='flat'>Mais informação</Button>
                                <Button as={Link} to="/notifications/create" className='textoBtnUser col-5 mx-2' variant='flat'>Criar evento</Button>
                            </Accordion.Body>
                            }
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey="0" className={this.props.pagina === "criaGrupo" ? 'col-6' : 'col-4 pb-3'}>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='m-0'>
                                <span>
                                    <p className='tituloUserCartaSmall mb-2'>
                                        Marco Costa
                                    </p>
                                    <p className='textoSmall mb-0'>
                                        42 anos
                                    </p>
                                    <p className='textoSmall mb-0'>
                                        Casa Marco
                                    </p>
                                </span>
                            </Accordion.Header>
                            {this.props.pagina === "criaGrupo" ?
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button className='textoBtnUser col-5 mx-2' variant='flat'>Eliminar</Button>
                            </Accordion.Body>
                            :
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button as={Link} to="/users/user" className='textoBtnUser col-5 mx-2' variant='flat'>Mais informação</Button>
                                <Button as={Link} to="/notifications/create" className='textoBtnUser col-5 mx-2' variant='flat'>Criar Evento</Button>
                            </Accordion.Body>
                            }
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey="0" className={this.props.pagina === "criaGrupo" ? 'col-6' : 'col-4'}>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='m-0'>
                                <span>
                                    <p className='tituloUserCartaSmall mb-2'>
                                        Bruno Alves
                                    </p>
                                    <p className='textoSmall mb-0'>
                                        33 anos
                                    </p>
                                    <p className='textoSmall mb-0'>
                                        Casa da Maria
                                    </p>
                                </span>
                            </Accordion.Header>
                            {this.props.pagina === "criaGrupo" ?
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button className='textoBtnUser col-5 mx-2' variant='flat'>Eliminar</Button>
                            </Accordion.Body>
                            :
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button as={Link} to="/users/user" className='textoBtnUser col-5 mx-2' variant='flat'>Mais informação</Button>
                                <Button as={Link} to="/notifications/create" className='textoBtnUser col-5 mx-2' variant='flat'>Criar evento</Button>
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
import React from 'react';
import '../../Styles/Cards.css';
import {Button, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class GroupCards extends React.Component {

    render(){
        return(
            <div className='container m-0 p-0'>
                <div className='row cartasMainBody'>
                <Accordion defaultActiveKey="0" className='col-4'>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='m-0'>
                                <span>
                                    <p className='tituloGrupoCarta mb-2'>
                                        Nome do grupo
                                    </p>
                                    <p className='mb-0 textCards'>
                                        Descrição do grupo bem extensa em lorem ipsum. Talvez apenas permitir 3 linhas, senão fica muito extenso. Colocar 3 pontinhos se passar disso.
                                    </p>
                                </span>
                            </Accordion.Header>
                            {this.props.pagina === "criaGrupo" ?
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button className='textoBtnUser col-5 mx-2' variant='flat'>Eliminar</Button>
                            </Accordion.Body>
                            :
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button as={Link} to="/groups/group" className='textoBtnUser col-5 mx-2' variant='flat'>Ver mais informação</Button>
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

export default GroupCards;
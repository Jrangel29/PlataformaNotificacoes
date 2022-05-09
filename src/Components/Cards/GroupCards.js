import React from 'react';
import '../../Styles/Cards.css';
import {Button, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class GroupCards extends React.Component {

    render(){
        return(
            <div className='container m-0 p-0'>
                <div className={this.props.pagina === "criaGrupo" ? 'row cartasForm' : 'row cartasMainBody'}>
                <Accordion defaultActiveKey="0" className={this.props.pagina === "criaGrupo" ? 'col-6 pb-3' : 'col-4 pb-3'}>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='m-0'>
                                <span>
                                    <p className={this.props.pagina === "criaGrupo" ? 'tituloGrupoCartaSmall mb-2' : 'tituloGrupoCarta mb-2'}>
                                        Pessoas que assistem a "Simpsons"
                                    </p>
                                    <p className={this.props.pagina === "criaGrupo" ? 'mb-0 textCardsSmall' : 'mb-0 textCards'}>
                                        Fãs de Simpsons que querem saber quando sai o próximo episódio.
                                    </p>
                                </span>
                            </Accordion.Header>
                            {this.props.pagina === "criaGrupo" ?
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button className='textoBtnUser col-7 mx-2' variant='flat'>Eliminar</Button>
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
import React from 'react';
import '../../Styles/Cards.css';
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap';
import Lixo from '../../Images/LixoBranco.svg';
import Editar from '../../Images/EditarBranco.svg';
import Plus from '../../Images/Plus.svg';
import {Link} from 'react-router-dom';

class NotificationCards extends React.Component {

    clicou = (tipo) => {
        if(tipo == "notificacoes" || tipo == "Rotina" || tipo == "RotinaUser" ){
            this.props.abreModal(tipo);
        } else if (tipo === "AddInfo"){
            this.props.abreModalInfo();
        } else if (tipo === "Delete"){
            this.props.abreModalDelete();
        } else if (tipo === "DeleteRotinaUser"){
            this.props.abreModalDeleteRotina();
        }
    }

    render(){
        return(
            <div className={this.props.tipo == "RotinaUser" ? 'container' : 'container m-0 p-0'}>
                <div className='row cartasMainBody'>
                    <Card style={{cursor: "pointer"}} className='col-4 p-0'>
                        {this.props.tipo == "historico" ?
                        <Card.Header as={Link} to="/history/details" style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                            <span className='col-10 p-0 tituloNotificacao'>Titulo da notificação</span>
                            <span className='col-2 p-0 dataNotificacao'>
                                10/03/22
                            </span>
                        </Card.Header>
                        :
                        <Card.Header className='row headerCarta m-0 gx-1'>
                            <span className='col-10 p-0 tituloNotificacao'>Titulo da notificação</span>
                            {this.props.tipo === "AddInfo" ?
                            <span className='col-1 offset-1'>
                                <img className='iconeCardPlus' src={Plus}/>
                            </span>
                            :
                            <>
                            <span className='col-1'>
                                <Link to="/notifications/edit">
                                    <img className='iconeCard' src={Editar}/>
                                </Link>
                            </span>
                            <span className='col-1 px-2'>
                                <img className='iconeCard' onClick={this.props.tipo === "RotinaUser" ? () => this.clicou("DeleteRotinaUser") : () => this.clicou("Delete")} src={Lixo}/>
                            </span>
                            </>
                            }
                        </Card.Header>
                        }
                        {
                        this.props.tipo == "Rotina" ? 
                        <Card.Body onClick={() => this.clicou(this.props.tipo)} className='bodyCarta row m-0 px-0'>
                            <span className='col-10'>
                                <Card.Title className='dataNotifsTitle'>Dias</Card.Title>
                                <Card.Text className='dataNotifs'>Segunda-Feira, Terça-Feira</Card.Text>
                            </span>
                            <span className='col-2 d-flex flex-column'>
                                <Card.Title className='dataNotifsTitle'>Horas</Card.Title>
                                <Card.Text className='dataNotifs'>16:30</Card.Text>
                            </span>
                        </Card.Body>
                        :
                        this.props.tipo == "RotinaUser" ?
                        <>
                            <Card.Body onClick={() => this.clicou(this.props.tipo)} className='bodyCarta m-0'>
                                <Card.Text className='p-0'>Descrição da notificação</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem className='dataMiddleCarta'>
                                    <span className='row dataMiddleCarta m-0 gx-1'>
                                        <span className='col-10'>
                                            <Card.Title className='dataFooterUserTitle'>Dias</Card.Title>
                                            <Card.Text className='dataFooterUser'>Segunda-Feira, Terça-Feira</Card.Text>
                                        </span>
                                        <span className='col-2 d-flex flex-column'>
                                            <Card.Title className='dataFooterUserTitle'>Horas</Card.Title>
                                            <Card.Text className='dataFooterUser'>16:30</Card.Text>
                                        </span>
                                    </span>
                                </ListGroupItem>
                            </ListGroup>    
                        </>
                        :
                        this.props.tipo === "historico" ?
                        <Card.Body as={Link} to="/history/details" style={{textDecoration: "none", color: "black"}} className='bodyCarta m-0'>
                            <Card.Text className='p-0'>Descrição da notificação</Card.Text>
                        </Card.Body>
                        :
                        <Card.Body onClick={() => this.clicou(this.props.tipo)} className='bodyCarta m-0'>
                            <Card.Text className='p-0'>Descrição da notificação</Card.Text>
                        </Card.Body>
                        }
                        {
                        this.props.tipo == "RotinaUser" ?
                        <Card.Footer onClick={() => this.clicou("AddInfo")} className='adicionarConteudoNotif m-0'>
                            Adicionar informação de notificações pontuais
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

export default NotificationCards;
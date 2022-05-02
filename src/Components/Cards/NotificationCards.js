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
            <div className={this.props.tipo == "RotinaUser" ? 'container' : 'container m-0'}>
                <div className='row cartasMainBody'>
                    <span className='col-4 ps-0'>
                        <Card style={{cursor: "pointer", minHeight: "100%"}}>
                            {this.props.tipo == "historico" ?
                            <Card.Header as={Link} to="/history/details" style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                <span className='col-10 p-0 tituloNotificacao'>Benfica x Liverpool</span>
                                <span className='col-2 p-0 dataNotificacao'>
                                    04/04/22
                                </span>
                            </Card.Header>
                            :
                            this.props.tipo == "Rotina" ?
                            <Card.Header as={Link} to="/history/details" style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                <span className='col-10 p-0 tituloNotificacao'>Tomar o medicamento para os diabetes</span>
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
                            :
                            this.props.tipo == "RotinaUser" ?
                            <Card.Header as={Link} to="/history/details" style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                <span className='col-10 p-0 tituloNotificacao'>Final da Champions</span>
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
                            :
                            <Card.Header className='row headerCarta m-0 gx-1'>
                                <span className='col-10 p-0 tituloNotificacao'>Final da Champions</span>
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
                            <Card.Body onClick={() => this.clicou(this.props.tipo)} className='bodyCartaRotina row m-0 px-0'>
                                <span className='col-9'>
                                    <Card.Title className='dataNotifsTitle'>Dias</Card.Title>
                                    <Card.Text className='dataNotifs'>Segunda-Feira, Quinta-Feira</Card.Text>
                                </span>
                                <span className='col-3 d-flex flex-column' style={{textAlign: "right"}}>
                                    <Card.Title className='dataNotifsTitle'>Horas</Card.Title>
                                    <Card.Text className='dataNotifs'>16:30</Card.Text>
                                </span>
                            </Card.Body>
                            :
                            this.props.tipo == "RotinaUser" ?
                            <>
                                <Card.Body onClick={() => this.clicou(this.props.tipo)} className='bodyCartaRotina m-0'>
                                    <Card.Text className='p-0'>Descrição da notificação</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className='dataMiddleCarta'>
                                        <span className='row dataMiddleCarta m-0 gx-1'>
                                            <span className='col-9'>
                                                <Card.Title className='dataFooterUserTitle'>Dias</Card.Title>
                                                <Card.Text className='dataFooterUser'>Segunda-Feira, Terça-Feira</Card.Text>
                                            </span>
                                            <span className='col-3 d-flex flex-column' style={{textAlign: "right"}}>
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
                                <Card.Text className='p-0'>O Benfica defronta o Liverpool em casa, para a Champions League, amanhã.</Card.Text>
                            </Card.Body>
                            :
                            <Card.Body onClick={() => this.clicou(this.props.tipo)} className='bodyCarta m-0'>
                                <Card.Text className='p-0'>A final da champions é amanhã. Não percas o jogo do ano!</Card.Text>
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
                    </span>
                    <span className='col-4 px-0'>
                        <Card style={{cursor: "pointer", minHeight: "100%"}}>
                            {this.props.tipo == "historico" ?
                            <Card.Header as={Link} to="/history/details" style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                <span className='col-10 p-0 tituloNotificacao'>Análises ao sangue</span>
                                <span className='col-2 p-0 dataNotificacao'>
                                    22/03/22
                                </span>
                            </Card.Header>
                            :
                            this.props.tipo == "Rotina" ?
                            <Card.Header as={Link} to="/history/details" style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                <span className='col-10 p-0 tituloNotificacao'>Não se esqueça de passear o cão</span>
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
                            :
                            this.props.tipo == "RotinaUser" ?
                            <Card.Header as={Link} to="/history/details" style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                <span className='col-10 p-0 tituloNotificacao'>Final da Champions</span>
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
                            :
                            <Card.Header className='row headerCarta m-0 gx-1'>
                                <span className='col-10 p-0 tituloNotificacao'>Novo episódio de "Os Simpsons"</span>
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
                            <Card.Body onClick={() => this.clicou(this.props.tipo)} className='bodyCartaRotina row m-0 px-0'>
                                <span className='col-9'>
                                    <Card.Title className='dataNotifsTitle'>Dias</Card.Title>
                                    <Card.Text className='dataNotifs'>Todos os dias</Card.Text>
                                </span>
                                <span className='col-3 d-flex flex-column' style={{textAlign: "right"}}>
                                    <Card.Title className='dataNotifsTitle'>Horas</Card.Title>
                                    <Card.Text className='dataNotifs'>10:30</Card.Text>
                                </span>
                            </Card.Body>
                            :
                            this.props.tipo == "RotinaUser" ?
                            <>
                                <Card.Body onClick={() => this.clicou(this.props.tipo)} className='bodyCartaRotina m-0'>
                                    <Card.Text className='p-0'>Descrição da notificação</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className='dataMiddleCarta'>
                                        <span className='row dataMiddleCarta m-0 gx-1'>
                                            <span className='col-9'>
                                                <Card.Title className='dataFooterUserTitle'>Dias</Card.Title>
                                                <Card.Text className='dataFooterUser'>Segunda-Feira, Terça-Feira</Card.Text>
                                            </span>
                                            <span className='col-3 d-flex flex-column' style={{textAlign: "right"}}>
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
                                <Card.Text className='p-0'>Olá Ricardo, amanhã tem que ir fazer análises ao sangue.</Card.Text>
                            </Card.Body>
                            :
                            <Card.Body onClick={() => this.clicou(this.props.tipo)} className='bodyCarta m-0'>
                                <Card.Text className='p-0'>A nova temporada de "Os Simpsons" estreia esta quarta-Feira, às 18h, na FOX Comedy.</Card.Text>
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
                    </span>
                    <span className='col-4 pe-0'>
                        <Card style={{cursor: "pointer", minHeight: "100%"}}>
                            {this.props.tipo == "historico" ?
                            <Card.Header as={Link} to="/history/details" style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                <span className='col-10 p-0 tituloNotificacao'>Aniversário a neta Luísa.</span>
                                <span className='col-2 p-0 dataNotificacao'>
                                    15/04/22
                                </span>
                            </Card.Header>
                            :
                            this.props.tipo == "Rotina" ?
                            <Card.Header as={Link} to="/history/details" style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                <span className='col-10 p-0 tituloNotificacao'>Medir as tensões</span>
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
                            :
                            this.props.tipo == "RotinaUser" ?
                            <Card.Header as={Link} to="/history/details" style={{textDecoration: "none"}} className='row headerCarta m-0 gx-1'>
                                <span className='col-10 p-0 tituloNotificacao'>Final da Champions</span>
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
                            :
                            <Card.Header className='row headerCarta m-0 gx-1'>
                                <span className='col-10 p-0 tituloNotificacao'>Consulta anual de rotina no hospital.</span>
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
                            <Card.Body onClick={() => this.clicou(this.props.tipo)} className='bodyCartaRotina row m-0 px-0'>
                                <span className='col-9'>
                                    <Card.Title className='dataNotifsTitle'>Dias</Card.Title>
                                    <Card.Text className='dataNotifs'>Segunda-Feira, Terça-Feira, Sábado</Card.Text>
                                </span>
                                <span className='col-3 d-flex flex-column' style={{textAlign: "right"}}>
                                    <Card.Title className='dataNotifsTitle'>Horas</Card.Title>
                                    <Card.Text className='dataNotifs'>12:20</Card.Text>
                                </span>
                            </Card.Body>
                            :
                            this.props.tipo == "RotinaUser" ?
                            <>
                                <Card.Body onClick={() => this.clicou(this.props.tipo)} className='bodyCartaRotina m-0'>
                                    <Card.Text className='p-0'>Descrição da notificação</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className='dataMiddleCarta'>
                                        <span className='row dataMiddleCarta m-0 gx-1'>
                                            <span className='col-9'>
                                                <Card.Title className='dataFooterUserTitle'>Dias</Card.Title>
                                                <Card.Text className='dataFooterUser'>Segunda-Feira, Terça-Feira</Card.Text>
                                            </span>
                                            <span className='col-3 d-flex flex-column' style={{textAlign: "right"}}>
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
                                <Card.Text className='p-0'>Olá Júlia, o aniversário da sua neta é daqui a dois dias.</Card.Text>
                            </Card.Body>
                            :
                            <Card.Body onClick={() => this.clicou(this.props.tipo)} className='bodyCarta m-0'>
                                <Card.Text className='p-0'>Olá José, não se esqueça da sua consulta anual de rotina no hospital S. João.</Card.Text>
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
                    </span>
                </div>
            </div>
        )
    } 
}

export default NotificationCards;
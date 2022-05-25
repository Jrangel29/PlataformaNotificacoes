import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Header from '../Components/Geral/Header';
import {Button, Table} from 'react-bootstrap';
import '../Styles/User.css';
import NotificationCards from '../Components/Cards/NotificationCards';
import NotificationModal from '../Components/Modal/NotificationModal';
import AddInfoModal from '../Components/Modal/AddInfoModal';
import DeleteNotificationAll from '../Components/Modal/DeleteNotification';
import DeleteRoutine from '../Components/Modal/DeleteRoutine';
import SuccessModal from '../Components/Modal/SuccessModal';
import InfoSection from '../Components/Users/InfoSection';

class User extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            seccao: "notificacoes",
            showModal: false,
            showModalInfo: false,
            showDeleteModal: false,
            showDeleteModalRoutine: false,
            showSuccessModal: false,
            tipoApagado: "",
            tipoModal: ""
        }
    }

    mudaSeccao = (valorClicado) => this.setState({seccao: valorClicado})
    
    onOpen = (tipo) => this.setState({showModal: true, tipoModal: tipo});
    onClose = () => this.setState({showModal: false});

    onOpenAddInfo = () => this.setState({showModalInfo: true});
    onCloseAddInfo = (resposta) => {
        if(resposta === "Cancela"){
            this.setState({showModalInfo: false, showSuccessModal: false})
        } else {
            this.setState({showModalInfo: false, showSuccessModal: true, tipoApagado: "AddInfo"})
        }
    };

    onOpenDelete = () => this.setState({showDeleteModal: true});
    onCloseDelete = (resposta) => {
        if(resposta === "Cancela"){
            this.setState({showDeleteModal: false, showSuccessModal: false})
        } else {
            this.setState({showDeleteModal: false, showSuccessModal: true, tipoApagado: "Notificação"})
        }
    };

    onOpenDeleteRoutine = () => this.setState({showDeleteModalRoutine: true});
    onCloseDeleteRoutine = (resposta) => {
        if(resposta === "Cancela"){
            this.setState({showDeleteModalRoutine: false, showSuccessModal: false})
        } else {
            this.setState({showDeleteModalRoutine: false, showSuccessModal: true, tipoApagado: "Rotina"})
        }
    };

    onCloseSuccess = () => this.setState({showSuccessModal: false});

    render(){
        return(
            <div>
                <div className='mainBodyForm container px-0'>
                    <Navbar/>
                    <Header nome="Utilizadores" detalhe="sim" apagaMuda="sim"/>
                    <div>
                        <div className='prevSeccao ms-0'>
                            <h1 className='tituloSeccaoPaginaNotifs'>Informação geral</h1>
                        </div>

                        <InfoSection/>

                        <div className='mt-2'>
                            <div className='prevSeccao ms-0'>
                                <h1 className='tituloSeccaoPaginaNotifs'>Notificações</h1>
                            </div>
                            <div className='row offset-1 mt-4 col-10 justify-content-center'>
                                <Button onClick={() => this.mudaSeccao("notificacoes")} className='seccaoBtn col-3 mx-2' variant={this.state.seccao == "notificacoes" ? 'flat' : 'custom'}>Notificações por enviar</Button>
                                <Button onClick={() => this.mudaSeccao("rotina")} className='seccaoBtn col-3 mx-2' variant={this.state.seccao == "rotina" ? 'flat' : 'custom'}>Rotinas do utilizador</Button>
                                <Button onClick={() => this.mudaSeccao("historico")} className='seccaoBtn col-3 mx-2' variant={this.state.seccao == "historico" ? 'flat' : 'custom'}>Histórico de notificações</Button>
                            </div>
                            <NotificationCards tipo={this.state.seccao == "notificacoes" ? "notificacoes" : this.state.seccao == "rotina" ? "RotinaUser" : "historico"} pagina={'users'} abreModal={this.onOpen} abreModalInfo={this.onOpenAddInfo} abreModalDelete={this.onOpenDelete} abreModalDeleteRotina={this.onOpenDeleteRoutine}/>
                        </div>
                    </div>
                </div>
                <NotificationModal show={this.state.showModal} onHide={this.onClose} tipo={this.state.tipoModal == "notificacoes" ? "notificacoes" : "RotinaUser"}/>
                <AddInfoModal show={this.state.showModalInfo} onHide={this.onCloseAddInfo}/>
                <DeleteNotificationAll show={this.state.showDeleteModal} onHide={this.onCloseDelete} utilizador="Sim"/>
                <DeleteRoutine show={this.state.showDeleteModalRoutine} onHide={this.onCloseDeleteRoutine} utilizador="Sim"/>
                <SuccessModal show={this.state.showSuccessModal} onHide={this.onCloseSuccess} tiponotif={this.state.tipoApagado}/>
            </div>
        )
    } 
}

export default User;
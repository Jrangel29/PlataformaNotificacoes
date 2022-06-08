import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Header from '../Components/Geral/Header';
import {Button} from 'react-bootstrap';
import '../Styles/User.css';
import NotificationCards from '../Components/Cards/NotificationCards';
import NotificationModal from '../Components/Modal/NotificationModal';
import UserDetailCards from '../Components/Cards/UserDetailCards';
import DeleteNotification from '../Components/Modal/DeleteNotification';
import DeleteRoutine from '../Components/Modal/DeleteRoutine';
import SuccessModal from '../Components/Modal/SuccessModal';

class Group extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            seccao: "notificacoes",
            showModal: false,
            showDeleteModal: false,
            showDeleteModalRoutine: false,
            showSuccessModal: false,
            tipoApagado: ""
        }
    }

    mudaSeccao = (valorClicado) => this.setState({seccao: valorClicado})
    
    onOpen = () => this.setState({showModal: true});
    onClose = () => this.setState({showModal: false});

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
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Grupos" detalhe="sim" apagaMuda="sim"/>
                    <div className='px-2'>
                        <div>
                            <h1 className='tituloSeccaoPagina'>Idosos de Lisboa (+60 anos)</h1>
                            <p className='subtituloSeccaoPagina'>Descrição</p>
                            <p className='textoSeccaoPagina mb-3'>Este grupo engloba todos os idosos de Lisboa que precisam de receber informação sobre a aleração dos preços nos medicamentos nas farmácias.</p>
                            <p className='subtituloSeccaoPagina'>Membros do grupo</p>
                            <UserDetailCards/>
                        </div>
                        <div className='mt-4'>
                            <div className='row offset-1 col-10 justify-content-center'>
                                <Button onClick={() => this.mudaSeccao("notificacoes")} className='seccaoBtn col-3 mx-2' variant={this.state.seccao == "notificacoes" ? 'flat' : 'custom'}>Notificações por enviar</Button>
                                <Button onClick={() => this.mudaSeccao("rotina")} className='seccaoBtn col-3 mx-2' variant={this.state.seccao == "rotina" ? 'flat' : 'custom'}>Rotinas do utilizador</Button>
                                <Button onClick={() => this.mudaSeccao("historico")} className='seccaoBtn col-3 mx-2' variant={this.state.seccao == "historico" ? 'flat' : 'custom'}>Histórico de notificações</Button>
                            </div>
                            <NotificationCards tipo={this.state.seccao == "notificacoes" ? "notificacoes" : this.state.seccao == "rotina" ? "RotinaUser" : "historico"} abreModal={this.onOpen} abreModalDelete={this.onOpenDelete} abreModalDeleteRotina={this.onOpenDeleteRoutine}/>
                        </div>
                    </div>
                </div>
                <NotificationModal show={this.state.showModal} onHide={this.onClose} tipo={this.state.seccao == "notificacoes" ? "notificacoes" : "RotinaUser"}/>
                <DeleteNotification show={this.state.showDeleteModal} onHide={this.onCloseDelete} tipo="nao" grupo="sim"/>
                <DeleteRoutine show={this.state.showDeleteModalRoutine} onHide={this.onCloseDeleteRoutine} utilizador="nao" grupo="sim"/>
                <SuccessModal show={this.state.showSuccessModal} onHide={this.onCloseSuccess} tiponotif={this.state.tipoApagado}/>
            </div>
        )
    } 
}

export default Group;
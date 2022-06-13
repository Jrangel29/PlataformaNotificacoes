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
import UserNotifications from '../Components/Cards/UserNotifications';

class User extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            seccao: "Por Enviar",
            infoModal: '',
            showModal: false,
            showModalInfo: false,
            showDeleteModal: false,
            showDeleteModalRoutine: false,
            showSuccessModal: false,
            tipoApagado: "",
            userInfo: {
                nome: '',
                id_casa: '',
                idade: '',
                info: '',
                localidade: '',
                casa: '',
                blacklist: ''
            },
            idUser: ''
        }
    }

    mudaSeccao = (valorClicado) => this.setState({seccao: valorClicado})
    
    onOpen = (info) => this.setState({showModal: true, infoModal: info});
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

    setUserInfo = (info, id) => this.setState({userInfo: info, idUser: id});

    render(){
        {/*console.log(this.state)*/}
        return(
            <div>
                <div className='mainBodyForm container px-0'>
                    <Navbar/>
                    <Header nome="Utilizadores" detalhe="sim" apagaMuda="sim" id={this.state.idUser}/>
                    <div>
                        <div className='prevSeccao ms-0'>
                            <h1 className='tituloSeccaoPaginaNotifs'>Informação geral</h1>
                        </div>

                        <InfoSection guardaInfo={this.setUserInfo}/>

                        <div className='prevSeccao ms-0'>
                                <h1 className='tituloSeccaoPaginaNotifs'>Notificações</h1>
                            </div>

                        <div className='mx-3' style={{padding: "10px 40px"}}>
                            <div className='row offset-1 mt-4 col-10 justify-content-center'>
                                <Button onClick={() => this.mudaSeccao("Por Enviar")} className='seccaoBtn col-3 mx-2' variant={this.state.seccao == "Por Enviar" ? 'flat' : 'custom'}>Por Enviar</Button>
                                <Button onClick={() => this.mudaSeccao("Enviadas")} className='seccaoBtn col-3 mx-2' variant={this.state.seccao == "Enviadas" ? 'flat' : 'custom'}>Enviadas</Button>
                            </div>
                            {/*<NotificationCards tipo={this.state.seccao == "notificacoes" ? "notificacoes" : this.state.seccao == "rotina" ? "RotinaUser" : "historico"} pagina={'users'} abreModal={this.onOpen} abreModalInfo={this.onOpenAddInfo} abreModalDelete={this.onOpenDelete} abreModalDeleteRotina={this.onOpenDeleteRoutine}/>*/}
                            <UserNotifications seccao={this.state.seccao} showModal={this.onOpen}/>
                        </div>
                    </div>
                </div>
                <NotificationModal show={this.state.showModal} onHide={this.onClose}/>
                <DeleteNotificationAll show={this.state.showDeleteModal} onHide={this.onCloseDelete} utilizador="Sim"/>
                <DeleteRoutine show={this.state.showDeleteModalRoutine} onHide={this.onCloseDeleteRoutine} utilizador="Sim"/>
                <SuccessModal show={this.state.showSuccessModal} onHide={this.onCloseSuccess} tiponotif={this.state.tipoApagado}/>
            </div>
        )
    } 
}

export default User;
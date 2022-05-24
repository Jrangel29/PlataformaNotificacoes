import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Filters from '../Components/Geral/Filters';
import NotificationCards from '../Components/Cards/NotificationCards';
import NotificationModal from '../Components/Modal/NotificationModal';
import Header from '../Components/Geral/Header';
import DeleteNotificationAll from '../Components/Modal/DeleteNotification';
import SuccessModal from '../Components/Modal/SuccessModal';

class Notifications extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            showDeleteModal: false,
            showSuccessModal: false
        }
    }

    onOpen = () => this.setState({showModal: true});
    onClose = () => this.setState({showModal: false});

    onOpenDelete = () => this.setState({showDeleteModal: true});
    onCloseDelete = (resposta) => {
        if(resposta === "Cancela"){
            this.setState({showDeleteModal: false, showSuccessModal: false})
        } else {
            this.setState({showDeleteModal: false, showSuccessModal: true})
        }
    };
    onCloseSuccess = () => this.setState({showSuccessModal: false});

    render(){
        return(
            <div>
                <div className='mainBodyForm container p-0'>
                    <Navbar/>
                    <Header nome="Notificações agendadas" apagaMuda="nao"/>
                    <div style={{padding: "0 40px"}}>
                        <Filters tipo="Notificação"/>
                    </div>
                    <div style={{padding: "0 40px"}}>
                        <NotificationCards tipo={"notificacoes"} abreModal={this.onOpen} abreModalDelete={this.onOpenDelete}/>
                    </div>
                </div>
                <NotificationModal show={this.state.showModal} onHide={this.onClose} tipo="notificacoes"/>
                <DeleteNotificationAll show={this.state.showDeleteModal} onHide={this.onCloseDelete} tipo="nao"/>
                <SuccessModal show={this.state.showSuccessModal} onHide={this.onCloseSuccess} tiponotif="Notificação"/>
            </div>
        )
    } 
}

export default Notifications;
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
            showSuccessModal: false,
            search: ''
        }
    }

    onOpen = () => this.setState({showModal: true});
    onClose = () => this.setState({showModal: false});

    render(){
        return(
            <div>
                <div className='mainBodyForm container p-0'>
                    <Navbar/>
                    <Header nome="Notificações agendadas" apagaMuda="nao"/>
                    <div style={{padding: "0 40px"}}>
                        <Filters tipo="Notificações" change={this.onChangeSearch} valorMuda={this.state.search}/>
                    </div>
                    <div style={{padding: "0 40px"}}>
                        <NotificationCards tipo='Por enviar' pesquisa={this.state.search} abreModal={this.onOpen} abreModalDelete={this.onOpenDelete}/>
                    </div>
                </div>
                <SuccessModal show={this.state.showSuccessModal} onHide={this.onCloseSuccess} tiponotif="Notificação"/>
            </div>
        )
    } 
}

export default Notifications;
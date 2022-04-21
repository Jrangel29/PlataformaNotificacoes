import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Filters from '../Components/Geral/Filters';
import NotificationCards from '../Components/Cards/NotificationCards';
import NotificationModal from '../Components/Modal/NotificationModal';
import Header from '../Components/Geral/Header';
import DeleteRoutine from '../Components/Modal/DeleteRoutine';
import SuccessModal from '../Components/Modal/SuccessModal';

class Routines extends React.Component {

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
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Rotinas" apagaMuda="nao"/>
                    <div>
                        <Filters tipo="Rotina"/>
                    </div>
                    <div>
                        <NotificationCards tipo={"Rotina"} abreModal={this.onOpen} abreModalDelete={this.onOpenDelete}/>
                    </div>
                </div>
                <NotificationModal show={this.state.showModal} onHide={this.onClose} tipo="Rotina"/>
                <DeleteRoutine show={this.state.showDeleteModal} onHide={this.onCloseDelete} utilizador="nao"/>
                <SuccessModal show={this.state.showSuccessModal} onHide={this.onCloseSuccess} tiponotif="Rotina"/>
            </div>
        )
    } 
}

export default Routines;
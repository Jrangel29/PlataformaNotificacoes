import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Filters from '../Components/Geral/Filters';
import GroupCards from '../Components/Cards/GroupCards';
import Header from '../Components/Geral/Header';
import SuccessModal from '../Components/Modal/SuccessModal';
import DeleteEvent from '../Components/Modal/DeleteEvent';

class Groups extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showDeleteModal: false,
            showSuccessModal: false
        }
    }

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
                    <Header nome="Grupos" apagaMuda="nao"/>
                    <div>
                        <Filters tipo="Grupo"/>
                    </div>
                    <div>
                        <GroupCards abreModalDelete={this.onOpenDelete}/>
                    </div>
                </div>
                <DeleteEvent show={this.state.showDeleteModal} onHide={this.onCloseDelete}/>
                <SuccessModal show={this.state.showSuccessModal} onHide={this.onCloseSuccess} tiponotif="Grupo"/>
            </div>
        )
    } 
}

export default Groups;
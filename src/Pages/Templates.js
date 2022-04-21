import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Filters from '../Components/Geral/Filters';
import TemplateCards from '../Components/Cards/TemplateCards';
import Header from '../Components/Geral/Header';
import DeleteTemplate from '../Components/Modal/DeleteTemplate';
import SuccessModal from '../Components/Modal/SuccessModal';

class Templates extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            showSuccessModal: false
        }
    }

    onOpen = () => this.setState({showModal: true});
    onClose = (resposta) => {
        if(resposta === "Cancela"){
            this.setState({showModal: false, showSuccessModal: false})
        } else {
            this.setState({showModal: false, showSuccessModal: true})
        }
    };
    onCloseSuccess = () => this.setState({showSuccessModal: false});

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Templates" apagaMuda="nao"/>
                    <div>
                        <Filters tipo="Template"/>
                    </div>
                    <div>
                        <TemplateCards abreModal={this.onOpen}/>
                    </div>
                </div>
                <DeleteTemplate show={this.state.showModal} onHide={this.onClose}/>
                <SuccessModal show={this.state.showSuccessModal} onHide={this.onCloseSuccess} tiponotif="Template"/>
            </div>
        )
    } 
}

export default Templates;
import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown} from 'react-bootstrap';
import SuccessModal from '../../Components/Modal/SuccessModal';
import SubmitButton from '../../Components/Geral/SubmitButton';
import { BuscaDistritosConcelhos } from '../../Components/Forms/Hooks';

class CreateHouse extends React.Component {

    constructor(props){
        super(props);
        this.state={
            mostraModal: false,
            infoUser: {
                nomeCasa: "",
                idBox: "",
                distrito: "",
                concelho: ""
            }
        }
    }
    
    onOpen = () => this.setState({mostraModal: true});
    onClose = () => this.setState({mostraModal: false});

    atualizaInfo = (e) => {
        this.setState({
            infoUser: {
                ...this.state.infoUser,
                [e.currentTarget.id]: e.currentTarget.value
            }
        })
    }

    atualizaDistrito = (e) => {
        this.setState({
            infoUser: {
                ...this.state.infoUser,
                distrito: e,
                concelho: ''
            }
        })
    }

    atualizaConcelho = (e) => {
        this.setState({
            infoUser: {
                ...this.state.infoUser,
                concelho: e
            }
        })
    }

    alteraCor = (valor, dia) => {
        let arrayAnterior = [...this.state.mostraSaude];
        let objectNew = {
            ...this.state.mostraSaude[valor],
            [dia]: !this.state.mostraSaude[valor][dia]
        }
        arrayAnterior[valor] = objectNew
        this.setState({
            mostraSaude: arrayAnterior
        })
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBodyForm container px-0'>
                    <Header nome="Criar Casa" detalhe="sim" apagaMuda="nao"/>
                    <div className='row m-0 p-0'>
                        <div className='prevSeccao ms-0'>
                            <h1 className='tituloSeccaoPaginaNotifs'>Informação Geral</h1>
                        </div>
                        <span className='col-12 mx-3 mt-2' style={{padding: "0 40px"}}>
                            <p className='subtituloSeccaoPagina'>Nome da Casa <span className='obrigatorio'>*</span></p>
                            <input type="text" className='inputsForms w-100' value={this.state.infoUser.nomeCasa} id='nomeCasa' onChange={this.atualizaInfo}/>
                        </span>
                        <div className='row col-12 mx-3' style={{padding: "0 40px"}}>
                            <span className='col-4 p-0 mt-3'>
                                <p className='subtituloSeccaoPagina'>ID da box <span className='obrigatorio'>*</span></p>
                                <input type="text" value={this.state.infoUser.idBox} id='idBox' onChange={this.atualizaInfo} className='inputsForms w-100'/>
                            </span>
                        </div>

                        <div className='row col-12 mx-3' style={{padding: "0 40px"}}>
                            <BuscaDistritosConcelhos valor={this.state.infoUser.distrito} atualiza={this.atualizaDistrito} valorConcelho={this.state.infoUser.concelho} atualizaConcelho={this.atualizaConcelho}/>
                        </div>

                        <span className='row m-0 mt-2 justify-content-end' style={{padding: "0 40px"}}>
                            <p className='col-2 indicaObrigatorio'>*Obrigatório</p>
                        </span>
                        <div style={{padding: "0 40px"}}>
                        <SubmitButton params={this.state} openModal={this.onOpen} tipoForm="Casa"/>
                        </div>
                    </div>
                </div>
                <SuccessModal show={this.state.mostraModal} onHide={this.onClose} tiponotif="CriarCasa"/>
            </div>
        )
    } 
}

export default CreateHouse;
import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown} from 'react-bootstrap';
import SuccessModal from '../../Components/Modal/SuccessModal';
import SubmitButton from '../../Components/Geral/SubmitButton';
import { BuscaTipologias, BuscaDistritosConcelhos } from '../../Components/Forms/Hooks';
import { ListaCasasPesquisa, MostraCasaEscolhida } from '../../Components/Forms/ListaPesquisa';

class CreateUser extends React.Component {

    constructor(props){
        super(props);
        this.state={
            mostraModal: false,
            infoUser: {
                nomeUser: "",
                idade: "",
                infoAdicional: "",
                idCasa: '',
            },
            tipologias: []
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

    mudaCasa = (val, tipo) => {
        if(tipo === 'adiciona'){
            this.setState({
                infoUser: {
                    ...this.state.infoUser,
                    idCasa: val
                }
            })
        } else{
            this.setState({
                infoUser: {
                    ...this.state.infoUser,
                    idCasa: ''
                }
            })
        }
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

    handleTipologia = (valor) => {
        let contagem = 0;
        this.state.tipologias.map((nr, index) => {
            if(nr === valor.target.value){
                contagem++;
                let arrayMuda = [...this.state.tipologias];
                arrayMuda.splice(index);
                this.setState({
                    tipologias: arrayMuda
                })
            }
        })
        if(contagem === 0){
            let arrayAnterior = [...this.state.tipologias];
            arrayAnterior.push(valor.target.value);
            this.setState({
                tipologias: arrayAnterior
            })
        }

    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBodyForm container px-0'>
                    <Header nome="Criar Utilizador" detalhe="sim" apagaMuda="nao" criaUser="sim"/>
                    <div>
                        <div className='prevSeccao ms-0'>
                            <h1 className='tituloSeccaoPaginaNotifs'>Informação Geral</h1>
                        </div>
                        <div className='row m-0' style={{padding: "0 40px"}}>
                            <span className='col-12 m-0 mt-2'>
                                <p className='subtituloSeccaoPagina'>Nome do Utilizador <span className='obrigatorio'>*</span></p>
                                <input type="text" className='inputsForms w-100' value={this.state.infoUser.nomeUser} id='nomeUser' onChange={this.atualizaInfo}/>
                            </span>
                        </div>
                        <div className='row col-12 m-0' style={{padding: "0 40px"}}>
                            <span className='col-3 mt-3'>
                                <p className='subtituloSeccaoPagina'>Idade <span className='obrigatorio'>*</span></p>
                                <input type="number" min="1" value={this.state.infoUser.idade} id='idade' onChange={this.atualizaInfo} className='inputsForms w-100'/>
                            </span>
                        </div>


                        <div className='row col-12 m-0' style={{padding: "0 40px"}}>
                            <span className='col-6 row m-0 divMargem'>
                                <p className='subtituloSeccaoPagina mt-3 p-0'>Notificações que o utilizador não quer receber</p>
                                <p className='textoPrefsUserWarning p-0 mb-1'>Seleciona as notificações que o utilizador não quer receber</p>
                                <BuscaTipologias funcao={this.handleTipologia}/>
                            </span>
                        </div>

                        <div className='prevSeccao ms-0 mt-2'>
                            <p className='tituloSeccaoPaginaNotifs'>Informações Adicionais</p>
                        </div>
                        <div className='row col-12 m-0' style={{padding: "0 40px"}}>
                            <p className='subtituloSeccaoPagina mt-2'>Informações que possam ser úteis na criação de eventos/notificações</p>
                            <textarea rows="4" className='inputsForms w-100 mx-2' value={this.state.infoUser.infoAdicional} id='infoAdicional' onChange={this.atualizaInfo}/>
                        </div>

                        <div className='prevSeccao ms-0 mt-3'>
                            <p className='tituloSeccaoPaginaNotifs'>Casa</p>
                        </div>
                        <span className='col-12 m-0'>
                            <div className='row col-12 m-0 mt-2' style={{padding: "0 40px"}}>
                                <span className='col-6 row m-0'>
                                    <p className='subtituloSeccaoPagina p-0'>Adicionar a casa</p>
                                </span>
                                <span className='col-6 row m-0'>
                                    <p className='subtituloSeccaoPagina p-0'>Casa escolhida</p>
                                </span>
                            </div>

                            <div className='row col-12 m-0' style={{padding: "0 40px"}}>
                                <div className='col-6 ms-0'>
                                    <ListaCasasPesquisa casa={this.state.infoUser.idCasa} muda={this.mudaCasa}/>
                                </div>
                                <div className='col-6 ms-0'>
                                    <MostraCasaEscolhida casa={this.state.infoUser.idCasa} muda={this.mudaCasa}/>
                                </div>
                            </div>
                        </span>
                        
                        <span className='row m-0 mt-2 justify-content-end' style={{padding: "0 40px"}}>
                            <p className='col-2 indicaObrigatorio'>*Obrigatório</p>
                            <SubmitButton params={this.state} openModal={this.onOpen} tipoForm="User"/>
                        </span>
                    </div>
                </div>
                <SuccessModal show={this.state.mostraModal} onHide={this.onClose} tiponotif="CriarUtilizador"/>
            </div>
        )
    } 
}

export default CreateUser;
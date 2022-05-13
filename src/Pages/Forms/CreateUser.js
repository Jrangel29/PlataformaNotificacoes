import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown} from 'react-bootstrap';
import SuccessModal from '../../Components/Modal/SuccessModal';
import SubmitButton from '../../Components/Geral/SubmitButton';
import { BuscaTipologias, BuscaDistritosConcelhos } from '../../Components/Forms/Hooks';
import { ListaCasasPesquisa } from '../../Components/Forms/ListaPesquisa';

class CreateUser extends React.Component {

    constructor(props){
        super(props);
        this.state={
            mostraModal: false,
            infoUser: {
                nomeUser: "",
                idade: "",
                idBox: "",
                distrito: "",
                concelho: "",
                infoAdicional: ""
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
                <div className='mainBody container'>
                    <Header nome="Criar Utilizador" detalhe="sim" apagaMuda="nao" criaUser="sim"/>
                    <div className='row m-0'>
                        <h1 className='tituloSeccaoPagina'>Informação Geral</h1>
                        <span className='col-12 m-0'>
                            <p className='subtituloSeccaoPagina'>Nome do Utilizador <span className='obrigatorio'>*</span></p>
                            <input type="text" className='inputsForms w-100' value={this.state.infoUser.nomeUser} id='nomeUser' onChange={this.atualizaInfo}/>
                        </span>
                        <div className='row col-12 m-0'>
                            <span className='col-3 ps-0 mt-3'>
                                <p className='subtituloSeccaoPagina'>Idade <span className='obrigatorio'>*</span></p>
                                <input type="number" min="1" value={this.state.infoUser.idade} id='idade' onChange={this.atualizaInfo} className='inputsForms w-100'/>
                            </span>
                        </div>

                        <div className='row col-12 m-0'>
                            <span className='col-6 row m-0 divMargem'>
                                <p className='subtituloSeccaoPagina mt-3 p-0'>Notificações que o utilizador não quer receber</p>
                                <BuscaTipologias funcao={this.handleTipologia}/>
                            </span>
                        </div>

                        <span className='col-12 m-0'>
                            <p className='tituloSeccaoPagina mt-3'>Informações Adicionais</p>
                            <textarea rows="4" className='inputsForms w-100' value={this.state.infoUser.infoAdicional} id='infoAdicional' onChange={this.atualizaInfo}/>
                        </span>

                        <span className='col-12 m-0'>
                            <p className='tituloSeccaoPagina mt-3 mb-1'>Casa</p>
                            <div className='row col-12 m-0'>
                                <span className='col-6 row m-0 divMargem'>
                                    <p className='subtituloSeccaoPagina p-0'>Adicionar a casa</p>
                                </span>
                                <span className='col-6 row m-0 divMargem'>
                                    <p className='subtituloSeccaoPagina p-0'>Casa escolhida</p>
                                </span>
                            </div>

                            <div className='row col-12 m-0'>
                                <div className='col-6 ms-0 ps-0'>
                                    <ListaCasasPesquisa/>
                                </div>
                                <div className='col-6 ms-0 ps-0'>
                                    <p className='subtituloSeccaoCasa p-0'>Casa do Rui</p>
                                    <p className='cidadeSeccaoCasa p-0'>Trofa, Porto</p>
                                    <span>
                                        <p>Membros:</p>
                                        <p>Rui Monteiro</p>
                                        <p>Luísa Monteiro</p>
                                        <p>Tânia Monteiro</p>
                                    </span>
                                </div>
                            </div>
                        </span>
                        
                        <span className='row m-0 mt-2 justify-content-end'>
                            <p className='col-2 indicaObrigatorio'>*Obrigatório</p>
                        </span>
                        <SubmitButton params={this.state} openModal={this.onOpen} tipoForm="User"/>
                    </div>
                </div>
                <SuccessModal show={this.state.mostraModal} onHide={this.onClose} tiponotif="CriarUtilizador"/>
            </div>
        )
    } 
}

export default CreateUser;
import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown} from 'react-bootstrap';
import SuccessModal from '../../Components/Modal/SuccessModal';
import SubmitButton from '../../Components/Geral/SubmitButton';
import { BuscaTipologias } from '../../Components/Geral/Hooks';

const arrayDias = {
    segunda: false,
    terca: false,
    quarta: false,
    quinta: false,
    sexta: false,
    sabado: false,
    domingo: false,
    nome: "",
    horas: []
}

class CreateUser extends React.Component {

    constructor(props){
        super(props);
        this.state={
            mostraSaude: [],
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

    adicionaSaude = () => {
        let arrayVazio = [...this.state.mostraSaude];
        arrayVazio.push(arrayDias);
        this.setState({
            mostraSaude: arrayVazio
        })
    }

    retiraSaude = () => {
        let novoArray = this.state.mostraSaude.splice(-1);
        this.setState({
            mostraSaude: [
                ...novoArray
            ]
        })
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
                distrito: e
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

    atualizaNomeMedicamento = (e) => {
        let arrayAnterior = [...this.state.mostraSaude];
        let objectNew = {
            ...this.state.mostraSaude[e.currentTarget.id],
            nome: e.currentTarget.value
        }
        arrayAnterior[e.currentTarget.id] = objectNew
        this.setState({
            mostraSaude: arrayAnterior
        })
    }

    atualizaHorasMedicamento = (e) => {
        const str = e.target.id
        const first = str.match(/\d+/)[0];
        const second = str.charAt(str.length - 1);
        let arrayAnterior = [...this.state.mostraSaude];
        let arrayHoras = this.state.mostraSaude[second].horas;

        if(arrayHoras.length === 0) {
            arrayHoras.push(e.target.value);
        } else if(arrayHoras.length === first) {
            arrayHoras.push(e.target.value);
        } else {
            arrayHoras[first] = e.target.value;
        }
        arrayDias.horas = [];
        let objectNew = {
            ...this.state.mostraSaude[second],
            horas: arrayHoras
        }
        arrayAnterior[second] = objectNew
        this.setState({
            mostraSaude: arrayAnterior
        })
    }

    handleTipologia = (valor) => {
        console.log(valor.target.value)
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

    adicionaHorasMedicamento = (valor) => {
        let arrayAnterior = [...this.state.mostraSaude];
        let arrayHoras = this.state.mostraSaude[valor].horas;
        arrayHoras.push('');
        arrayDias.horas = [];
        let objectNew = {
            ...this.state.mostraSaude[valor],
            horas: arrayHoras
        }
        arrayAnterior[valor] = objectNew
        this.setState({
            mostraSaude: arrayAnterior
        })
    }
    
    removeHorasMedicamento = (valor) => {
        let arrayAnterior = [...this.state.mostraSaude];
        let arrayHoras = this.state.mostraSaude[valor].horas;
        arrayHoras.pop();
        arrayDias.horas = [];
        let objectNew = {
            ...this.state.mostraSaude[valor],
            horas: arrayHoras
        }
        arrayAnterior[valor] = objectNew
        this.setState({
            mostraSaude: arrayAnterior
        })
    }

    render(){
        return(
            <div>
                {console.log(this.state)}
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Criar Utilizador" detalhe="sim" apagaMuda="nao" criaUser="sim"/>
                    <div className='row m-0'>
                        <h1 className='tituloSeccaoPagina p-0'>Informação Geral</h1>
                        <p className='subtituloSeccaoPagina p-0'>Nome do Utilizador <span className='obrigatorio'>*</span></p>
                        <input type="text" className='inputsForms' value={this.state.infoUser.nomeUser} id='nomeUser' onChange={this.atualizaInfo}/>

                        <div className='row col-12 p-0 m-0'>
                            <span className='col-3 ps-0 mt-3'>
                                <p className='subtituloSeccaoPagina p-0'>Idade <span className='obrigatorio'>*</span></p>
                                <input type="number" min="1" value={this.state.infoUser.idade} id='idade' onChange={this.atualizaInfo} className='inputsForms w-100'/>
                            </span>
                            <span className='col-4 p-0 mt-3'>
                                <p className='subtituloSeccaoPagina p-0'>ID da box <span className='obrigatorio'>*</span></p>
                                <input type="text" value={this.state.infoUser.idBox} id='idBox' onChange={this.atualizaInfo} className='inputsForms w-100'/>
                            </span>
                        </div>

                        <div className='row col-12 p-0 m-0'>
                            <span className='col-3 divMargem'>
                                <p className='subtituloSeccaoPagina p-0 mt-3'>Distrito <span className='obrigatorio'>*</span></p>
                                <Dropdown value={this.state.infoUser.distrito} onSelect={this.atualizaDistrito}>
                                    <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                        Distrito
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdownFiltro'>
                                        <Dropdown.Item eventKey='abc'>10</Dropdown.Item>
                                        <Dropdown.Item eventKey='def'>20</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </span>
                            <span className='col-3 divMargem'>
                                <p className='subtituloSeccaoPagina p-0 mt-3'>Concelho <span className='obrigatorio'>*</span></p>
                                <Dropdown value={this.state.infoUser.concelho} onSelect={this.atualizaConcelho}>
                                    <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                        Concelho
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdownFiltro'>
                                        <Dropdown.Item eventKey="10">10</Dropdown.Item>
                                        <Dropdown.Item eventKey='20'>20</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </span>
                        </div>

                        <div className='row col-12 p-0 m-0'>
                            <span className='col-6 row m-0 p-0 divMargem'>
                                <p className='subtituloSeccaoPagina p-0 mt-3'>Notificações que o utilizador não quer receber</p>
                                <BuscaTipologias funcao={this.handleTipologia}/>
                            </span>
                        </div>

                        <p className='tituloSeccaoPagina p-0 mt-3 mb-2'>Saúde</p>
                        <span className='col-3 divMargem'>
                            <Button className='w-100' style={this.state.mostraSaude.length !== 0 ? {display: "none"} : {display: "block"}} variant="flat" onClick={() => this.adicionaSaude()}>Adicionar medicamento</Button>
                        </span>

                        <div className='row p-0 m-0' style={this.state.mostraSaude.length === 0 ? {display: "none"} : {display: "block"}}>
                            {this.state.mostraSaude.map((elemento, index) => {
                                return(
                                <>
                                <span className='col-12 p-0'>
                                    {index >= 1 ? 
                                    <p className='subtituloSeccaoPagina p-0 mt-2'>Nome do medicamento</p>
                                    :
                                    <p className='subtituloSeccaoPagina p-0'>Nome do medicamento</p>
                                    }
                                    <input type="text" className='inputsForms w-100' id={index} value={this.state.mostraSaude[index]["nome"]} onChange={this.atualizaNomeMedicamento}/>
                                </span>

                                <span className='col-12 p-0 mt-3'>
                                    <p className='subtituloSeccaoPagina p-0 mt-3'>Dias da semana</p>
                                    <span className='row m-0 justify-content-center'>
                                        <span className='col-3'>
                                            <Button className='w-100' onClick={() => this.alteraCor(index, "segunda")} variant={this.state.mostraSaude[index]["segunda"] === false ? "flat2" : "flat3"}>Segunda-Feira</Button>
                                        </span>
                                        <span className='col-3'>
                                            <Button className='w-100' onClick={() => this.alteraCor(index, "terca")} variant={this.state.mostraSaude[index]["terca"] === false ? "flat2" : "flat3"}>Terça-Feira</Button>
                                        </span>
                                        <span className='col-3'>
                                            <Button className='w-100' onClick={() => this.alteraCor(index, "quarta")} variant={this.state.mostraSaude[index]["quarta"] === false ? "flat2" : "flat3"}>Quarta-Feira</Button>
                                        </span>
                                        <span className='col-3'>
                                            <Button className='w-100' onClick={() => this.alteraCor(index, "quinta")} variant={this.state.mostraSaude[index]["quinta"] === false ? "flat2" : "flat3"}>Quinta-Feira</Button>
                                        </span>
                                        <span className='col-3 my-2'>
                                            <Button className='w-100' onClick={() => this.alteraCor(index, "sexta")} variant={this.state.mostraSaude[index]["sexta"] === false ? "flat2" : "flat3"}>Sexta-Feira</Button>
                                        </span>
                                        <span className='col-3 my-2'>
                                            <Button className='w-100' onClick={() => this.alteraCor(index, "sabado")} variant={this.state.mostraSaude[index]["sabado"] === false ? "flat2" : "flat3"}>Sábado</Button>
                                        </span>
                                        <span className='col-3 my-2'>
                                            <Button className='w-100' onClick={() => this.alteraCor(index, "domingo")} variant={this.state.mostraSaude[index]["domingo"] === false ? "flat2" : "flat3"}>Domingo</Button>
                                        </span>
                                    </span>
                                </span>
                                {
                                    this.state.mostraSaude[index].horas.length === 0 ?
                                    <span className='row m-0 col-3 divMargem'>
                                        <p className='subtituloSeccaoPagina p-0 mt-2'>Hora do dia</p>
                                        <span className='col-6 p-0 me-3 h-100'>
                                            <input type="time" id={`horas${index}`} className='inputsForms without_ampm w-100' onChange={this.atualizaHorasMedicamento} style={{height: "37px"}}/>
                                        </span>
                                        <span className='col-2 p-0'>
                                            <Button className='w-100' variant="flat">+</Button>
                                        </span>
                                    </span>
                                    :
                                    <>
                                    <span className='row m-0 col-3 divMargem'>
                                        <p className='subtituloSeccaoPagina p-0 mt-2'>Hora do dia</p>
                                    {this.state.mostraSaude[index].horas.map((elem, i) => {
                                        return(
                                            <>
                                                <span className={i === 0 ? 'col-6 p-0 me-3 h-100' : 'col-6 p-0 me-3 mt-2 h-100'}>
                                                    <input type="time" id={`horas${i}n${index}`} value={this.state.mostraSaude[index].horas[i]} className='inputsForms without_ampm w-100' onChange={this.atualizaHorasMedicamento} style={{height: "37px"}}/>
                                                </span>
                                                <span className={i === 0 ? 'col-2 p-0' : 'col-2 mt-2 p-0'}>
                                                    <Button className='w-100' variant="flat" onClick={() => this.adicionaHorasMedicamento(index)}>+</Button>
                                                </span>
                                                {i === 0 ? 
                                                <></>
                                                :
                                                <span className='col-2 mt-2 ms-2 p-0'>
                                                    <Button className='w-100' variant="flat" onClick={() => this.removeHorasMedicamento(index)}>-</Button>
                                                </span>
                                                }
                                            </>
                                        )
                                    })}
                                    </span>
                                    </>
                                }
                                </>
                            )
                            })}

                            <span className='row m-0 divMargem mt-3'>
                                <span className='col-2 divMargem deleteBtn'>
                                    <Button className='w-100' variant="danger" onClick={() => this.retiraSaude()}>Eliminar</Button>
                                </span>
                                <span className='col-3 divMargem'>
                                    <Button className='w-100' variant="flat" onClick={() => this.adicionaSaude()}>Adicionar medicamento</Button>
                                </span>
                            </span>
                        </div>

                        <p className='tituloSeccaoPagina p-0 mt-3'>Informações Adicionais</p>
                        <textarea rows="4" className='inputsForms' value={this.state.infoUser.infoAdicional} id='infoAdicional' onChange={this.atualizaInfo}/>
                        <span className='row m-0 mt-2 p-0 justify-content-end'>
                            <p className='col-2 p-0 indicaObrigatorio'>*Obrigatório</p>
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
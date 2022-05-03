import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown} from 'react-bootstrap';
import SuccessModal from '../../Components/Modal/SuccessModal';

class EditUser extends React.Component {

    constructor(props){
        super(props);
        this.state={
            mostraSaude: 0,
            mostraModal: false
        }
    }

    adicionaSaude = () => {
        this.setState({
            mostraSaude: this.state.mostraSaude + 1
        })
    }

    retiraSaude = () => {
        this.setState({
            mostraSaude: this.state.mostraSaude - 1
        })
    }

    onOpen = () => this.setState({mostraModal: true});
    onClose = () => this.setState({mostraModal: false});

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Editar Utilizador" detalhe="sim" apagaMuda="nao"/>
                    <div className='row m-0'>
                        <h1 className='tituloSeccaoPagina p-0'>Informação Geral</h1>
                        <p className='subtituloSeccaoPagina p-0'>Nome do utilizador <span className='obrigatorio'>*</span></p>
                        <input type="text" className='inputsForms'/>

                        <div className='row col-12 p-0 m-0'>
                            <span className='col-3 p-0 mt-3'>
                                <p className='subtituloSeccaoPagina p-0'>Idade <span className='obrigatorio'>*</span></p>
                                <input type="number" className='inputsForms'/>
                            </span>
                        </div>

                        <div className='row col-12 p-0 m-0'>
                            <span className='col-3 divMargem'>
                                <p className='subtituloSeccaoPagina p-0 mt-3'>Distrito <span className='obrigatorio'>*</span></p>
                                <Dropdown>
                                    <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                        Distrito
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdownFiltro'>
                                        <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">20</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </span>
                            <span className='col-3 divMargem'>
                                <p className='subtituloSeccaoPagina p-0 mt-3'>Concelho <span className='obrigatorio'>*</span></p>
                                <Dropdown>
                                    <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                        Concelho
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdownFiltro'>
                                        <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">20</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </span>
                        </div>

                        <p className='tituloSeccaoPagina p-0 mt-3 mb-2'>Saúde</p>
                        <span className='col-3 divMargem'>
                            <Button className='w-100' style={this.state.mostraSaude === 1 ? {display: "none"} : {display: "block"}} variant="flat" onClick={() => this.adicionaSaude()}>Adicionar medicamento</Button>
                        </span>

                        <div className='row p-0 m-0' style={this.state.mostraSaude === 0 ? {display: "none"} : {display: "block"}}>
                            <span className='col-12 p-0'>
                                <p className='subtituloSeccaoPagina p-0'>Nome do medicamento</p>
                                <input type="text" className='inputsForms w-100'/>
                            </span>

                            <span className='col-12 p-0 mt-3'>
                                <p className='subtituloSeccaoPagina p-0 mt-3'>Dias da semana</p>
                                <span className='row m-0 justify-content-center'>
                                    <span className='col-3'>
                                        <Button className='w-100' variant="flat2">Segunda-Feira</Button>
                                    </span>
                                    <span className='col-3'>
                                        <Button className='w-100' variant="flat2">Terça-Feira</Button>
                                    </span>
                                    <span className='col-3'>
                                        <Button className='w-100' variant="flat2">Quarta-Feira</Button>
                                    </span>
                                    <span className='col-3'>
                                        <Button className='w-100' variant="flat2">Quinta-Feira</Button>
                                    </span>
                                    <span className='col-3 my-2'>
                                        <Button className='w-100' variant="flat2">Sexta-Feira</Button>
                                    </span>
                                    <span className='col-3 my-2'>
                                        <Button className='w-100' variant="flat2">Sábado</Button>
                                    </span>
                                    <span className='col-3 my-2'>
                                        <Button className='w-100' variant="flat2">Domingo</Button>
                                    </span>
                                </span>
                            </span>

                            <span className='row m-0 col-3 divMargem'>
                                <p className='subtituloSeccaoPagina p-0 mt-3'>Hora do dia</p>
                                <Dropdown className='col-10 divMargem'>
                                    <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                        18:30
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdownFiltro'>
                                        <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">20</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <span className='col-2 p-0'>
                                    <Button className='w-100' variant="flat">+</Button>
                                </span>
                            </span>

                            <span className='row m-0 divMargem mt-3'>
                                <span className='col-2 divMargem deleteBtn'>
                                    <Button className='w-100' variant="danger" onClick={() => this.retiraSaude()}>Eliminar</Button>
                                </span>
                                <span className='col-3 divMargem'>
                                    <Button className='w-100' variant="flat">Adicionar medicamento</Button>
                                </span>
                            </span>
                        </div>

                        <p className='tituloSeccaoPagina p-0 mt-3'>Informações Adicionais</p>
                        <textarea rows="4" className='inputsForms'/>
                        <span className='row m-0 mt-2 p-0 justify-content-end'>
                            <p className='col-2 p-0 indicaObrigatorio'>*Obrigatório</p>
                        </span>
                        <span className='row m-0 p-0 justify-content-end'>
                            <Button className='col-2' variant='flat' onClick={() => this.onOpen()}>Confirmar Alterações</Button>
                        </span>
                    </div>
                </div>
                <SuccessModal show={this.state.mostraModal} onHide={this.onClose} tiponotif="Editar"/>
            </div>
        )
    } 
}

export default EditUser;
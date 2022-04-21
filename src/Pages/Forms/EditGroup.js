import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown} from 'react-bootstrap';
import UserCards from '../../Components/Cards/UserCards';
import SuccessModal from '../../Components/Modal/SuccessModal';

class EditGroup extends React.Component {

    constructor(props){
        super(props);
        this.state={
            mostraSaude: 0,
            mostraModal: false
        }
    }

    onOpen = () => this.setState({mostraModal: true});
    onClose = () => this.setState({mostraModal: false});

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Editar Grupo" detalhe="sim" apagaMuda="nao"/>
                    <div className='row m-0'>
                        <h1 className='tituloSeccaoPagina p-0'>Informação geral</h1>
                        <p className='subtituloSeccaoPagina p-0'>Nome do grupo <span className='obrigatorio'>*</span></p>
                        <input type="text" className='inputsForms'/>

                        <p className='subtituloSeccaoPagina p-0 mt-3'>Descrição <span className='obrigatorio'>*</span></p>
                        <textarea rows="4" className='inputsForms'/>

                        <div className='row col-12 p-0 m-0'>
                            <span className='col-3 p-0 mt-3 me-3'>
                                <p className='subtituloSeccaoPagina p-0'>Idade</p>
                                <input type="number" className='inputsForms w-100'/>
                            </span>
                            <span className='col-3 divMargem'>
                                <p className='subtituloSeccaoPagina p-0 mt-3'>Distrito</p>
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
                                <p className='subtituloSeccaoPagina p-0 mt-3'>Concelho</p>
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

                        <h1 className='tituloSeccaoPagina p-0 mt-3 mb-2'>Membros do grupo <span className='obrigatorio'>*</span></h1>
                        <input type="text" placeholder="Pesquisa" className='barraPesquisa col-3'/>
                        <span className='row m-0'>
                            <UserCards pagina="criaGrupo"/>
                        </span>
                        <span className='row m-0 mt-2 p-0 justify-content-end'>
                            <p className='col-2 p-0 indicaObrigatorio'>*Obrigatório</p>
                        </span>
                        <span className='row m-0 p-0 justify-content-end'>
                            <Button className='col-2' variant='flat' onClick={() => this.onOpen()}>Confirmar Alterações</Button>
                        </span>
                    </div>
                </div>
                <SuccessModal show={this.state.mostraModal} onHide={this.onClose} tipoNotif="Editar"/>
            </div>
        )
    } 
}

export default EditGroup;
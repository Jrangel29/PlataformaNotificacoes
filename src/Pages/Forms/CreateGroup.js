import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown} from 'react-bootstrap';
import UserCards from '../../Components/Cards/UserCards';
import SuccessModal from '../../Components/Modal/SuccessModal';
import SubmitButton from '../../Components/Geral/SubmitButton';

class CreateGroup extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mostraModal: false,
            infoGroup: {
                nomeGroup: "",
                idade: "",
                descricao: "",
                distrito: "",
                membros: []
            }
        }
    }

    onOpen = () => this.setState({mostraModal: true});
    onClose = () => this.setState({mostraModal: false});

    atualizaInfo = (e) => {
        this.setState({
            infoGroup: {
                ...this.state.infoGroup,
                [e.currentTarget.id]: e.currentTarget.value
            }
        })
    }

    atualizaDistrito = (e) => {
        this.setState({
            infoGroup: {
                ...this.state.infoGroup,
                distrito: e
            }
        })
    }

    atualizaConcelho = (e) => {
        this.setState({
            infoGroup: {
                ...this.state.infoGroup,
                concelho: e
            }
        })
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Criar Grupo" detalhe="sim" apagaMuda="nao"/>
                    <div className='row m-0'>
                        <h1 className='tituloSeccaoPagina p-0'>Informação geral</h1>
                        <p className='subtituloSeccaoPagina p-0'>Nome do grupo <span className='obrigatorio'>*</span></p>
                        <input type="text" className='inputsForms' value={this.state.infoGroup.nomeGroup} id='nomeGroup' onChange={this.atualizaInfo}/>

                        <p className='subtituloSeccaoPagina p-0 mt-3'>Descrição <span className='obrigatorio'>*</span></p>
                        <textarea rows="4" className='inputsForms' value={this.state.infoGroup.descricao} id='descricao' onChange={this.atualizaInfo}/>

                        <div className='row col-12 p-0 m-0'>
                            <span className='col-2 p-0 mt-3 me-3'>
                                <p className='subtituloSeccaoPagina p-0'>Idade</p>
                                <input type="number" min="1" className='inputsForms w-100' value={this.state.infoGroup.idade} id='idade' onChange={this.atualizaInfo}/>
                            </span>
                            <span className='col-3 divMargem'>
                                <p className='subtituloSeccaoPagina p-0 mt-3'>Distrito</p>
                                <Dropdown value={this.state.infoGroup.distrito} onSelect={this.atualizaDistrito}>
                                    <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                        Distrito
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdownFiltro'>
                                        <Dropdown.Item eventKey="10">10</Dropdown.Item>
                                        <Dropdown.Item eventKey="20">20</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </span>
                            <span className='col-3 divMargem'>
                                <p className='subtituloSeccaoPagina p-0 mt-3'>Concelho</p>
                                <Dropdown value={this.state.infoGroup.concelho} onSelect={this.atualizaConcelho}>
                                    <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                        Concelho
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdownFiltro'>
                                        <Dropdown.Item eventKey="10">10</Dropdown.Item>
                                        <Dropdown.Item eventKey="20">20</Dropdown.Item>
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
                        <SubmitButton params={this.state} openModal={this.onOpen} tipoForm="Grupo"/>
                    </div>
                </div>
                <SuccessModal show={this.state.mostraModal} onHide={this.onClose} tiponotif="CriarGrupo"/>
            </div>
        )
    } 
}

export default CreateGroup;
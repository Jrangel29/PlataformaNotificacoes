import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown} from 'react-bootstrap';
import UserCards from '../../Components/Cards/UserCards';
import NotificationTimeSelection from '../../Components/Forms/NotificationTimeSelection';
import SuccessModal from '../../Components/Modal/SuccessModal';

class EditNotification extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tipologia: "Agenda",
            categoriaInfo: "Bom Dia",
            terceiraCategoriaSaude: "Inatividade",
            envioNotif:{
                tipoNotif: "Envio Único",
                periodicidade: "Semanal"
            },
            mostraModal: false
        }
    }

    alteraFormulario = (valor, subcategoria, terceira) => {
        
        if(terceira !== undefined){
            this.setState({
                tipologia: valor,
                categoriaInfo: subcategoria,
                terceiraCategoriaSaude: terceira
            })
        }
        if(subcategoria === "nao"){
            this.setState({
                tipologia: valor
            })
        }
        if(subcategoria === "Bom Dia" || subcategoria === "Boa Noite" || subcategoria === "Genérica" || subcategoria === "Personalizada"){
            this.setState({
                tipologia: valor,
                categoriaInfo: subcategoria
            })
        }
    }

    alteraEnvio = (valor, periodo) => {
        if(periodo !== undefined){
            this.setState({
                envioNotif:{
                    tipoNotif: valor,
                    periodicidade: periodo
                }
            })
        } else {
            this.setState({
                envioNotif:{
                    tipoNotif: valor,
                    periodicidade: this.state.envioNotif.periodicidade
                }
            })
        }
    }

    onOpen = () => this.setState({mostraModal: true});
    onClose = () => this.setState({mostraModal: false});

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Editar Notificação" detalhe="sim" apagaMuda="nao"/>
                    <div className='row m-0'>
                        <h1 className='tituloSeccaoPagina p-0'>Recetores da notificação</h1>
                        <p className='subtituloSeccaoPagina p-0'>Tipo de recetor</p>
                        <Dropdown className='col-3 p-0 m-0'>
                            <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                Recetores Individuais
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='dropdownFiltro'>
                                <Dropdown.Item href="#/action-1">Recetores Individuais</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Grupos</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <h1 className='subtituloSeccaoPagina p-0 mt-3 mb-2'>Escolha de recetores <span className='obrigatorio'>*</span></h1>
                        <input type="text" placeholder="Pesquisa" className='barraPesquisa col-3'/>
                        <span className='row m-0'>
                            <UserCards pagina="criaGrupo"/>
                        </span>
                    </div>

                    <div className='row m-0 mt-3'>
                        <h1 className='tituloSeccaoPagina p-0'>Escolha de template</h1>
                        <Dropdown className='col-3 p-0 m-0'>
                            <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                Recetores Individuais
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='dropdownFiltro'>
                                <Dropdown.Item href="#/action-1">Recetores Individuais</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Grupos</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div className='row m-0 mt-3'>
                        <h1 className='tituloSeccaoPagina p-0'>Tipologia de notificação</h1>
                        <span className='col-3 p-0 me-3'>
                            <p className='subtituloSeccaoPagina p-0'>Categoria principal <span className='obrigatorio'>*</span></p>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                    {this.state.tipologia}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => this.alteraFormulario("Agenda", "nao")}>Agenda</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraFormulario("Conteúdo", "nao")}>Conteúdo</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraFormulario("Informação", "Bom Dia")}>Informação</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraFormulario("Saúde", "Genérica")}>Saúde</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraFormulario("Serviços", "nao")}>Serviços</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraFormulario("Personalizado", "nao")}>Personalizado</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </span>

                        <span className='col-2 p-0 me-3' style={this.state.tipologia === "Informação" || this.state.tipologia === "Saúde" ? {display: "block"} : {display: "none"}}>
                            <p className='subtituloSeccaoPagina p-0'>Subcategoria</p>
                            {this.state.tipologia === "Informação" ?
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                    {this.state.categoriaInfo}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => this.alteraFormulario("Informação", "Bom Dia")}>Bom Dia</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraFormulario("Informação", "Boa Noite")}>Boa Noite</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            :
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                    {this.state.categoriaInfo}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => this.alteraFormulario("Saúde", "Genérica")}>Genérica</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraFormulario("Saúde", "Personalizada")}>Personalizada</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            }
                        </span>

                        <span className='col-3 p-0' style={this.state.tipologia === "Saúde" && this.state.categoriaInfo === "Genérica" ? {display: "block"} : {display: "none"}}>
                            <p className='subtituloSeccaoPagina p-0'>Trigger</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                    {this.state.terceiraCategoriaSaude}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => this.alteraFormulario("Saúde", "Genérica", "Inatividade")}>Inatividade</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraFormulario("Saúde", "Genérica", "Ingestão de Líquidos")}>Ingestão de Líquidos</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </span>
                    </div>

                    <div className='row m-0 mt-3'>
                        <h1 className='tituloSeccaoPagina p-0'>Tipologia de notificação</h1>
                        <p className='subtituloSeccaoPagina p-0'>Título da notificação principal <span className='obrigatorio'>*</span></p>
                        <input type="text" className='inputsForms' maxLength="50"/>
                        <span className='row col-12 mx-0 mt-2 p-0'>
                            <p className='subtituloSeccaoPagina p-0'>Título do pop-up secundário <span className='obrigatorio'>*</span></p>
                            <input type="text" className='inputsForms'/>
                            <p className='subtituloSeccaoPagina mt-2 p-0'>Mensagem informativa do pop-up secundário <span className='obrigatorio'>*</span></p>
                            <textarea rows="4" className='inputsForms'/>
                        </span>
                    </div>

                    <NotificationTimeSelection parametros={this.state} alterarEnvio={this.alteraEnvio}/>

                    {/*<div className='row m-0 mt-2'>
                        <span className='row col-12 mx-0 p-0'>
                            <p className='subtituloSeccaoPagina p-0'>Imagem de fundo</p>
                            <span className='col-2 p-0'>
                                <Button className='w-100 py-3' variant="flat">
                                    <img src={PlusImage}/>
                                </Button>
                            </span>
                        </span>
                        </div>*/}
                    
                    <div className='row m-0 mt-3'>
                        <h1 className='tituloSeccaoPagina p-0'>Pré-visualização da notificação</h1>
                        
                    </div>
                    <span className='row m-0 mt-2 p-0 justify-content-end'>
                        <p className='col-2 p-0 indicaObrigatorio'>*Obrigatório</p>
                    </span>
                    <span className='row m-0 p-0 justify-content-end'>
                        <Button className='col-2' variant='flat' onClick={() => this.onOpen()}>Confirmar Alterações</Button>
                    </span>
                </div>
                <SuccessModal show={this.state.mostraModal} onHide={this.onClose} tiponotif="Editar"/>
            </div>
        )
    } 
}

export default EditNotification;
import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown} from 'react-bootstrap';
import NotificationTimeSelection from '../../Components/Forms/NotificationTimeSelection';
import SuccessModal from '../../Components/Modal/SuccessModal';
import iconeAgenda from '../../Images/iconeAgenda.png';

class CreateTemplate extends React.Component {

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
            mostraModal: false,
            segunda: false,
            terca: false,
            quarta: false,
            quinta: false,
            sexta: false,
            sabado: false,
            domingo: false,
            textoPrev: ""
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

    alteraCor = (dia) => {
        this.setState({
            [dia]: !this.state[dia]
        })
    }

    alteraTextoPreview = (e) => {
        this.setState({
            textoPrev: e.currentTarget.value
        })
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Criar Template" detalhe="sim" apagaMuda="nao"/>
                    <div className='row m-0'>
                        <h1 className='tituloSeccaoPagina p-0'>Título do Template <span className='obrigatorio'>*</span></h1>
                        <input type="text" className='inputsForms' maxLength="50"/>
                    </div>

                    <div className='row m-0 mt-3'>
                        <h1 className='tituloSeccaoPagina p-0'>Tipologia de notificação</h1>
                        <span className='col-3 p-0 me-3'>
                            <p className='subtituloSeccaoPagina p-0'>Categoria principal</p>
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
                        <p className='subtituloSeccaoPagina p-0'>Título da notificação principal</p>
                        <input type="text" className='inputsForms' onChange={this.alteraTextoPreview} maxLength="50"/>
                        <span className='row col-12 mx-0 mt-2 p-0'>
                            <p className='subtituloSeccaoPagina p-0'>Título do pop-up secundário</p>
                            <input type="text" className='inputsForms'/>
                            <p className='subtituloSeccaoPagina mt-2 p-0'>Mensagem informativa do pop-up secundário</p>
                            <textarea rows="4" className='inputsForms'/>
                        </span>
                    </div>

                    <NotificationTimeSelection parametros={this.state} alterarEnvio={this.alteraEnvio} mudaDia={this.alteraCor}/>

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
                    
                    <div className='m-0 mt-3'>
                        <h1 className='tituloSeccaoPagina p-0'>Pré-visualização da notificação</h1>
                        <div className='w-100 divPreview'>
                            <span className='notiPreview'>
                            <img src={iconeAgenda} className="imgPreview"/>
                            <p className='textPreview'>{this.state.textoPrev}</p>
                            </span>
                        </div>
                    </div>
                    <span className='row m-0 mt-2 p-0 justify-content-end'>
                        <p className='col-2 p-0 indicaObrigatorio'>*Obrigatório</p>
                    </span>
                    <span className='row m-0 p-0 justify-content-end'>
                        <Button className='col-2' variant='flat' onClick={() => this.onOpen()}>Criar Template</Button>
                    </span>
                </div>
                <SuccessModal show={this.state.mostraModal} onHide={this.onClose} tiponotif="CriarTemplate"/>
            </div>
        )
    } 
}

export default CreateTemplate;
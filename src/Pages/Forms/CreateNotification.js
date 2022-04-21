import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown} from 'react-bootstrap';
import UserCards from '../../Components/Cards/UserCards';
import GroupCards from '../../Components/Cards/GroupCards';
import NotificationTimeSelection from '../../Components/Forms/NotificationTimeSelection';
import SuccessModal from '../../Components/Modal/SuccessModal';
import iconeAgenda from '../../Images/iconeAgenda.png';
import iconeConteudo from '../../Images/iconeConteudo.png';
import iconeInfo from '../../Images/iconeInfo.png';
import iconeSaude from '../../Images/iconeSaude.png';
import iconeServico from '../../Images/iconeServico.png';
import SubmitButton from '../../Components/Geral/SubmitButton';

class CreateNotification extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tipologia: "Agenda",
            categoriaInfo: "",
            terceiraCategoriaSaude: "",
            envioNotif: {
                tipoNotif: "Envio Único",
                periodicidade: ""
            },
            recetores: "Individuais",
            mostraModal: false,
            dias: {
                segunda: false,
                terca: false,
                quarta: false,
                quinta: false,
                sexta: false,
                sabado: false,
                domingo: false
            },
            tituloNotif: "",
            paramsPersonalizado: {
                popupSecundario: "Não",
                usaIcone: "Não",
                icone: "Agenda",
                momentoEnvio: "Agora"
            },
            subtituloNotif: "",
            descricaoNotif: ""
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
            dias: {
                ...this.state.dias,
                [dia]: !this.state.dias[dia]
            }
        })
    }

    alteraTexto = (e) => {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    alteraPopup = () => {
        if(this.state.paramsPersonalizado.popupSecundario === "Não"){
            this.setState({
                paramsPersonalizado:{
                    ...this.state.paramsPersonalizado,
                    popupSecundario: "Sim"
                }
            })
        } else {
            this.setState({
                paramsPersonalizado:{
                    ...this.state.paramsPersonalizado,
                    popupSecundario: "Não"
                }
            })
        }
    }

    alteraIcone = (valor, tipo) => {
        if(valor === "icone") {
            this.setState({
                paramsPersonalizado:{
                    ...this.state.paramsPersonalizado,
                    icone: tipo,
                }
            })
        } else if(valor === "temIcone" || this.state.paramsPersonalizado.usaIcone === "Não"){
            this.setState({
                paramsPersonalizado:{
                    ...this.state.paramsPersonalizado,
                    usaIcone: "Sim",
                }
            })
        } else {
            this.setState({
                paramsPersonalizado:{
                    ...this.state.paramsPersonalizado,
                    usaIcone: "Não",
                }
            })
        }
    }

    alteraMomento = (valor) => {
        this.setState({
            paramsPersonalizado:{
                ...this.state.paramsPersonalizado,
                momentoEnvio: valor
            }
        })
    }

    escolheRecetores = (e) => {
        if(e === "Individuais") {
            this.setState({
                recetores: "Individuais"
            })
        } else {
            this.setState({
                recetores: "Grupos"
            })
        }
    }

    render(){
        return(
            <div>
                {console.log(this.state)}
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Criar Notificação" detalhe="sim" apagaMuda="nao"/>
                    <div className='row m-0'>
                        <h1 className='tituloSeccaoPagina p-0'>Recetores da notificação</h1>
                        <p className='subtituloSeccaoPagina p-0'>Tipo de recetor</p>
                        <Dropdown className='col-3 p-0 m-0' onSelect={this.escolheRecetores}>
                            <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                Recetores Individuais
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='dropdownFiltro'>
                                <Dropdown.Item eventKey={"Individuais"}>Recetores Individuais</Dropdown.Item>
                                <Dropdown.Item eventKey={"Grupos"}>Grupos</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <h1 className='subtituloSeccaoPagina p-0 mt-3 mb-2'>Escolha de recetores <span className='obrigatorio'>*</span></h1>
                        <input type="text" placeholder="Pesquisa" className='barraPesquisa col-3'/>
                        <span className='row m-0'>
                            {this.state.recetores === "Individuais" ? 
                            <UserCards pagina="criaGrupo"/>
                            :
                            <GroupCards pagina="criaGrupo"/>
                            }
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
                                    <Dropdown.Item onClick={() => this.alteraFormulario("Saúde", "Genérica", "Inatividade")}>Saúde</Dropdown.Item>
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
                        <h1 className='tituloSeccaoPagina p-0'>Conteúdo da notificação</h1>
                        <p className='subtituloSeccaoPagina p-0'>Título da notificação principal <span className='obrigatorio'>*</span></p>
                        <input type="text" className='inputsForms' id='tituloNotif' value={this.state.tituloNotif} onChange={this.alteraTexto} maxLength="50"/>
                        {this.state.tipologia === "Personalizado" ?
                        <span className='col-3 p-0 mt-1'>
                            <p className='subtituloSeccaoPagina p-0'>Tem popup secundário?</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                    {this.state.paramsPersonalizado.popupSecundario}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => this.alteraPopup()}>Sim</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraPopup()}>Não</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </span>
                        :
                        <></>
                        }
                        {this.state.tipologia === "Personalizado" && this.state.paramsPersonalizado.popupSecundario === "Sim" || this.state.tipologia !== "Personalizado" ?
                        <span className='row col-12 mx-0 mt-2 p-0'>
                            <p className='subtituloSeccaoPagina p-0'>Título do pop-up secundário <span className='obrigatorio'>*</span></p>
                            <input type="text" className='inputsForms' id='subtituloNotif' value={this.state.subtituloNotif} onChange={this.alteraTexto} maxLength="50"/>
                            <p className='subtituloSeccaoPagina mt-2 p-0'>Mensagem informativa do pop-up secundário <span className='obrigatorio'>*</span></p>
                            <textarea rows="4" className='inputsForms' id='descricaoNotif' value={this.state.descricaoNotif} onChange={this.alteraTexto} maxLength="100"/>
                        </span>
                        :
                        <></>
                        }
                    </div>

                    <div className='row m-0 mt-2'>
                        {this.state.tipologia === "Personalizado" ?
                        <span className='col-2 p-0 me-2'>
                            <p className='subtituloSeccaoPagina p-0'>Usar ícone?</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                    {this.state.paramsPersonalizado.usaIcone}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => this.alteraIcone("temIcone")}>Sim</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraIcone("temIcone")}>Não</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </span>
                        :
                        <></>
                        }
                        {this.state.tipologia === "Personalizado" && this.state.paramsPersonalizado.usaIcone === "Sim" ?
                        <span className='col-3 p-0'>
                            <p className='subtituloSeccaoPagina p-0'>Ícone da notificação</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                    {this.state.paramsPersonalizado.icone}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => this.alteraIcone("icone", "Agenda")}>Agenda</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraIcone("icone", "Conteúdo")}>Conteúdo</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraIcone("icone", "Informação")}>Informação</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraIcone("icone", "Saúde")}>Saúde</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraIcone("icone", "Serviços")}>Serviços</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </span>
                        :
                        <></>
                        }
                    </div>

                    <NotificationTimeSelection parametros={this.state} alterarEnvio={this.alteraEnvio} mudaDia={this.alteraCor} mudaMomento={this.alteraMomento}/>

                    <div className='m-0 mt-3'>
                        <h1 className='tituloSeccaoPagina p-0'>Pré-visualização da notificação</h1>
                        <div className='w-100 divPreview'>
                            <span className='notiPreview'>
                            <img src={
                                this.state.tipologia === "Agenda" ?
                                iconeAgenda
                                :
                                this.state.tipologia === "Conteúdo" ?
                                iconeConteudo
                                :
                                this.state.tipologia === "Informação" ?
                                iconeInfo
                                :
                                this.state.tipologia === "Saúde" ?
                                iconeSaude
                                :
                                iconeServico
                                } className="imgPreview"/>
                            <p className='textPreview'>{this.state.tituloNotif}</p>
                            </span>
                        </div>
                    </div>
                    <span className='row m-0 mt-2 p-0 justify-content-end'>
                        <p className='col-2 p-0 indicaObrigatorio'>*Obrigatório</p>
                    </span>
                    <SubmitButton params={this.state} openModal={this.onOpen} tipoForm="Notification"/>
                </div>
                <SuccessModal show={this.state.mostraModal} onHide={this.onClose} tiponotif="CriarNotificação"/>
            </div>
        )
    } 
}

export default CreateNotification;
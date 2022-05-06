import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown, Collapse} from 'react-bootstrap';
import DownArrow from '../../Images/DownArrow.png';
import UserCards from '../../Components/Cards/UserCards';
import GroupCards from '../../Components/Cards/GroupCards';
import NotificationTimeSelection from '../../Components/Forms/NotificationTimeSelection';
import RespostasUser from '../../Components/Forms/RespostasUser';
import SuccessModal from '../../Components/Modal/SuccessModal';
import iconeAgenda from '../../Images/iconeAgenda.png';
import iconeConteudo from '../../Images/iconeConteudo.png';
import iconeInfo from '../../Images/iconeInfo.png';
import iconeSaude from '../../Images/iconeSaude.png';
import iconeServico from '../../Images/iconeServico.png';
import SubmitButton from '../../Components/Geral/SubmitButton';
import { BuscaTipologiasNotificacoes } from '../../Components/Forms/Hooks';

class CreateNotification extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mostraModal: false,
            recetores: "Individuais",
            tipologia: "Agenda",
            idTipologia: '',
            categoriaInfo: "",
            tituloNotif: "",
            popupSecundario: false,
            subtituloNotif: "",
            descricaoNotif: "",
            envioNotif: "Envio Único",
            horario: 'Bom Dia',
            diaUnico: '',
            hora: '',
            momentoUnico: 'Imediato',
            dias: {
                segunda: false,
                terca: false,
                quarta: false,
                quinta: false,
                sexta: false,
                sabado: false,
                domingo: false
            },
            paramsPersonalizado: {
                usaIcone: "Não",
                icone: "Agenda",
                momentoEnvio: "Agora"
            },
            colapsado: 0
        }
    }

    alteraFormulario = (valor, id, subcategoria) => {
        
        if(subcategoria === "nao"){
            this.setState({
                tipologia: valor,
                idTipologia: id
            })
        }
        if(subcategoria === "Dia e Hora"){
            this.setState({
                tipologia: valor,
                idTipologia: id,
                momentoUnico: subcategoria
            })
        }
        if(subcategoria === "Combustíveis" || subcategoria === "Greves" || subcategoria === "Farmácias de Serviço" || subcategoria === "Feriados"){
            this.setState({
                tipologia: valor,
                idTipologia: id,
                categoriaInfo: subcategoria
            })
        }
    }

    alteraEnvio = (valor, periodo) => {
        this.setState({
            envioNotif: valor,
            tipoNotif: periodo
        })
    }

    alteraHorario = (valor) => {
        this.setState({
            horario: valor
        })
    }

    alteraDiaUnico = (valor) => {
       const data = valor.toLocaleDateString();
        this.setState({
            diaUnico: data
        })
    }

    alteraHora = (valor) => {
        this.setState({
            hora: valor.target.value
        })
    }

    alteraMomentoUnico = (valor) => {
        this.setState({
            momentoUnico: valor
        })
    }

    onOpen = () => this.setState({mostraModal: true});
    onClose = () => this.setState({mostraModal: false});

    alteraDia = (dia) => {
        this.setState({
            dias: {
                ...this.state.dias,
                [dia.target.value]: !this.state.dias[dia.target.value]
            }
        })
    }

    alteraTexto = (e) => {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    alteraPopup = () => {
        this.setState({
            popupSecundario: !this.state.popupSecundario
        })
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

    mudaCollapse = (val) => {
        if(val !== this.state.colapsado) {
            this.setState({
                colapsado: val
            })
        } else {
            this.setState({
                colapsado: 0
            })
        }
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Criar Notificação" detalhe="sim" apagaMuda="nao"/>
                    <div className='row m-0'>
                        <div className='btn btnSeccao' onClick={() => this.mudaCollapse(1)}>
                            <h1 className='tituloSeccaoPaginaNotifs'>Recetores da notificação</h1>
                            <img src={DownArrow} className={this.state.colapsado !== 1 ? "ArrowDown" : "ArrowDownRotated"}/>
                        </div>
                        <Collapse in={this.state.colapsado === 1 ? true : false}>
                            <div>
                                <p className='subtituloSeccaoPagina' style={{marginTop: "5px"}}>Tipo de recetor</p>
                                <Dropdown className='col-3 m-0' onSelect={this.escolheRecetores}>
                                    <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                        Recetores Individuais
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdownFiltro'>
                                        <Dropdown.Item eventKey={"Individuais"}>Recetores Individuais</Dropdown.Item>
                                        <Dropdown.Item eventKey={"Grupos"}>Grupos</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <h1 className='subtituloSeccaoPagina mt-3 mb-2'>Escolha de recetores <span className='obrigatorio'>*</span></h1>
                                <span className='m-0 col-3'>
                                    <input type="text" placeholder="Pesquisa" className='barraPesquisa py-1 px-3 w-100'/>
                                </span>
                                <span className='row m-0'>
                                    {this.state.recetores === "Individuais" ? 
                                    <UserCards pagina="criaGrupo"/>
                                    :
                                    <GroupCards pagina="criaGrupo"/>
                                    }
                                </span>
                            </div>
                        </Collapse>
                    </div>
                    {/*
                    <div className='row m-0 mt-3'>
                        <h1 className='tituloSeccaoPaginaNotifs p-0'>Escolha de template</h1>
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
                    */}
                    <div className='mt-3'>
                        <div className='btn btnSeccao' onClick={() => this.mudaCollapse(2)}>
                            <h1 className='tituloSeccaoPaginaNotifs'>Tipologia de notificação</h1>
                            <img src={DownArrow} className={this.state.colapsado !== 2 ? "ArrowDown" : "ArrowDownRotated"}/>
                        </div>
                        <Collapse in={this.state.colapsado === 2 ? true : false}>
                            <div className='row m-0'>
                                <span className='col-3 me-3' style={{marginTop: "5px"}}>
                                    <p className='subtituloSeccaoPagina'>Categoria principal <span className='obrigatorio'>*</span></p>
                                    <BuscaTipologiasNotificacoes tipo={this.state.tipologia} mudaForm={this.alteraFormulario} />
                                </span>

                                <span className='col-3 p-0 me-3' style={this.state.tipologia === "Informação" ? {display: "block", marginTop: "5px"} : {display: "none"}}>
                                    <p className='subtituloSeccaoPagina p-0'>Subcategoria</p>
                                    {this.state.tipologia === "Informação" ?
                                    <Dropdown>
                                        <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                            {this.state.categoriaInfo}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='dropdownFiltro'>
                                            <Dropdown.Item onClick={() => this.alteraFormulario("Informação", "Combustíveis")}>Combustíveis</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraFormulario("Informação", "Farmácias de Serviço")}>Farmácias de Serviço</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraFormulario("Informação", "Feriados")}>Feriados</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraFormulario("Informação", "Greves")}>Greves</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    :
                                    <></>
                                    }
                                </span>
                                {this.state.tipologia === "Informação" ?
                                    <div className='col-12 mt-2'>
                                        <p className='textoSeccaoPagina'>
                                            <b>Envio da Notificação: </b>As notificações do tipo "Informação" são enviadas nas rotinas de Boa Noite e Bom Dia.
                                        </p>
                                    </div>
                                :
                                <></>
                                }
                            </div>
                        </Collapse>
                    </div>

                    <div className='row m-0 mt-3'>
                        <div className='btn btnSeccao' onClick={() => this.mudaCollapse(3)}>
                            <h1 className='tituloSeccaoPaginaNotifs'>Conteúdo da notificação</h1>
                            <img src={DownArrow} className={this.state.colapsado !== 3 ? "ArrowDown" : "ArrowDownRotated"}/>
                        </div>
                        <Collapse in={this.state.colapsado === 3 ? true : false}>
                            <div className='row m-0 p-0'>
                                <span className='row m-0 col-12'>
                                    <p className='subtituloSeccaoPagina p-0' style={{marginTop: "5px"}}>Título da notificação principal <span className='obrigatorio'>*</span></p>
                                    <input type="text" className='inputsForms' id='tituloNotif' value={this.state.tituloNotif} onChange={this.alteraTexto} maxLength="50"/>
                                </span>
                                <span className='col-3 mt-2'>
                                    <p className='subtituloSeccaoPagina'>Permite resposta?</p>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                            {this.state.popupSecundario === true ? <>Com resposta</> : <>Sem resposta</>}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='dropdownFiltro'>
                                            <Dropdown.Item onClick={() => this.alteraPopup()}>Com resposta</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraPopup()}>Sem resposta</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </span>
                                {this.state.popupSecundario === true ?
                                <span className='row col-12 mx-0 mt-2'>
                                    <p className='subtituloSeccaoPagina p-0'>Título do pop-up secundário</p>
                                    <input type="text" className='inputsForms' id='subtituloNotif' value={this.state.subtituloNotif} onChange={this.alteraTexto} maxLength="50"/>
                                    <p className='subtituloSeccaoPagina mt-2 p-0'>Mensagem informativa do pop-up secundário</p>
                                    <textarea rows="4" className='inputsForms' id='descricaoNotif' value={this.state.descricaoNotif} onChange={this.alteraTexto} maxLength="100"/>
                                </span>
                                :
                                <></>
                                }
                                {this.state.popupSecundario === true ?
                                    <RespostasUser valor={this.state.tipologia}/>
                                    :
                                    <></>
                                }
                            </div>
                        </Collapse>
                    </div>

                    <div className='row m-0 mt-2'>
                        {this.state.tipologia === "Personalizado" ?
                        <span className='col-2 me-2'>
                            <p className='subtituloSeccaoPagina'>Usar ícone?</p>
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
                        <span className='col-3'>
                            <p className='subtituloSeccaoPagina'>Ícone da notificação</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                    {this.state.paramsPersonalizado.icone}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => this.alteraIcone("icone", "Agenda")}>Agenda</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.alteraIcone("icone", "Programas")}>Programas</Dropdown.Item>
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

                    <NotificationTimeSelection collapseState={this.state.colapsado} mudaColapsado={this.mudaCollapse} parametros={this.state} mudaDiaUnico={this.alteraDiaUnico} mudaMomentoUnico={this.alteraMomentoUnico} mudaHora={this.alteraHora} mudaHorario={this.alteraHorario} alterarEnvio={this.alteraEnvio} mudaDia={this.alteraDia} mudaMomento={this.alteraMomento}/>                    
                    
                    {this.state.tipologia === "Agenda" && this.state.envioNotif !== "Semanal" && this.state.momentoUnico === "Dia e Hora" ?
                        <div className='row m-0 mt-2'>
                            <div className='col-12'>
                                <p className='textoSeccaoPagina'>
                                    *Se possível, serão enviadas notificações uma semana antes da data definida, 3 dias antes, na rotina de Boa noite do dia anterior e na rotina de Bom Dia do próprio dia.
                                </p>
                                <p className='textoSeccaoPagina'>
                                    *O utilizador pode escolher ser relembrado da notificação 15 minutos depois de a receber.
                                </p>
                            </div>
                        </div>
                    :
                    <></>
                    }
                    
                    <div className='row m-0'>
                        <div className='mt-4'>
                            <h1 className='tituloSeccaoPaginaNotifs'>Pré-visualização da notificação</h1>
                            <div className='divPreview'>
                                <span className='notiPreview'>
                                <img src={
                                    this.state.tipologia === "Agenda" ?
                                    iconeAgenda
                                    :
                                    this.state.tipologia === "Programas" ?
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
                    </div>
                    <span className='row m-0 mt-2 justify-content-end'>
                        <p className='col-2 indicaObrigatorio'>*Obrigatório</p>
                    </span>
                    <div className='row m-0'>
                        <SubmitButton params={this.state} openModal={this.onOpen} tipoForm="Notification"/>
                    </div>
                </div>
                <SuccessModal show={this.state.mostraModal} onHide={this.onClose} tiponotif="CriarNotificação"/>
            </div>
        )
    } 
}

export default CreateNotification;
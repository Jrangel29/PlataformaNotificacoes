import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown} from 'react-bootstrap';
import UserCards from '../../Components/Cards/UserCards';
import GroupCards from '../../Components/Cards/GroupCards';
import NotificationTimeSelection from '../../Components/Forms/NotificationTimeSelection';
import NotificationTimeSelection2 from '../../Components/Forms/NotificationTimeSelection';
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
            mostraModal: false,
            recetores: "Individuais",
            tipologia: "Agenda",
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
            }
        }
    }

    alteraFormulario = (valor, subcategoria) => {
        
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

    render(){
        return(
            <div>
                {console.log(this.state)}
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Criar Notificação" detalhe="sim" apagaMuda="nao"/>
                    <div className='row m-0'>
                        <h1 className='tituloSeccaoPagina'>Recetores da notificação</h1>
                        <p className='subtituloSeccaoPagina'>Tipo de recetor</p>
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
                    {/*
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
                    */}
                    <div className='row m-0 mt-3'>
                        <h1 className='tituloSeccaoPagina'>Tipologia de notificação</h1>
                        <span className='col-3 me-3'>
                            <p className='subtituloSeccaoPagina'>Categoria principal <span className='obrigatorio'>*</span></p>
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
                    </div>

                    <div className='row m-0 mt-3'>
                        <h1 className='tituloSeccaoPagina'>Conteúdo da notificação</h1>
                        <span className='row m-0 col-12'>
                            <p className='subtituloSeccaoPagina p-0 m-0'>Título da notificação principal <span className='obrigatorio'>*</span></p>
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

                    <NotificationTimeSelection2 parametros={this.state} mudaDiaUnico={this.alteraDiaUnico} mudaMomentoUnico={this.alteraMomentoUnico} mudaHora={this.alteraHora} mudaHorario={this.alteraHorario} alterarEnvio={this.alteraEnvio} mudaDia={this.alteraDia} mudaMomento={this.alteraMomento}/>

                    <div className='mt-3 px-2'>
                        <h1 className='tituloSeccaoPagina'>Pré-visualização da notificação</h1>
                        <div className='divPreview'>
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
                    <span className='row m-0 mt-2 justify-content-end'>
                        <p className='col-2 indicaObrigatorio'>*Obrigatório</p>
                    </span>
                    <SubmitButton params={this.state} openModal={this.onOpen} tipoForm="Notification"/>
                </div>
                <SuccessModal show={this.state.mostraModal} onHide={this.onClose} tiponotif="CriarNotificação"/>
            </div>
        )
    } 
}

export default CreateNotification;
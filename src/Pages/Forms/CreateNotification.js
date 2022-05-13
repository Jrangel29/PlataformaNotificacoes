import React from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown, Collapse, Form} from 'react-bootstrap';
import DownArrow from '../../Images/DownArrow.png';
import UserCards from '../../Components/Cards/UserCards';
import GroupCards from '../../Components/Cards/GroupCards';
import NotificationTimeSelection from '../../Components/Forms/NotificationTimeSelection';
import RespostasUser from '../../Components/Forms/RespostasUser';
import SuccessModal from '../../Components/Modal/SuccessModal';
import SubmitButton from '../../Components/Geral/SubmitButton';
import { BuscaTipologiasNotificacoes } from '../../Components/Forms/Hooks';
import { ListaUsersPesquisa, ListaUsersAdicionados } from '../../Components/Forms/ListaPesquisa';
import { DeliveryOptions } from '../../Components/Forms/DeliveryOptions';
import { PreviewNotif } from '../../Components/Forms/PreviewNotif';

class CreateNotification extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mostraModal: false,
            recetores: "Individuais",
            tipologia: "Agenda",
            idTipologia: '',
            categoriaInfo: "",
            nomeItem: "",
            tituloNotif: "",
            popupSecundario: false,
            subtituloNotif: "",
            descricaoNotif: "",
            regularidade: '',
            envioNotif: "Pontual",
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
            colapsado: {
                collapse1: false,
                collapse2: false,
                collapse3: false
            },
            mensagens: {
                semanaAntes: {
                    active: false, 
                    message: ''},
                dias3: {
                    active: false, 
                    message: ''},
                diaAnterior: {
                    active: false, 
                    message: ''},
                diaProprio: {
                    active: false, 
                    message: ''},
                horaEspecifica: {
                    active: false, 
                    message: ''},
                imediato: {
                    active: false, 
                    message: ''},
                intervaloHoras: {
                    active: false, 
                    message: ''},
                horaAntes: {
                    active: false, 
                    message: ''},
                meiaHora: {
                    active: false, 
                    message: ''},
                quartoHora: {
                    active: false, 
                    message: ''},
                minutos5: {
                    active: false, 
                    message: ''}
            }
        }
    }

    alteraFormulario = (valor, id, subcategoria) => {
        
        if(subcategoria === "nao"){
            this.setState({
                tipologia: valor,
                idTipologia: id,
                categoriaInfo: ''
            })
        }
        if(subcategoria === "Combustíveis" || subcategoria === "Greves" || subcategoria === "Farmácias de Serviço" || subcategoria === "Feriados" || subcategoria === "Inatividade" || subcategoria === "Ingestão de Líquidos" || subcategoria === "Medicação"){
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

    alteraRegularidade = (valor) => {
        if(valor.target.value === "Pontual"){
            this.setState({
                regularidade: valor.target.value,
                envioNotif: "Pontual"
            })
        } else{
            this.setState({
                regularidade: valor.target.value,
                envioNotif: "Diária"
            })
        }
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

    alteraPopup = (valor) => {
        this.setState({
            popupSecundario: valor
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
        let string = `collapse${val}`;

        this.setState({
            colapsado: {
                ...this.state.colapsado,
                [string]: !this.state.colapsado[string]
            }
        })
        
    }

    updateMomentosEnvio = (val) => {
        let escolhido = val.target.value;
        this.setState({
            mensagens:{
                ...this.state.mensagens,
                [escolhido]: {
                    ...this.state.mensagens[escolhido],
                    active: !this.state.mensagens[escolhido].active
                }
            }
        })
    }

    updateMensagensEnvio = (val) => {
        let escolhido = val.target.id;
        let escrito = val.target.value
        this.setState({
            mensagens:{
                ...this.state.mensagens,
                [escolhido]: {
                    ...this.state.mensagens[escolhido],
                    message: escrito
                }
            }
        })
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBodyForm container px-0'>
                    <Header nome="Criar Notificação" detalhe="sim" apagaMuda="nao"/>
                    <PreviewNotif tipo={this.state.tipologia} titulo={this.state.tituloNotif} sub={this.state.categoriaInfo}/>
                    <div>
                        <div className='btn btnSeccao ms-0' onClick={() => this.mudaCollapse(1)}>
                            <h1 className='tituloSeccaoPaginaNotifs'>Tipologia</h1>
                            <img src={DownArrow} className={this.state.colapsado.collapse1 !== true ? "ArrowDown" : "ArrowDownRotated"}/>
                        </div>
                        <Collapse in={this.state.colapsado.collapse1}>
                            <div className='row m-0' style={{padding: "0 40px"}}>
                                <span className='col-3 me-3' style={{marginTop: "5px"}}>
                                    <p className='subtituloSeccaoPagina'>Categoria principal <span className='obrigatorio'>*</span></p>
                                    <BuscaTipologiasNotificacoes tipo={this.state.tipologia} mudaForm={this.alteraFormulario} />
                                </span>

                                <span className='col-3 p-0 me-3'>
                                    <p className='subtituloSeccaoPagina p-0' style={{ marginTop: "5px"}}>Subcategoria</p>
                                    {this.state.tipologia === "Informação" || this.state.tipologia === "Saúde" ?
                                    <Dropdown>
                                        <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                            {this.state.categoriaInfo}
                                        </Dropdown.Toggle>
                                        {this.state.tipologia === "Informação" ?
                                        <Dropdown.Menu className='dropdownFiltro'>
                                            <Dropdown.Item onClick={() => this.alteraFormulario(this.state.tipologia, this.state.idTipologia, "Combustíveis")}>Combustíveis</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraFormulario(this.state.tipologia, this.state.idTipologia, "Farmácias de Serviço")}>Farmácias de Serviço</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraFormulario(this.state.tipologia, this.state.idTipologia, "Feriados")}>Feriados</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraFormulario(this.state.tipologia, this.state.idTipologia, "Greves")}>Greves</Dropdown.Item>
                                        </Dropdown.Menu>
                                        :
                                        <Dropdown.Menu className='dropdownFiltro'>
                                            <Dropdown.Item onClick={() => this.alteraFormulario(this.state.tipologia, this.state.idTipologia, "Inatividade")}>Inatividade</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraFormulario(this.state.tipologia, this.state.idTipologia, "Ingestão de Líquidos")}>Ingestão de Líquidos</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraFormulario(this.state.tipologia, this.state.idTipologia, "Medicação")}>Medicação</Dropdown.Item>
                                        </Dropdown.Menu>
                                        }
                                    </Dropdown>
                                    :
                                    <Dropdown>
                                        <Dropdown.Toggle variant="custom" disabled className='dropdownFiltro'>
                                            Não tem subcategoria
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                    }
                                </span>
                            </div>
                        </Collapse>
                    </div>

                    <div className='row m-0 mt-2'>
                        <div className='btn btnSeccao' onClick={() => this.mudaCollapse(2)}>
                            <h1 className='tituloSeccaoPaginaNotifs'>Recetores</h1>
                            <img src={DownArrow} className={this.state.colapsado.collapse2 !== true ? "ArrowDown" : "ArrowDownRotated"}/>
                        </div>
                        <Collapse in={this.state.colapsado.collapse2}>
                            <div className='row m-0' style={{padding: "0 40px"}}>
                                {/*<p className='subtituloSeccaoPagina' style={{marginTop: "5px"}}>Tipo de recetor</p>
                                <Dropdown className='col-3 m-0' onSelect={this.escolheRecetores}>
                                    <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                        Recetores Individuais
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdownFiltro'>
                                        <Dropdown.Item eventKey={"Individuais"}>Recetores Individuais</Dropdown.Item>
                                        <Dropdown.Item eventKey={"Grupos"}>Grupos</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>*/}

                                <span className='row m-0'>
                                    <div className='col-6 ms-0 ps-0'>
                                        <h1 className='subtituloSeccaoPagina mt-3 mb-2'>Escolha de recetores <span className='obrigatorio'>*</span></h1>
                                    </div>
                                    <div className='col-6 ms-0 ps-0'>
                                        <h1 className='subtituloSeccaoPagina mt-3 mb-2'>Recetores escolhidos</h1>
                                    </div>
                                </span>
                                <span className='row m-0'>
                                    <div className='col-6 ms-0 ps-0'>
                                        <ListaUsersPesquisa tipo={this.state.recetores}/>
                                    </div>
                                    <div className='col-6 m-0 p-0'>
                                        <ListaUsersAdicionados/>
                                    </div>
                                </span>
                            </div>
                        </Collapse>
                    </div>

                    <div className='row m-0 mt-2'>
                        <div className='btn btnSeccao' onClick={() => this.mudaCollapse(3)}>
                            <h1 className='tituloSeccaoPaginaNotifs'>Conteúdo e Momento de envio</h1>
                            <img src={DownArrow} className={this.state.colapsado.collapse3 !== true ? "ArrowDown" : "ArrowDownRotated"}/>
                        </div>
                        <Collapse in={this.state.colapsado.collapse3}>
                            <span className='row m-0' style={{padding: "0 40px"}}>
                                <div className='row col-8'>
                                    <span className='col-12'>
                                        <p className='subtituloSeccaoPaginaBigger p-0' style={{marginTop: "5px"}}>Dados do item a notificar</p>
                                    </span>
                                    
                                    <span className='row m-0 col-12'>
                                        <p className='subtituloSeccaoPagina p-0' style={{marginTop: "5px"}}>Nome do item <span className='obrigatorio'>*</span></p>
                                        <input type="text" className='inputsForms' id='nomeItem' value={this.state.nomeItem} onChange={this.alteraTexto} maxLength="50"/>
                                    </span>
                                    {/* 
                                    <span className='row m-0 col-12'>
                                        <p className='subtituloSeccaoPagina p-0' style={{marginTop: "5px"}}>Título da notificação principal <span className='obrigatorio'>*</span></p>
                                        <input type="text" className='inputsForms' id='tituloNotif' value={this.state.tituloNotif} onChange={this.alteraTexto} maxLength="50"/>
                                    </span>

                                    <span className='col-4 mt-2'>
                                        <p className='subtituloSeccaoPagina'>Permite resposta?</p>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                                {this.state.popupSecundario === true ? <>Com resposta</> : <>Sem resposta</>}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className='dropdownFiltro'>
                                                <Dropdown.Item onClick={() => this.alteraPopup(true)}>Com resposta</Dropdown.Item>
                                                <Dropdown.Item onClick={() => this.alteraPopup(false)}>Sem resposta</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </span>
                                    {this.state.popupSecundario === true ?
                                    <span className='row col-12 mx-0 mt-2'>
                                        <p className='subtituloSeccaoPagina'>Título do pop-up secundário</p>
                                        <input type="text" className='inputsForms' id='subtituloNotif' value={this.state.subtituloNotif} onChange={this.alteraTexto} maxLength="50"/>
                                        <p className='subtituloSeccaoPagina mt-2'>Mensagem informativa do pop-up secundário</p>
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
                                    */}
                                    <span className='row m-0 col-12'>
                                        <p className='subtituloSeccaoPagina p-0' style={{marginTop: "5px"}}>Regularidade de envio <span className='obrigatorio'>*</span></p>
                                        <Form.Check 
                                            type="radio" 
                                            inline 
                                            name="radios"
                                            id="Pontual" 
                                            key="Pontual" 
                                            value="Pontual"
                                            label='Pontual'
                                            onChange={this.alteraRegularidade}
                                            />
                                        <Form.Check 
                                            type="radio" 
                                            inline
                                            name="radios" 
                                            id="Regular" 
                                            key="Regular" 
                                            value="Regular"
                                            label='Regular'
                                            onChange={this.alteraRegularidade}
                                            />
                                    </span>
                                    <NotificationTimeSelection collapseState={this.state.colapsado} parametros={this.state} mudaDiaUnico={this.alteraDiaUnico} mudaMomentoUnico={this.alteraMomentoUnico} mudaHora={this.alteraHora} mudaHorario={this.alteraHorario} alterarEnvio={this.alteraEnvio} mudaDia={this.alteraDia} mudaMomento={this.alteraMomento}/>                    
                                
                                    <span className='col-12 mt-2'>
                                        <p className='subtituloSeccaoPaginaBigger p-0 mt-2' style={{marginTop: "5px"}}>Mensagens das notificações</p>
                                    </span>
                                    <DeliveryOptions changeMomento={this.updateMomentosEnvio} changeMensagem={this.updateMensagensEnvio} momentos={this.state.mensagens}/>
                                </div>

                                <div className='col-4 mt-3'>
                                    <div className='seccaoPrefsUser'>
                                        <span className='col-12'>
                                            <p className='subtituloSeccaoPagina p-0' style={{marginTop: "5px"}}>Preferências do utilizador</p>
                                        </span>
                                        <span className='col-12 textoPrefsUser'>
                                            <p>bué texto aqui filho bué texto aqui filho bué texto aqui filho bué texto aqui filho</p>
                                        </span>
                                    </div>
                                </div>
                            </span>
                        </Collapse>
                    </div>

                    {/*<div className='row m-0 mt-2'>
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
                    </div>*/}

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
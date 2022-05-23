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
import { ListaUsersPesquisa, ListaUsersAdicionados, CasasPesquisa, CasasEscolhidas } from '../../Components/Forms/ListaPesquisa';
import { DeliveryOptions } from '../../Components/Forms/DeliveryOptions';
import { PreviewNotif } from '../../Components/Forms/PreviewNotif';
import UserPreferencesModal from '../../Components/Modal/UserPreferencesModal';

class CreateNotification extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mostraModal: false,
            mostraModalInfo: false,
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
            diaUnico: '',
            hora: '',
            momentoUnico: '',
            usersEscolhidos: [],
            casasEscolhidas: [],
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
                tipoRecetor: 'Recetores Individuais'
            },
            colapsado: {
                collapse1: false,
                collapse2: false,
                collapse3: false,
                collapse4: false
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
                    message: '',
                    tituloBlade: '',
                    descricao: ''},
                quartoHora: {
                    active: false, 
                    message: ''},
                minutos5: {
                    active: false, 
                    message: ''},
                momentoAcontecimento: {
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
                categoriaInfo: '',
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
                        message: '',
                        tituloBlade: '',
                        descricao: ''},
                    quartoHora: {
                        active: false, 
                        message: ''},
                    minutos5: {
                        active: false, 
                        message: ''},
                    momentoAcontecimento: {
                        active: false, 
                        message: ''}
                }
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
        if(valor.target.value === "Pontual" && this.state.tipologia !== 'Informação'){
            this.setState({
                regularidade: valor.target.value,
                envioNotif: "Pontual",
                momentoUnico: 'Imediato',
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
                        message: '',
                        tituloBlade: '',
                        descricao: ''},
                    quartoHora: {
                        active: false, 
                        message: ''},
                    minutos5: {
                        active: false, 
                        message: ''},
                    momentoAcontecimento: {
                        active: false, 
                        message: ''}
                }
            })
        } else if(valor.target.value === "Pontual" && this.state.tipologia === 'Informação') {
            this.setState({
                regularidade: valor.target.value,
                envioNotif: "Pontual",
                momentoUnico: '',
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
                        message: '',
                        tituloBlade: '',
                        descricao: ''},
                    quartoHora: {
                        active: false, 
                        message: ''},
                    minutos5: {
                        active: false, 
                        message: ''},
                    momentoAcontecimento: {
                        active: false, 
                        message: ''}
                }
            })
        } else{
            this.setState({
                regularidade: valor.target.value,
                envioNotif: "Diária",
                momentoUnico: "",
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
                        message: '',
                        tituloBlade: '',
                        descricao: ''},
                    quartoHora: {
                        active: false, 
                        message: ''},
                    minutos5: {
                        active: false, 
                        message: ''},
                    momentoAcontecimento: {
                        active: false, 
                        message: ''}
                }
            })
        }
    }

    alteraMomentoUnico = (valor) => {
        this.setState({
            momentoUnico: valor,
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
                    message: '',
                    tituloBlade: '',
                    descricao: ''},
                quartoHora: {
                    active: false, 
                    message: ''},
                minutos5: {
                    active: false, 
                    message: ''},
                momentoAcontecimento: {
                    active: false, 
                    message: ''}
            }
        })
    }

    onOpen = () => this.setState({mostraModal: true});
    onClose = () => this.setState({mostraModal: false});
    onOpenInfo = () => this.setState({mostraModalInfo: true});
    onCloseInfo = () => this.setState({mostraModalInfo: false});


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

    alteraRecetoresIndividual = (valor) => {
        if(valor === 'Casas'){
            this.setState({
                paramsPersonalizado:{
                    ...this.state.paramsPersonalizado,
                    tipoRecetor: "Casas",
                }
            })
        } else {
            this.setState({
                paramsPersonalizado:{
                    ...this.state.paramsPersonalizado,
                    tipoRecetor: "Recetores Individuais",
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

    updateBlade = (val) => {
        let escolhido = val.target.id;
        let escrito = val.target.value;
        if(escolhido === 'meiaHoraTituloBlade'){
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    meiaHora: {
                        ...this.state.mensagens.meiaHora,
                        tituloBlade: escrito
                    }
                }
            })
        } else{
            this.setState({
                mensagens:{
                    ...this.state.mensagens,
                    meiaHora: {
                        ...this.state.mensagens.meiaHora,
                        descricao: escrito
                    }
                }
            })
        }
    }

    addUser = (val) => {
        this.setState({
            usersEscolhidos: [...this.state.usersEscolhidos, val]
        })
    }

    removeUser = (val) => {
        let array = [...this.state.usersEscolhidos];
        array.splice(val, 1)
        this.setState({
            usersEscolhidos: array
        })
    }

    addCasa = (val) => {
        this.setState({
            casasEscolhidas: [...this.state.casasEscolhidas, val]
        })
    }

    removeCasa = (val) => {
        let array = [...this.state.casasEscolhidas];
        array.splice(val, 1)
        this.setState({
            casasEscolhidas: array
        })
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBodyForm container px-0'>
                    <Header nome="Criar Evento" detalhe="sim" apagaMuda="nao"/>
                    <PreviewNotif tipo={this.state.tipologia} personalizado={this.state.paramsPersonalizado} mensagens={this.state.mensagens} titulo={this.state.nomeItem} sub={this.state.categoriaInfo}/>
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

                                <div className='col-5 pe-0 mt-2'>
                                    <span>
                                        <p className='m-0 p-0' style={{fontSize: '14px', color: '#CC5500'}}><b>Aviso</b></p>
                                        <p className='m-0 mt-1 p-0' style={{fontSize: '13px', textJustify: 'inter-word'}}><b style={{color: '#CC5500'}}>-</b> Dependendo da categoria escolhida, alguns recetores podem não aparecer. Alguns dos momentos de envio podem também estar indisponíveis.</p>
                                    </span>
                                </div>

                                {<div className='row m-0 mt-2 p-0'>
                                    {this.state.tipologia === "Personalizada" ?
                                    <span className='col-3 me-2'>
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
                                    {this.state.tipologia === "Personalizada" && this.state.paramsPersonalizado.usaIcone === "Sim" ?
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
                                </div>}
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
                                
                                {this.state.tipologia === 'Personalizada' ?
                                <span className='col-3 me-3' style={{marginTop: "5px"}}>
                                    <p className='subtituloSeccaoPagina'>Tipo de recetor <span className='obrigatorio'>*</span></p>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                                            {this.state.paramsPersonalizado.tipoRecetor}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='dropdownFiltro'>
                                            <Dropdown.Item onClick={() => this.alteraRecetoresIndividual("Recetores Individuais")}>Recetores Individuais</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.alteraRecetoresIndividual("Casas")}>Casas</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </span>
                                :
                                <></>
                                }

                                <span className='row m-0'>
                                    <div className='col-6 ms-0 ps-0'>
                                        <h1 className='subtituloSeccaoPagina mt-3 mb-2'>Escolha de recetores <span className='obrigatorio'>*</span></h1>
                                    </div>
                                    <div className='col-6 ms-0 ps-0'>
                                        <h1 className='subtituloSeccaoPagina mt-3 mb-2'>Recetores escolhidos</h1>
                                    </div>
                                </span>
                                <span className='row m-0'>
                                    {this.state.tipologia === 'Agenda' || this.state.tipologia === 'Programas' || this.state.tipologia === 'Saúde' || this.state.tipologia === 'Personalizada' && this.state.paramsPersonalizado.tipoRecetor === 'Recetores Individuais' ?
                                    <>
                                        <div className='col-6 ms-0 ps-0'>
                                            <ListaUsersPesquisa tipo={this.state.recetores} adiciona={this.addUser} adicionados={this.state.usersEscolhidos}/>
                                        </div>
                                        <div className='col-6 m-0 p-0'>
                                            <ListaUsersAdicionados adicionados={this.state.usersEscolhidos} remove={this.removeUser}/>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='col-6 ms-0 ps-0'>
                                            <CasasPesquisa adiciona={this.addCasa} casasEscolhidas={this.state.casasEscolhidas}/>
                                        </div>
                                        <div className='col-6 m-0 p-0'>
                                            <CasasEscolhidas casas={this.state.casasEscolhidas} remove={this.removeCasa}/>
                                        </div>
                                    </>
                                    }
                                    
                                </span>
                            </div>
                        </Collapse>
                    </div>

                    <div className='row m-0 mt-2'>
                        <div className='btn btnSeccao' onClick={() => this.mudaCollapse(3)}>
                            <h1 className='tituloSeccaoPaginaNotifs'>Dados do evento</h1>
                            <img src={DownArrow} className={this.state.colapsado.collapse3 !== true ? "ArrowDown" : "ArrowDownRotated"}/>
                        </div>
                        <Collapse in={this.state.colapsado.collapse3}>
                            <span className='row m-0' style={{padding: "0 40px"}}>
                                <div className='row col-12'>
                                    <span className='col-12'>
                                        <p className='subtituloSeccaoPaginaBigger p-0' style={{marginTop: "5px"}}>Dados do evento</p>
                                    </span>
                                    
                                    <span className='row m-0 col-12 pe-0'>
                                        <p className='subtituloSeccaoPagina p-0' style={{marginTop: "5px"}}>Nome do evento <span className='obrigatorio'>*</span></p>
                                        <input type="text" className='inputsForms' id='nomeItem' value={this.state.nomeItem} onChange={this.alteraTexto} maxLength="50"/>
                                    </span>

                                    <span className='row m-0 col-12 mt-1'>
                                        <p className='subtituloSeccaoPagina p-0' style={{marginTop: "5px"}}>Regularidade do evento <span className='obrigatorio'>*</span></p>
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
                                </div>
                            </span>
                        </Collapse>
                    </div>

                    <div className='row m-0 mt-2'>
                        <div className='btn btnSeccao' onClick={() => this.mudaCollapse(4)}>
                            <h1 className='tituloSeccaoPaginaNotifs'>Momentos e conteúdo das notificações</h1>
                            <img src={DownArrow} className={this.state.colapsado.collapse4 !== true ? "ArrowDown" : "ArrowDownRotated"}/>
                        </div>
                        <Collapse in={this.state.colapsado.collapse4}>
                            <span className='row m-0' style={{padding: "0 40px"}}>
                                <p className='subtituloSeccaoPaginaBigger mt-3' style={{marginTop: "5px"}}>Mensagens das notificações</p>
                                
                                <div className='row col-9'>
                                    <DeliveryOptions subSaude={this.state.categoriaInfo} changeMomento={this.updateMomentosEnvio} blade={this.updateBlade} changeMensagem={this.updateMensagensEnvio} momentos={this.state.mensagens} tipo={this.state.tipologia} verificaMomento={this.state.momentoUnico} periodicidade={this.state.envioNotif}/>
                                </div>

                                <div className='col-3 pe-0' style={{display: 'flex', flexDirection: 'column'}}>
                                    <Button  
                                        variant='flat' 
                                        onClick={() => this.onOpenInfo()}>Ver preferências dos utilizadores</Button>
                                    <span style={{marginTop: '10px'}}>
                                        <p className='m-0 p-0' style={{fontSize: '14px', color: '#CC5500'}}><b>Avisos</b></p>
                                        <p className='m-0 mt-1 p-0' style={{fontSize: '13px', textJustify: 'inter-word'}}><b style={{color: '#CC5500'}}>-</b> Seleciona os momentos em que queres mandar notifições. Podes criar mensagens de acordo com os momentos que escolheste.</p>
                                        <p className='m-0 mt-1 p-0' style={{fontSize: '13px', textJustify: 'inter-word'}}><b style={{color: '#CC5500'}}>-</b> Algumas dos momentos têm um 'Blade horizontal'. Estes permitem o envio de mais informação e que o utilizador possa responder à notificação. (Por exemplo: 'Relembrar daqui a 15 minutos')</p>
                                        <p className='m-0 mt-1 p-0' style={{fontSize: '13px', textJustify: 'inter-word'}}><b style={{color: '#CC5500'}}>-</b> Dependendo da tipologia e periodicidade escolhidas, alguns momentos podem estar indisponíveis. Para teres acesso a tudo, usa a tipologia 'Personalizado'.</p>
                                    </span>
                                </div>
                            </span>
                        </Collapse>
                    </div>

                    <span className='row m-0 mt-2 justify-content-end' style={{padding: "0 40px"}}>
                        <p className='col-2 indicaObrigatorio'>*Obrigatório</p>
                    </span>
                    <div className='row m-0' style={{padding: "0 40px"}}>
                        <SubmitButton params={this.state} openModal={this.onOpen} tipoForm="Notification"/>
                    </div>
                </div>
                <UserPreferencesModal show={this.state.mostraModalInfo} onHide={this.onCloseInfo}/>
                <SuccessModal show={this.state.mostraModal} onHide={this.onClose} tiponotif="CriarNotificação"/>
            </div>
        )
    } 
}

export default CreateNotification;
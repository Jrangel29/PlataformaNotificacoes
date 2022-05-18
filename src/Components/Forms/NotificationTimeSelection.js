import React from "react";
import { Dropdown, Table, Form, Collapse } from "react-bootstrap";
import Calendar from 'react-calendar';
import DownArrow from '../../Images/DownArrow.png';

function NotificationTimeSelection(props) {
  return (
    <>
        <p className="subtituloSeccaoPagina" style={{marginTop: "5px"}}>
            Peridicidade <span className="obrigatorio">*</span>
        </p>
        <span className="col-3">
            <Dropdown>
                <Dropdown.Toggle variant={props.parametros.regularidade !== "Regular" ? "custom" : "flat"} disabled={props.parametros.regularidade !== "Regular" ? true : false} className="dropdownFiltro">
                    {props.parametros.regularidade === '' ? "Seleciona uma regularidade" : props.parametros.envioNotif}
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdownFiltro">
                    <Dropdown.Item onClick={() => props.alterarEnvio("Diária")}>
                        Diária
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => props.alterarEnvio("Semanal")}>
                        Semanal
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => props.alterarEnvio("Mensal")}>
                        Mensal
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </span>
        
        {props.parametros.regularidade !== '' ?
            <>
            {props.parametros.envioNotif === "Pontual" ?
                <>
                    {props.parametros.tipologia !== 'Informação' ? 
                    <>
                    <h1 className='subtituloSeccaoPagina mt-2'>Momento de acontecimento do item</h1>
                    <span className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                                {props.parametros.momentoUnico}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdownFiltro">
                                <Dropdown.Item onClick={() => props.mudaMomentoUnico("Imediato")}>
                                    Imediato
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => props.mudaMomentoUnico("Hora")}>
                                    Hora
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => props.mudaMomentoUnico("Dia e Hora")}>
                                    Dia e Hora
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>
                    </>
                    :
                    <></>
                    }
                </>
            : 
                props.parametros.envioNotif === "Semanal" ?
                <div className='mt-3'>
                    <h1 className='subtituloSeccaoPagina'>Dias da semana</h1>
                    <Table striped bordered style={{textAlign: "center", width: "100%", marginBottom: '0'}}>
                        <thead>
                            <tr>
                                <th>Segunda-Feira</th>
                                <th>Terça-Feira</th>
                                <th>Quarta-Feira</th>
                                <th>Quinta-Feira</th>
                                <th>Sexta-Feira</th>
                                <th>Sábado</th>
                                <th>Domingo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Form.Check 
                                        type="checkbox" 
                                        inline 
                                        id="segunda" 
                                        key="segunda" 
                                        value="segunda"
                                        onChange={props.mudaDia}/>
                                </td>
                                <td>
                                    <Form.Check 
                                        type="checkbox" 
                                        inline 
                                        id="terca" 
                                        key="terca" 
                                        value="terca"
                                        onChange={props.mudaDia}/>
                                </td>
                                <td>
                                    <Form.Check 
                                        type="checkbox" 
                                        inline 
                                        id="quarta" 
                                        key="quarta" 
                                        value="quarta"
                                        onChange={props.mudaDia}/>
                                </td>
                                <td>
                                    <Form.Check 
                                        type="checkbox" 
                                        inline 
                                        id="quinta" 
                                        key="quinta" 
                                        value="quinta"
                                        onChange={props.mudaDia}/>
                                </td>
                                <td>
                                    <Form.Check 
                                        type="checkbox" 
                                        inline 
                                        id="sexta" 
                                        key="sexta" 
                                        value="sexta"
                                        onChange={props.mudaDia}/>
                                </td>
                                <td>
                                    <Form.Check 
                                        type="checkbox" 
                                        inline 
                                        id="sabado" 
                                        key="sabado" 
                                        value="sabado"
                                        onChange={props.mudaDia}/>
                                </td>
                                <td>
                                    <Form.Check 
                                        type="checkbox" 
                                        inline 
                                        id="domingo" 
                                        key="domingo" 
                                        value="domingo"
                                        onChange={props.mudaDia}/>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <span className="col-3">
                        <p className="subtituloSeccaoPagina mt-2">Hora</p>
                        <span className="row col-12">
                            <span className="col-3">
                                <input type="time" className='inputsForms without_ampm w-50' onChange={props.mudaHora} style={{height: "37px"}}/>
                            </span>
                        </span>
                    </span>
                    </div>
                    : 
                    props.parametros.envioNotif === "Diária" ?
                    <div className='mt-2'>
                        <span className="col-3">
                            <p className="subtituloSeccaoPagina">Hora</p>
                            <span className="row col-12">
                                <span className="col-3">
                                    <input type="time" className='inputsForms without_ampm w-50' onChange={props.mudaHora} style={{height: "37px"}}/>
                                </span>
                            </span>
                        </span>
                    </div>
                    :
                    <>
                        <p className="subtituloSeccaoPagina mt-2">Dia do mês</p>
                        <span className="col-3">
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                                Dia do mês
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdownFiltro">
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">1</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">2</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">2</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">3</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">4</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">5</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">6</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">7</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">8</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">9</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">10</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">11</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">12</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">13</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">14</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">15</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">16</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">17</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">18</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">19</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">20</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">21</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">22</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">23</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">24</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">25</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">26</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">27</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">28</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">29</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">30</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro">31</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </span>
                        {/*<p className="subtituloSeccaoPagina mt-2">Horário de envio</p>
                        <span className="row col-12">
                            <span className="col-4">
                                <Dropdown>
                                    <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                                        {props.parametros.horario}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdownFiltro">
                                        <Dropdown.Item onClick={() => props.mudaHorario("Bom Dia")}>
                                            Bom Dia
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => props.mudaHorario("Boa Noite")}>
                                            Boa Noite
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => props.mudaHorario("Hora específica")}>
                                            Hora específica
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </span>
                            {props.parametros.horario === "Hora específica" ? 
                                <span className="col-4">
                                    <input type="time" className='inputsForms without_ampm w-50' onChange={props.mudaHora} style={{height: "37px"}}/>
                                </span>
                                :
                                <></>
                            }
                        </span>*/}
                    </>
            }
            </>
            : 
            <></>
        }

        {props.parametros.momentoUnico === "Imediato" ?
        <></>
        :
        props.parametros.momentoUnico === "Hora" ? 
        <>
            <p className="subtituloSeccaoPagina mt-2">Hora</p>
            <span className="col-3">
                <input type="time" className='inputsForms without_ampm w-50' onChange={props.mudaHora} style={{height: "37px"}}/>
            </span>
                
        </>
        :
        <>
            {props.parametros.envioNotif !== "Pontual" ?
            <></>
            :
            <>
                {props.parametros.momentoUnico !== '' ?
                <div className="row col-12">
                    <span className="col-9">
                        <p className="subtituloSeccaoPagina mt-2">Escolha de dia</p>
                        <Calendar 
                            className="m-0 p-0 w-100" 
                            onClickDay={props.mudaDiaUnico}
                            minDate={new Date()}/>
                    </span>
                    <span className="col-12">
                        <p className="subtituloSeccaoPagina mt-1">Hora</p>
                        <span className="row col-12">
                            <span className="col-3">
                                <input type="time" className='inputsForms without_ampm w-50' onChange={props.mudaHora} style={{height: "37px"}}/>
                            </span> 
                        </span>
                    </span>
                </div>
                :
                <></>
                }
            </>
            }
        </>
        }
        
        {/*props.parametros.tipologia === "Agenda" && props.parametros.envioNotif !== "Semanal" && props.parametros.momentoUnico === "Dia e Hora" ?
            <div className='row mt-2'>
                <div className='col-12'>
                    <p className='textoSeccaoPagina'>
                        *Se possível, serão enviadas notificações uma semana antes da data definida, 3 dias antes, na rotina de Boa noite do dia anterior e na rotina de Bom Dia do próprio dia. Será também avisado 2 horas antes, uma hora antes, 30 minutos, 15 minutos e 5 minutos antes do evento.
                    </p>
                    <p className='textoSeccaoPagina'>
                        *O utilizador pode escolher ser relembrado da notificação 15 minutos depois de a receber.
                    </p>
                </div>
            </div>
            :
            <></>
    */}
    </>  
    )
}

export default NotificationTimeSelection;

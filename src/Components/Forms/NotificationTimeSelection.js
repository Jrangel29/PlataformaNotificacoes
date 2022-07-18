import React, {useState, useEffect} from "react";
import { Dropdown, Table, Form} from "react-bootstrap";
import Calendar from 'react-calendar';

function NotificationTimeSelection(props) {

  return (
    <>
        <p className="subtituloSeccaoPagina" style={{marginTop: "5px"}}>
            Periodicidade <span className="obrigatorio">*</span>
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
                    
                    <h1 className='subtituloSeccaoPagina mt-2'>Horário do evento <span className='obrigatorio'>*</span></h1>
                    <span className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle className="dropdownFiltro" variant={props.parametros.tipologia !== 'Informação' ? 'flat' : 'custom'} disabled={props.parametros.tipologia !== 'Informação' ? false : true}>
                                {props.parametros.momentoUnico}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdownFiltro">
                                <Dropdown.Item onClick={() => props.mudaMomentoUnico("Imediato")}>
                                    Imediato
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => props.mudaMomentoUnico("Dia e Hora")}>
                                    Dia e Hora
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </span>
                </>
            : 
                props.parametros.envioNotif === "Semanal" ?
                <div className='mt-3'>
                    <h1 className='subtituloSeccaoPagina'>Dias da semana <span className='obrigatorio'>*</span></h1>
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
                                        id="segunda1" 
                                        key="segunda1" 
                                        value="segunda1"
                                        checked={props.parametros.dias.segunda1}
                                        onChange={props.mudaDia}/>
                                </td>
                                <td>
                                    <Form.Check 
                                        type="checkbox" 
                                        inline 
                                        id="terca2" 
                                        key="terca2" 
                                        value="terca2"
                                        checked={props.parametros.dias.terca2}
                                        onChange={props.mudaDia}/>
                                </td>
                                <td>
                                    <Form.Check 
                                        type="checkbox" 
                                        inline 
                                        id="quarta3" 
                                        key="quarta3" 
                                        value="quarta3"
                                        checked={props.parametros.dias.quarta3}
                                        onChange={props.mudaDia}/>
                                </td>
                                <td>
                                    <Form.Check 
                                        type="checkbox" 
                                        inline 
                                        id="quinta4" 
                                        key="quinta4" 
                                        value="quinta4"
                                        checked={props.parametros.dias.quinta4}
                                        onChange={props.mudaDia}/>
                                </td>
                                <td>
                                    <Form.Check 
                                        type="checkbox" 
                                        inline 
                                        id="sexta5" 
                                        key="sexta5" 
                                        value="sexta5"
                                        checked={props.parametros.dias.sexta5}
                                        onChange={props.mudaDia}/>
                                </td>
                                <td>
                                    <Form.Check 
                                        type="checkbox" 
                                        inline 
                                        id="sabado6" 
                                        key="sabado6" 
                                        value="sabado6"
                                        checked={props.parametros.dias.sabado6}
                                        onChange={props.mudaDia}/>
                                </td>
                                <td>
                                    <Form.Check 
                                        type="checkbox" 
                                        inline 
                                        id="domingo0" 
                                        key="domingo0" 
                                        value="domingo0"
                                        checked={props.parametros.dias.domingo0}
                                        onChange={props.mudaDia}/>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    {props.parametros.tipologia === 'Informação' ?
                    <></>
                    :
                    <span className="col-3">
                        <p className="subtituloSeccaoPagina mt-2">Hora <span className='obrigatorio'>*</span></p>
                        <span className="row col-12">
                            <span className="col-3">
                                <input type="time" value={props.parametros.hora} className='inputsForms without_ampm w-50' onInput={props.mudaHora} onChange={props.mudaHora} style={{height: "37px"}}/>
                            </span>
                        </span>
                    </span>
                    }
                    <span className="col-3">
                        <p className="subtituloSeccaoPagina mt-2 mb-0">Data de fim <span className='obrigatorio'>*</span></p>
                        <p className='bigSmallSmall mb-1'>A data é preenchida no formato MM-DD-AAAA. A data também não pode ser anterior à data do dia atual.</p>
                        <span className="row col-12">
                            <span className="col-3">
                                <input type="date" className='inputsForms w-50' value={props.parametros.dataFim} onChange={props.mudaDataFim} style={{height: "37px"}}/>
                            </span>
                        </span>
                    </span>
                    </div>
                    : 
                    props.parametros.envioNotif === "Diária" ?
                    <div className='mt-2'>
                        {props.parametros.tipologia === 'Informação' ?
                        <></>
                        :
                        <span className="col-3">
                            <p className="subtituloSeccaoPagina">Hora <span className='obrigatorio'>*</span></p>
                            <span className="row col-12">
                                <span className="col-3">
                                    <input type="time" className='inputsForms without_ampm w-50' value={props.parametros.hora} onInput={props.mudaHora} onChange={props.mudaHora} style={{height: "37px"}}/>
                                </span>
                            </span>
                        </span>
                        }
                        <span className="col-3">
                            <p className={props.parametros.tipologia === 'Informação' ? "subtituloSeccaoPagina mb-0" : "subtituloSeccaoPagina mt-2 mb-0"}>Data de fim <span className='obrigatorio'>*</span></p>
                            <p className='bigSmallSmall mb-1'>A data é preenchida no formato MM-DD-AAAA. A data também não pode ser anterior à data do dia atual.</p>
                            <span className="row col-12">
                                <span className="col-3">
                                    <input type="date" className='inputsForms w-50' value={props.parametros.dataFim} onChange={props.mudaDataFim} style={{height: "37px"}}/>
                                </span>
                            </span>
                        </span>
                    </div>
                    :
                    <>
                        <p className="subtituloSeccaoPagina mt-2">Dia do mês <span className='obrigatorio'>*</span></p>
                        <span className="col-3">
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className="dropdownFiltro">
                                {props.parametros.diaMes === '' ? 'Dia do mês' : props.parametros.diaMes}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdownFiltro">
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(1)}>1</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(2)}>2</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(3)}>3</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(4)}>4</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(5)}>5</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(6)}>6</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(7)}>7</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(8)}>8</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(9)}>9</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(10)}>10</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(11)}>11</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(12)}>12</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(13)}>13</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(14)}>14</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(15)}>15</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(16)}>16</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(17)}>17</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(18)}>18</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(19)}>19</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(20)}>20</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(21)}>21</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(22)}>22</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(23)}>23</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(24)}>24</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(25)}>25</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(26)}>26</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(27)}>27</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(28)}>28</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(29)}>29</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(30)}>30</Dropdown.Item>
                                    <Dropdown.Item variant="flat" className="dropdownFiltro" onClick={() => props.alteraDiaMes(31)}>31</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </span>
                        {props.parametros.tipologia === 'Informação' ?
                        <>
                        <p className="subtituloSeccaoPagina mt-2 mb-0">Data de fim <span className='obrigatorio'>*</span></p>
                        <p className='bigSmallSmall mb-1'>A data é preenchida no formato MM-DD-AAAA. A data também não pode ser anterior à data do dia atual.</p>
                        <span className="col-3">
                            <span className="row col-12 m-0">
                                <span className="col-12 m-0 p-0">
                                    <input type="date" className='inputsForms w-50' value={props.parametros.dataFim} onChange={props.mudaDataFim} style={{height: "37px"}}/>
                                </span>
                            </span>
                        </span>
                        </>
                        :
                        <>
                        <p className="subtituloSeccaoPagina mt-2">Hora <span className='obrigatorio'>*</span></p>
                        <span className="col-3">
                            <span className="col-3">
                                <input type="time" className='inputsForms without_ampm w-50' value={props.parametros.hora} onInput={props.mudaHora} onChange={props.mudaHora} style={{height: "37px"}}/>
                            </span>
                            <span className="col-3">
                                <p className="subtituloSeccaoPagina mt-2 mb-0">Data de fim <span className='obrigatorio'>*</span></p>
                                <p className='bigSmallSmall mb-1'>A data é preenchida no formato MM-DD-AAAA. A data também não pode ser anterior à data do dia atual.</p>
                                <span className="row col-12 m-0">
                                    <span className="col-12 m-0 p-0">
                                        <input type="date" className='inputsForms w-50' value={props.parametros.dataFim} onChange={props.mudaDataFim} style={{height: "37px"}}/>
                                    </span>
                                </span>
                            </span>
                        </span>
                        </>
                        }
                    </>
            }
            </>
            : 
            <></>
        }

        {props.parametros.momentoUnico === "Imediato" ?
        <></>
        :
        props.parametros.momentoUnico === "Hora do dia atual" ? 
        <>
            <p className="subtituloSeccaoPagina mt-2">Hora <span className='obrigatorio'>*</span></p>
            <span className="col-3">
                <input type="time" className='inputsForms without_ampm w-50' value={props.parametros.hora} onInput={props.mudaHora} onChange={props.mudaHora} style={{height: "37px"}}/>
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
                        <p className="subtituloSeccaoPagina mt-2">Escolha de dia <span className='obrigatorio'>*</span></p>
                        <Calendar 
                            className="m-0 p-0 w-100" 
                            onClickDay={props.mudaDiaUnico}
                            minDate={new Date()}/>
                    </span>
                    {props.parametros.tipologia === 'Informação' ?
                    <></>
                    :
                    <span className="col-12">
                        <p className="subtituloSeccaoPagina mt-1">Hora <span className='obrigatorio'>*</span></p>
                        <span className="row col-12">
                            <span className="col-3">
                                <input type="time" className='inputsForms without_ampm w-50' value={props.parametros.hora} onInput={props.mudaHora} onChange={props.mudaHora} style={{height: "37px"}}/>
                            </span> 
                        </span>
                    </span>
                    }
                </div>
                :
                <></>
                }
            </>
            }
        </>
        }
    </>  
    )
}

export default NotificationTimeSelection;

import React from 'react';
import {Form, Table, OverlayTrigger} from 'react-bootstrap';
import { BladeTooltip } from './Tooltips';
import InformationIcon from '../../Images/information.png';

export const DeliveryOptions = (props) => {
    return(
      <span className='m-0'>
        <Table className='w-100 m-0' striped bordered hover>
            <thead>
                <tr>
                    <th style={{textAlign: 'center'}}>Momento</th>
                    <th style={{textAlign: 'center'}}>Mensagem</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline
                            label='1 semana antes'
                            key='semanaAntes'
                            checked={props.momentos.semanaAntes.active}
                            value="semanaAntes"
                            className='py-1'
                            disabled={
                                props.tipo === 'Informação' 
                                || props.tipo === 'Programas' 
                                || props.tipo === 'Serviços' 
                                || props.tipo === 'Saúde'
                                || props.verificaMomento === 'Imediato'
                                || props.verificaMomento === 'Hora do dia atual' 
                                || props.periodicidade === 'Diária'
                                || props.periodicidade === 'Semanal' ? true : false
                            }
                            onChange={props.changeMomento}/>
                    </td>
                    <td className='tableRowEscolha'>
                        <input type="text" value={props.momentos.semanaAntes.message} placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.semanaAntes.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='semanaAntes' maxLength="50"/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='3 Dias antes'
                            key="dias3" 
                            checked={props.momentos.dias3.active}
                            value="dias3"
                            className='py-1'
                            disabled={
                                props.tipo === 'Informação' 
                                || props.tipo === 'Programas' 
                                || props.tipo === 'Serviços' 
                                || props.tipo === 'Saúde' 
                                || props.verificaMomento === 'Imediato' 
                                || props.verificaMomento === 'Hora do dia atual'
                                || props.periodicidade === 'Diária' ? true : false
                            }
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" value={props.momentos.dias3.message} placeholder='Mensagem do pop-up (Max. 50 carateres)' onChange={props.changeMensagem} className={props.momentos.dias3.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='dias3' maxLength="50"/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='Dia anterior - Na rotina de Boa Noite' 
                            key="diaAnterior" 
                            checked={props.momentos.diaAnterior.active}
                            value="diaAnterior"
                            className='py-1'
                            disabled={
                                props.tipo === 'Programas' 
                                || props.tipo === 'Serviços' 
                                || props.tipo === 'Saúde' 
                                || props.verificaMomento === 'Hora do dia atual'
                                || props.verificaMomento === 'Imediato' ? true : false
                            }
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" value={props.momentos.diaAnterior.message} placeholder='Mensagem do pop-up (Max. 50 carateres)' onChange={props.changeMensagem} className={props.momentos.diaAnterior.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='diaAnterior' maxLength="50"/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='No próprio dia - Na rotina de Bom Dia'
                            key="diaProprio" 
                            value="diaProprio"
                            checked={props.momentos.diaProprio.active}
                            className='py-1'
                            disabled={
                                props.tipo === 'Programas' 
                                || props.tipo === 'Serviços' 
                                || props.tipo === 'Saúde' 
                                || props.verificaMomento === 'Hora do dia atual'
                                || props.verificaMomento === 'Imediato' ? true : false
                            }
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" value={props.momentos.diaProprio.message} placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.diaProprio.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='diaProprio' maxLength="50"/>
                    </td>
                </tr>

                {/*<tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='No dia, em hora específica'
                            key="horaEspecifica" 
                            value="horaEspecifica"
                            className='py-1'
                            checked={props.momentos.horaEspecifica.active}
                            disabled={
                                props.tipo === 'Informação' 
                                || props.tipo === 'Programas' 
                                || props.tipo === 'Agenda' 
                                || props.subSaude === 'Inatividade' 
                                || props.subSaude === 'Ingestão de Líquidos' 
                                || props.subSaude === 'Medicação' 
                                || props.verificaMomento === 'Imediato' ? true : false
                            }
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" value={props.momentos.horaEspecifica.message} placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.horaEspecifica.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='horaEspecifica' maxLength="50"/>
                    </td>
                        </tr>*/}

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='Imediato'
                            key="imediato" 
                            value="imediato"
                            className='py-1'
                            checked={props.momentos.imediato.active}
                            disabled={
                                props.tipo === 'Informação' && props.verificaMomento !== 'Imediato'
                                || props.tipo === 'Programas' && props.verificaMomento !== 'Imediato'
                                || props.tipo === 'Serviços' && props.verificaMomento !== 'Imediato'
                                || props.tipo === 'Agenda' && props.verificaMomento !== 'Imediato'
                                || props.tipo === 'Saúde' && props.verificaMomento !== 'Imediato' ? true : false
                            }
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" value={props.momentos.imediato.message} placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.imediato.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='imediato' maxLength="50"/>
                    </td>
                </tr>

                {/*<tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='De 2 em 2 horas'
                            key="intervaloHoras" 
                            value="intervaloHoras"
                            checked={props.momentos.intervaloHoras.active}
                            className='py-1'
                            disabled={
                                props.tipo === 'Informação' 
                                || props.tipo === 'Programas' 
                                || props.tipo === 'Serviços' 
                                || props.tipo === 'Agenda' 
                                || props.subSaude === 'Medicação' 
                                || props.verificaMomento === 'Imediato'
                                || props.periodicidade === 'Diária' ? true : false
                            }
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" value={props.momentos.intervaloHoras.message} placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.intervaloHoras.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='intervaloHoras' maxLength="50"/>
                    </td>
                </tr>*/}

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='1 hora antes'
                            key="horaAntes" 
                            value="horaAntes"
                            checked={props.momentos.horaAntes.active}
                            className='py-1'
                            disabled={
                                props.tipo === 'Informação' 
                                || props.tipo === 'Programas' 
                                || props.tipo === 'Serviços' 
                                || props.tipo === 'Saúde'
                                || props.verificaMomento === 'Imediato' ? true : false
                            }
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" value={props.momentos.horaAntes.message} placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.horaAntes.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='horaAntes' maxLength="50"/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='30 minutos antes'
                            key="meiaHora" 
                            value="meiaHora"
                            checked={props.momentos.meiaHora.active}
                            className='py-1'
                            disabled={
                                props.tipo === 'Informação' 
                                || props.tipo === 'Programas'
                                || props.tipo === 'Saúde' 
                                || props.verificaMomento === 'Imediato' ? true : false
                            }
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <p className={props.momentos.meiaHora.active === true ? 'p-0 MessageSection' : 'p-0 BladeSectionDisabled'}>Mensagem do pop-up</p>
                        <input type="text" value={props.momentos.meiaHora.message} placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.meiaHora.active === true ? 'inputsForms w-100 pt-1' : 'inputsFormsDisabled'} id='meiaHora' maxLength="50"/>
                        <p className={props.momentos.meiaHora.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.meiaHora.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                        <input type="text" value={props.momentos.meiaHora.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.meiaHora.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='meiaHoraTituloBlade' maxLength="50"/>
                        <textarea rows={3} value={props.momentos.meiaHora.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.meiaHora.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='meiaHoraDescricaoBlade' maxLength="150"/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='15 minutos antes'
                            key="quartoHora" 
                            value="quartoHora"
                            checked={props.momentos.quartoHora.active}
                            className='py-1'
                            disabled={
                                props.tipo === 'Informação' 
                                || props.tipo === 'Programas' 
                                || props.tipo === 'Serviços' 
                                || props.verificaMomento === 'Imediato' ? true : false
                            }
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" value={props.momentos.quartoHora.message} placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.quartoHora.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='quartoHora' maxLength="50"/>
                        {props.tipo === 'Saúde' ? 
                        <>
                            <p className={props.momentos.quartoHora.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.quartoHora.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                            <input type="text" value={props.momentos.quartoHora.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.quartoHora.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='quartoHoraTituloBlade' maxLength="50"/>
                            <textarea rows={3} value={props.momentos.quartoHora.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.quartoHora.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='quartoHoraDescricaoBlade' maxLength="150"/>
                        </>
                        :
                        <></>}
                    </td>
                </tr> 

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='5 minutos antes' 
                            key="minutos5" 
                            value="minutos5"
                            className='py-1'
                            checked={props.momentos.minutos5.active}
                            disabled={
                                props.tipo === 'Informação' 
                                || props.tipo === 'Serviços' 
                                || props.tipo === 'Agenda' 
                                || props.tipo === 'Saúde'
                                || props.verificaMomento === 'Imediato' ? true : false
                            }
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" value={props.momentos.minutos5.message} placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.minutos5.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='minutos5' maxLength="50"/>
                    </td>
                </tr> 

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='No momento de acontecimento do evento' 
                            key="momentoAcontecimento" 
                            value="momentoAcontecimento"
                            checked={props.momentos.momentoAcontecimento.active}
                            className='py-1'
                            disabled={
                                props.tipo === 'Informação' 
                                || props.tipo === 'Agenda' 
                                || props.tipo === 'Serviços' 
                                || props.verificaMomento === 'Imediato' ? true : false
                            }
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" value={props.momentos.momentoAcontecimento.message} placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.momentoAcontecimento.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='momentoAcontecimento' maxLength="50"/>
                    </td>
                </tr> 
            </tbody>    
        </Table>
      </span>                                      
    ) 
}
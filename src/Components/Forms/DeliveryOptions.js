import React from 'react';
import {Form, Table} from 'react-bootstrap';

export const DeliveryOptions = (props) => {
    return(
      <span className='m-0'>
        <Table className='w-100 m-0' striped bordered hover>
            <thead>
                <th style={{textAlign: 'center'}}>Momento</th>
                <th style={{textAlign: 'center'}}>Mensagem</th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline
                            label='1 semana antes'
                            key="semanaAntes" 
                            value="semanaAntes"
                            className='py-1'
                            onChange={props.changeMomento}/>
                    </td>
                    <td className='tableRowEscolha'>
                        <input type="text" placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.semanaAntes.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='semanaAntes' maxLength="50"/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='3 Dias antes'
                            key="dias3" 
                            value="dias3"
                            className='py-1'
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" placeholder='Mensagem do pop-up (Max. 50 carateres)' onChange={props.changeMensagem} className={props.momentos.dias3.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='dias3' maxLength="50"/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='Dia anterior - Na rotina de Boa Noite' 
                            key="diaAnterior" 
                            value="diaAnterior"
                            className='py-1'
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" placeholder='Mensagem do pop-up (Max. 50 carateres)' onChange={props.changeMensagem} className={props.momentos.diaAnterior.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='diaAnterior' maxLength="50"/>
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
                            className='py-1'
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.diaProprio.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='diaProprio' maxLength="50"/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='No dia, em hora específica'
                            key="horaEspecifica" 
                            value="horaEspecifica"
                            className='py-1'
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.horaEspecifica.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='horaEspecifica' maxLength="50"/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='Imediato'
                            key="imediato" 
                            value="imediato"
                            className='py-1'
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.imediato.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='imediato' maxLength="50"/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='De 2 em 2 horas'
                            key="intervaloHoras" 
                            value="intervaloHoras"
                            className='py-1'
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.intervaloHoras.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='intervaloHoras' maxLength="50"/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <Form.Check 
                            type="checkbox" 
                            inline 
                            label='1 hora antes'
                            key="horaAntes" 
                            value="horaAntes"
                            className='py-1'
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.horaAntes.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='horaAntes' maxLength="50"/>
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
                            className='py-1'
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <p className={props.momentos.meiaHora.active === true ? 'p-0 MessageSection' : 'p-0 BladeSectionDisabled'}>Mensagem do pop-up</p>
                        <input type="text" placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.meiaHora.active === true ? 'inputsForms w-100 pt-1' : 'inputsFormsDisabled'} id='meiaHora' maxLength="50"/>
                        <p className={props.momentos.meiaHora.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'}>Blade horizontal</p>
                        <input type="text" placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.meiaHora.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='meiaHoraTituloBlade' maxLength="50"/>
                        <textarea rows={3} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.meiaHora.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='meiaHoraDescricaoBlade' maxLength="150"/>
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
                            className='py-1'
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.quartoHora.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='quartoHora' maxLength="50"/>
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
                            onChange={props.changeMomento}/>
                    </td>
                    <td>
                        <input type="text" placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.minutos5.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='minutos5' maxLength="50"/>
                    </td>
                </tr> 
            </tbody>    
        </Table>
      </span>                                      
    ) 
}
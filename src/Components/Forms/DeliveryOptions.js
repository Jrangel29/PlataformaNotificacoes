import React from 'react';
import {Form, Table, OverlayTrigger} from 'react-bootstrap';
import { BladeTooltip } from './Tooltips';
import InformationIcon from '../../Images/information.png';
import { Dropdown } from 'react-bootstrap';

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
                        {props.tipo === 'Personalizada' ?
                            <p className={props.momentos.semanaAntes.active === true ? 'p-0 MessageSection' : 'p-0 BladeSectionDisabled'}>Mensagem do pop-up</p>
                            :
                            <></>
                        }
                        <input type="text" value={props.momentos.semanaAntes.message} placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.semanaAntes.active === true ? 'inputsForms w-100 py-1' : 'inputsFormsDisabled'} id='semanaAntes' maxLength="50"/>
                        {props.tipo === 'Personalizada' && props.momentos.semanaAntes.active === true ? 
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownMomento mt-2'>
                                    {props.momentos.semanaAntes.persVal === true ? 'Tem blade' : 'Não tem blade'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => props.persChange('semanaAntes', true)}>Tem blade</Dropdown.Item>
                                    <Dropdown.Item onClick={() => props.persChange('semanaAntes', false)}>Não tem blade</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {props.momentos.semanaAntes.persVal === true ?
                            <>
                                <p className={props.momentos.semanaAntes.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.semanaAntes.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                <input type="text" value={props.momentos.semanaAntes.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.semanaAntes.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='semanaAntesTituloBlade' maxLength="50"/>
                                <textarea rows={3} value={props.momentos.semanaAntes.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.semanaAntes.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='semanaAntesDescricaoBlade' maxLength="150"/>
                            </>
                            :
                            <></>}
                        </>
                        :
                        <></>
                        }
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
                        {props.tipo === 'Personalizada' && props.momentos.dias3.active === true ? 
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownMomento mt-2'>
                                    {props.momentos.dias3.persVal === true ? 'Tem blade' : 'Não tem blade'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => props.persChange('dias3', true)}>Tem blade</Dropdown.Item>
                                    <Dropdown.Item onClick={() => props.persChange('dias3', false)}>Não tem blade</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {props.momentos.dias3.persVal === true ?
                            <>
                                <p className={props.momentos.dias3.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.dias3.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                <input type="text" value={props.momentos.dias3.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.dias3.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='dias3TituloBlade' maxLength="50"/>
                                <textarea rows={3} value={props.momentos.dias3.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.dias3.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='dias3DescricaoBlade' maxLength="150"/>
                            </>
                            :
                            <></>}
                        </>
                        :
                        <></>
                        }
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
                        {props.tipo === 'Personalizada' && props.momentos.diaAnterior.active === true ? 
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownMomento mt-2'>
                                    {props.momentos.diaAnterior.persVal === true ? 'Tem blade' : 'Não tem blade'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => props.persChange('diaAnterior', true)}>Tem blade</Dropdown.Item>
                                    <Dropdown.Item onClick={() => props.persChange('diaAnterior', false)}>Não tem blade</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {props.momentos.diaAnterior.persVal === true ?
                            <>
                                <p className={props.momentos.diaAnterior.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.diaAnterior.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                <input type="text" value={props.momentos.diaAnterior.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.diaAnterior.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='diaAnteriorTituloBlade' maxLength="50"/>
                                <textarea rows={3} value={props.momentos.diaAnterior.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.diaAnterior.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='diaAnteriorDescricaoBlade' maxLength="150"/>
                            </>
                            :
                            <></>}
                        </>
                        :
                        <></>
                        }
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
                        {props.tipo === 'Personalizada' && props.momentos.diaProprio.active === true ? 
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownMomento mt-2'>
                                    {props.momentos.diaProprio.persVal === true ? 'Tem blade' : 'Não tem blade'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => props.persChange('diaProprio', true)}>Tem blade</Dropdown.Item>
                                    <Dropdown.Item onClick={() => props.persChange('diaProprio', false)}>Não tem blade</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {props.momentos.diaProprio.persVal === true ?
                            <>
                                <p className={props.momentos.diaProprio.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.diaProprio.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                <input type="text" value={props.momentos.diaProprio.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.diaProprio.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='diaProprioTituloBlade' maxLength="50"/>
                                <textarea rows={3} value={props.momentos.diaProprio.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.diaProprio.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='diaProprioDescricaoBlade' maxLength="150"/>
                            </>
                            :
                            <></>}
                        </>
                        :
                        <></>
                        }
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
                        {props.tipo === 'Programas' ?
                            <>
                                <p className={props.momentos.imediato.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.imediato.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                <input type="text" value={props.momentos.imediato.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.imediato.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='imediatoTituloBlade' maxLength="50"/>
                                <textarea rows={3} value={props.momentos.imediato.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.imediato.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='imediatoDescricaoBlade' maxLength="150"/>
                            </>
                            :
                            <></>
                        }
                        {props.tipo === 'Personalizada' && props.momentos.imediato.active === true ? 
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownMomento mt-2'>
                                    {props.momentos.imediato.persVal === true ? 'Tem blade' : 'Não tem blade'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => props.persChange('imediato', true)}>Tem blade</Dropdown.Item>
                                    <Dropdown.Item onClick={() => props.persChange('imediato', false)}>Não tem blade</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {props.momentos.imediato.persVal === true ?
                            <>
                                <p className={props.momentos.imediato.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.imediato.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                <input type="text" value={props.momentos.imediato.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.imediato.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='imediatoTituloBlade' maxLength="50"/>
                                <textarea rows={3} value={props.momentos.imediato.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.imediato.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='imediatoDescricaoBlade' maxLength="150"/>
                            </>
                            :
                            <></>}
                        </>
                        :
                        <></>
                        }
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
                        {props.tipo === 'Personalizada' && props.momentos.horaAntes.active === true ? 
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownMomento mt-2'>
                                    {props.momentos.horaAntes.persVal === true ? 'Tem blade' : 'Não tem blade'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => props.persChange('horaAntes', true)}>Tem blade</Dropdown.Item>
                                    <Dropdown.Item onClick={() => props.persChange('horaAntes', false)}>Não tem blade</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {props.momentos.horaAntes.persVal === true ?
                            <>
                                <p className={props.momentos.horaAntes.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.horaAntes.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                <input type="text" value={props.momentos.horaAntes.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.horaAntes.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='horaAntesTituloBlade' maxLength="50"/>
                                <textarea rows={3} value={props.momentos.horaAntes.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.horaAntes.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='horaAntesDescricaoBlade' maxLength="150"/>
                            </>
                            :
                            <></>}
                        </>
                        :
                        <></>
                        }
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
                        {props.tipo !== 'Serviços' ?
                        <p className={props.momentos.meiaHora.active === true ? 'p-0 MessageSection' : 'p-0 BladeSectionDisabled'}>Mensagem do pop-up</p>
                        :
                        <></>
                        }
                        <input type="text" value={props.momentos.meiaHora.message} placeholder='Mensagem do pop-up (Max. 50 caracteres)' onChange={props.changeMensagem} className={props.momentos.meiaHora.active === true ? 'inputsForms w-100 pt-1' : 'inputsFormsDisabled'} id='meiaHora' maxLength="50"/>
                        {props.tipo !== 'Serviços' ? 
                        <>
                            <p className={props.momentos.meiaHora.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.meiaHora.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                            <input type="text" value={props.momentos.meiaHora.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.meiaHora.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='meiaHoraTituloBlade' maxLength="50"/>
                            <textarea rows={3} value={props.momentos.meiaHora.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.meiaHora.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='meiaHoraDescricaoBlade' maxLength="150"/>
                        </>
                        :
                        <></>
                        }
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
                        {props.tipo === 'Personalizada' && props.momentos.quartoHora.active === true ? 
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownMomento mt-2'>
                                    {props.momentos.quartoHora.persVal === true ? 'Tem blade' : 'Não tem blade'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => props.persChange('quartoHora', true)}>Tem blade</Dropdown.Item>
                                    <Dropdown.Item onClick={() => props.persChange('quartoHora', false)}>Não tem blade</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {props.momentos.quartoHora.persVal === true ?
                            <>
                                <p className={props.momentos.quartoHora.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.quartoHora.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                <input type="text" value={props.momentos.quartoHora.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.quartoHora.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='quartoHoraTituloBlade' maxLength="50"/>
                                <textarea rows={3} value={props.momentos.quartoHora.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.quartoHora.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='quartoHoraDescricaoBlade' maxLength="150"/>
                            </>
                            :
                            <></>}
                        </>
                        :
                        <></>
                        }
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
                        {props.tipo === 'Programas' ?
                            <>
                                <p className={props.momentos.minutos5.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.minutos5.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                <input type="text" value={props.momentos.minutos5.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.minutos5.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='minutos5TituloBlade' maxLength="50"/>
                                <textarea rows={3} value={props.momentos.minutos5.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.minutos5.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='minutos5DescricaoBlade' maxLength="150"/>
                            </>
                            :
                            <></>
                        }
                        {props.tipo === 'Personalizada' && props.momentos.minutos5.active === true ? 
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownMomento mt-2'>
                                    {props.momentos.minutos5.persVal === true ? 'Tem blade' : 'Não tem blade'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => props.persChange('minutos5', true)}>Tem blade</Dropdown.Item>
                                    <Dropdown.Item onClick={() => props.persChange('minutos5', false)}>Não tem blade</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {props.momentos.minutos5.persVal === true ?
                            <>
                                <p className={props.momentos.minutos5.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.minutos5.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                <input type="text" value={props.momentos.minutos5.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.minutos5.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='minutos5TituloBlade' maxLength="50"/>
                                <textarea rows={3} value={props.momentos.minutos5.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.minutos5.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='minutos5DescricaoBlade' maxLength="150"/>
                            </>
                            :
                            <></>}
                        </>
                        :
                        <></>
                        }
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
                        {props.tipo === 'Programas' ?
                            <>
                                <p className={props.momentos.momentoAcontecimento.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.momentoAcontecimento.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                <input type="text" value={props.momentos.momentoAcontecimento.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.momentoAcontecimento.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='momentoAcontecimentoTituloBlade' maxLength="50"/>
                                <textarea rows={3} value={props.momentos.momentoAcontecimento.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.momentoAcontecimento.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='momentoAcontecimentoDescricaoBlade' maxLength="150"/>
                            </>
                            :
                            <></>
                        }
                        {props.tipo === 'Personalizada' && props.momentos.momentoAcontecimento.active === true ? 
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="flat" className='dropdownMomento mt-2'>
                                    {props.momentos.momentoAcontecimento.persVal === true ? 'Tem blade' : 'Não tem blade'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropdownFiltro'>
                                    <Dropdown.Item onClick={() => props.persChange('momentoAcontecimento', true)}>Tem blade</Dropdown.Item>
                                    <Dropdown.Item onClick={() => props.persChange('momentoAcontecimento', false)}>Não tem blade</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {props.momentos.momentoAcontecimento.persVal === true ?
                            <>
                                <p className={props.momentos.momentoAcontecimento.active === true ? 'p-0 BladeSection' : 'p-0 BladeSectionDisabled'} style={props.momentos.momentoAcontecimento.active === true ? {display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2px'} : null}>Blade horizontal <OverlayTrigger placement='right' delay={{ show: 250, hide: 400}} overlay={BladeTooltip}><img src={InformationIcon} style={{width: 'auto', height: '16px', margin: '0', marginLeft:'10px', padding: '0'}}/></OverlayTrigger></p>
                                <input type="text" value={props.momentos.momentoAcontecimento.tituloBlade} placeholder='Título do blade (Max. 50 caracteres)' onChange={props.blade} className={props.momentos.momentoAcontecimento.active === true ? 'inputsForms w-100' : 'inputsFormsDisabled'} id='momentoAcontecimentoTituloBlade' maxLength="50"/>
                                <textarea rows={3} value={props.momentos.momentoAcontecimento.descricao} placeholder='Descrição do blade (Max. 150 caracteres)' onChange={props.blade} className={props.momentos.momentoAcontecimento.active === true ? 'inputsForms mt-2 w-100 pb-1' : 'inputsFormsDisabled mt-2'} id='momentoAcontecimentoDescricaoBlade' maxLength="150"/>
                            </>
                            :
                            <></>}
                        </>
                        :
                        <></>
                        }
                    </td>
                </tr> 
            </tbody>    
        </Table>
      </span>                                      
    ) 
}
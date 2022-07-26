import React, {useState, useEffect} from 'react';
import '../../Styles/Cards.css';
import { PieChartNotiList, PieChartNotiList2 } from '../Charts/PieChart';
import { Table } from 'react-bootstrap'

const Stats = (props) => {
    const [estatiticas, setEstatisticas] = useState([
        {
            name: 'Fechou',
            value: 0
        },
        {
            name: 'Abriu',
            value: 0
        },
        {
            name: 'Recebeu',
            value: 0
        },
        {
            name: 'Enviou',
            value: 0
        },
        {
            name: 'Canal',
            value: 0
        },
        {
            name: 'Relembrou',
            value: 0
        },
        {
            name: 'FechouProg',
            value: 0
        },
        {
            name: 'FechouRel',
            value: 0
        },
    ])

    useEffect(() => {

        var fechou = 0;
        var abriu = 0;
        var relembrou = 0;
        var canal = 0;
        var enviou = 0;
        var recebeu = 0;
        var fechouProg = 0;
        var fechouRel = 0;
        
        props.items.map(item => {
            if(item.enviado.data[0] !== 0){
                enviou++;
            }
            if(item.recebido.data[0] !== 0){
                recebeu++;
                if(item.fechou.data[0] !== 0){
                    if(item.ref_id_tipologia === 2){
                        fechouProg++;
                    }
                    if(item.ref_id_tipologia === 1 || item.ref_id_tipologia === 4) {
                        fechouRel++;
                    }
                    fechou++;
                } else {
                    if(item.ref_id_tipologia === 2){
                        canal++;
                    }
                    if(item.ref_id_tipologia === 1 || item.ref_id_tipologia === 4) {
                        relembrou++;
                    }
                    abriu++
                }
            }
        })
        
        setEstatisticas([
            {
                name: 'Fechou',
                value: fechou
            },
            {
                name: 'Abriu',
                value: abriu
            },
            {
                name: 'Recebeu',
                value: recebeu
            },
            {
                name: 'Enviou',
                value: enviou
            },
            {
                name: 'Canal',
                value: canal
            },
            {
                name: 'Relembrou',
                value: relembrou
            },
            {
                name: 'FechouProg',
                value: fechouProg
            },
            {
                name: 'FechouRel',
                value: fechouRel
            },
        ])
    }, [props.items])

    console.log(estatiticas)

    return(
        <>
            <div className='m-0 p-0 inicioPagina'>
                <h1 className='estatisticasPagina'>Estatísticas</h1>
            </div>
            <div className='m-0 p-0 inicioPagina'>
                <h3 className='estatisticasPaginaSub'>Gerais</h3>
            </div>
            <div className='row m-0 p-0 justify-content-center'>
                <span className='col-5 p-0'>
                    <Table striped bordered hover className='tabelaHistorico2'>
                        <thead>
                            <tr>
                                <th style={{fontSize: '16px'}}>Envio/Receção da notificação</th>
                                <th style={{fontSize: '16px'}}>Contagem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{fontSize: '14px'}}>A notificação foi enviada.</td>
                                <td style={{fontSize: '14px'}}>{estatiticas[3].value}</td>
                            </tr>
                            <tr>
                                <td style={{fontSize: '14px'}}>A notificação foi recebida.</td>
                                <td style={{fontSize: '14px'}}>{estatiticas[2].value}</td>
                            </tr>
                        </tbody>
                    </Table>
                </span>
                <span className='col-5 offset-1 p-0'>
                    <Table striped bordered hover className='tabelaHistorico2'>
                        <thead>
                            <tr>
                                <th style={{fontSize: '16px'}}>Interação</th>
                                <th style={{fontSize: '16px'}}>Contagem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{fontSize: '14px'}}>A notificação foi fechada.</td>
                                <td style={{fontSize: '14px'}}>{estatiticas[0].value}</td>
                            </tr>
                            <tr>
                                <td style={{fontSize: '14px'}}>A notificação obteve resposta.</td>
                                <td style={{fontSize: '14px'}}>{estatiticas[1].value}</td>
                            </tr>
                        </tbody>
                    </Table>
                </span>
            </div>
            <div className='row m-0 p-0 justify-content-center'>
                <PieChartNotiList info={estatiticas}/>
            </div>
            <div className='m-0 p-0 inicioPagina'>
                <h3 className='estatisticasPaginaSub'>Específicas</h3>
            </div>
            <div className='row m-0 p-0 justify-content-center'>
                <span className='col-5 p-0'>
                    <Table striped bordered hover className='tabelaHistorico2'>
                        <thead>
                            <tr>
                                <th style={{fontSize: '16px'}}>Fechou vs Adiou notificação</th>
                                <th style={{fontSize: '16px'}}>Contagem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{fontSize: '14px'}}>A notificação foi fechada.</td>
                                <td style={{fontSize: '14px'}}>{estatiticas[7].value}</td>
                            </tr>
                            <tr>
                                <td style={{fontSize: '14px'}}>A notificação foi adiada.</td>
                                <td style={{fontSize: '14px'}}>{estatiticas[5].value}</td>
                            </tr>
                        </tbody>
                    </Table>
                </span>
                <span className='col-5 offset-1 p-0'>
                    <Table striped bordered hover className='tabelaHistorico2'>
                        <thead>
                            <tr>
                                <th style={{fontSize: '16px'}}>Fechou vs Foi para o canal</th>
                                <th style={{fontSize: '16px'}}>Contagem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{fontSize: '14px'}}>A notificação foi fechada.</td>
                                <td style={{fontSize: '14px'}}>{estatiticas[6].value}</td>
                            </tr>
                            <tr>
                                <td style={{fontSize: '14px'}}>O espectador foi para o canal.</td>
                                <td style={{fontSize: '14px'}}>{estatiticas[4].value}</td>
                            </tr>
                        </tbody>
                    </Table>
                </span>
                <div className='row m-0 p-0 justify-content-center'>
                    <PieChartNotiList2 info={estatiticas}/>
                </div>
            </div>
        </>
    )
}

export default Stats;
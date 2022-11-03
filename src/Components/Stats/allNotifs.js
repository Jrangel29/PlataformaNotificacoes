import React, {useState, useEffect} from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Card } from 'react-bootstrap';
import '../../Styles/Cards.css'

var dataInicio = new Date();
dataInicio.setFullYear(2022);
dataInicio.setMonth(6);
dataInicio.setDate(17);
dataInicio.setHours(0, 0, 0);

var dataFim = new Date();
dataFim.setFullYear(2022);
dataFim.setMonth(8);
dataFim.setDate(1);
dataFim.setHours(0, 0, 0);

export const AllNotifications = (props) => {

    const [estatisticas, setEstatisticas] = useState([0, 0, 0])

    useEffect(() => {
        var total = 0;
        var recebidas = 0;
        var naoRecebidas = 0;
        
        if(props.geral === true) {
            props.stats.map(item => {
                var dataItem = new Date(item.data);
                if(dataItem > dataInicio && dataItem < dataFim){
                    if(item.recebido.data[0] !== 0){
                        recebidas++;
                    } else {
                        naoRecebidas++;
                    }
                }
            })
            setEstatisticas([recebidas+naoRecebidas, recebidas, naoRecebidas])
        } else {
            props.pessoas.map(pessoa => {
                props.stats.map(item => {
                    var dataItem = new Date(item.data);
                    if(dataItem > dataInicio && dataItem < dataFim){
                        if(item.ref_id_utilizador === pessoa.id_utilizador) {
                            if(item.recebido.data[0] !== 0){
                                recebidas++;
                            } else {
                                naoRecebidas++;
                            }
                        }
                    }
                })
            })
            setEstatisticas([recebidas+naoRecebidas, recebidas, naoRecebidas])
        }
    }, [])

    var percentagem1 = Math.round((estatisticas[1]/estatisticas[0]) * 100);
    var percentagem2 = Math.round((estatisticas[2]/estatisticas[0]) * 100);

    return(
        <Card style={{width: '30%', marginTop: '20px', marginRight: '10px', marginLeft: '10px'}}>
            <Card.Body className='m-0 cartaGrupos'>
                <p className='tituloCardEstatisticas' style={{textAlign: 'center'}}>Todas as notificações</p>
                <div className='mb-1 mt-1 p-0'>
                    <Pie
                        data={{
                            labels: ['% Recebidas', '% Não Recebidas'],
                            datasets: [{
                                data: [percentagem1, percentagem2],
                                backgroundColor: ['#B7F9B6', '#f9b6b6'],
                                borderWidth: 0
                            }]
                        }}
                        height={150}
                        width={150}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                            animation: {
                                duration: 100
                            },
                            plugins: {
                                legend: {
                                    labels: {
                                        family: 'Roboto',
                                        size: 14,
                                    },
                                    display: true
                                },
                            }
                        }}
                    />
                </div>
            </Card.Body>
            <Card.Footer className='p-0'>
                <div className='m-0 p-0' style={{paddingRight: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: 'lightgrey'}}>Criadas: <br/><b>{estatisticas[0]}</b></span>
                    <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: '#B7F9B6'}}>Recebidas: <br/><b>{estatisticas[1]}</b></span>
                    <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: '#f9b6b6'}}>Não recebidas: <br/><b>{estatisticas[2]}</b></span>
                </div>
            </Card.Footer>
        </Card>
    )
    
}

export const AllNotificationsDiaNoite = (props) => {
    
    const [estatisticas, setEstatisticas] = useState([0, 0, 0])
    
    useEffect(() => {
        var total = 0;
        var bomDia = 0;
        var boaNoite = 0;

        if(props.geral ===  true) {
            props.stats.map(item => {
                var dataItem = new Date(item.data);
                if(dataItem > dataInicio && dataItem < dataFim){
                    if(item.ref_id_rotinas === 1){
                        total++;
                        bomDia++;
                    } else if (item.ref_id_rotinas === 2) {
                        total++;
                        boaNoite++;
                    }
                }
            })
            setEstatisticas([total, bomDia, boaNoite])
        } else {
            props.pessoas.map(pessoa => {
                props.stats.map(item => {
                    var dataItem = new Date(item.data);
                    if(dataItem > dataInicio && dataItem < dataFim){
                        if(item.ref_id_rotinas === 1 && item.ref_id_utilizador === pessoa.id_utilizador){
                            total++;
                            bomDia++;
                        } else if (item.ref_id_rotinas === 2 && item.ref_id_utilizador === pessoa.id_utilizador) {
                            total++;
                            boaNoite++;
                        }
                    }
                })
                setEstatisticas([total, bomDia, boaNoite])
            })
        }
    }, [])
    
    var percentagem1 = Math.round((estatisticas[1]/estatisticas[0]) * 100);
    var percentagem2 = Math.round((estatisticas[2]/estatisticas[0]) * 100);

    return(
        <Card style={{width: '30%', marginTop: '20px', marginRight: '10px', marginLeft: '10px'}}>
            <Card.Body className='m-0 cartaGrupos'>
                <p className='tituloCardEstatisticas' style={{textAlign: 'center'}}>Notificações de Bom Dia e Boa Noite criadas</p>
                <div className='mb-1 mt-1 p-0'>
                    <Pie
                        data={{
                            labels: ['% Bom Dia', '% Boa Noite'],
                            datasets: [{
                                data: [percentagem1, percentagem2],
                                backgroundColor: ['#B7F9B6', '#f9b6b6'],
                                borderWidth: 0
                            }]
                        }}
                        height={150}
                        width={150}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                            animation: {
                                duration: 100
                            },
                            plugins: {
                                legend: {
                                    labels: {
                                        family: 'Roboto',
                                        size: 14,
                                    },
                                    display: true
                                },
                            }
                        }}
                    />
                </div>
            </Card.Body>
            <Card.Footer className='p-0'>
                <div className='m-0 p-0' style={{paddingRight: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: 'lightgrey'}}>Criadas: <br/><b>{estatisticas[0]}</b></span>
                    <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: '#B7F9B6'}}>Criadas Bom Dia: <br/><b>{estatisticas[1]}</b></span>
                    <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: '#f9b6b6'}}>Criadas Boa Noite: <br/><b>{estatisticas[2]}</b></span>
                </div>
            </Card.Footer>
        </Card>
    )
    
}

export const AllNotificationsBomDia = (props) => {
    
    const [estatisticas, setEstatisticas] = useState([0, 0, 0])
    
    useEffect(() => {
        var total = 0;
        var recebidas = 0;
        var naoRecebidas = 0;

        if(props.geral === true){
            props.stats.map(item => {
                var dataItem = new Date(item.data);
                if(dataItem > dataInicio && dataItem < dataFim){
                    if(item.ref_id_rotinas === 1){
                        total++;
                        if(item.recebido.data[0] !== 0){
                            recebidas++;
                        } else {
                            naoRecebidas++;
                        }
                    }
                }
            })
            setEstatisticas([total, recebidas, naoRecebidas])
        } else{
            props.pessoas.map(pessoa => {
                props.stats.map(item => {
                    var dataItem = new Date(item.data);
                    if(dataItem > dataInicio && dataItem < dataFim){
                        if(item.ref_id_rotinas === 1 && item.ref_id_utilizador === pessoa.id_utilizador){
                            total++;
                            if(item.recebido.data[0] !== 0){
                                recebidas++;
                            } else {
                                naoRecebidas++;
                            }
                        }
                    }
                })
                setEstatisticas([total, recebidas, naoRecebidas])
            })
        }
    }, [])

    var percentagem1 = Math.round((estatisticas[1]/estatisticas[0]) * 100);
    var percentagem2 = Math.round((estatisticas[2]/estatisticas[0]) * 100);

    return(
        <Card style={{width: '30%', marginTop: '20px', marginRight: '10px', marginLeft: '10px'}}>
            <Card.Body className='m-0 cartaGrupos'>
                <p className='tituloCardEstatisticas' style={{textAlign: 'center'}}>Notificações de Bom dia</p>
                <div className='mb-1 mt-1 p-0'>
                    <Pie
                        data={{
                            labels: ['% Recebidas', '% Não Recebidas'],
                            datasets: [{
                                data: [percentagem1, percentagem2],
                                backgroundColor: ['#B7F9B6', '#f9b6b6'],
                                borderWidth: 0
                            }]
                        }}
                        height={150}
                        width={150}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                            animation: {
                                duration: 100
                            },
                            plugins: {
                                legend: {
                                    labels: {
                                        family: 'Roboto',
                                        size: 14,
                                    },
                                    display: true
                                },
                            }
                        }}
                    />
                </div>
            </Card.Body>
            <Card.Footer className='p-0'>
                <div className='m-0 p-0' style={{paddingRight: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: 'lightgrey'}}>Criadas: <br/><b>{estatisticas[0]}</b></span>
                    <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: '#B7F9B6'}}>Recebidas: <br/><b>{estatisticas[1]}</b></span>
                    <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: '#f9b6b6'}}>Não Recebidas: <br/><b>{estatisticas[2]}</b></span>
                </div>
            </Card.Footer>
        </Card>
    )
    
}

export const AllNotificationsBoaNoite = (props) => {
    
    const [estatisticas, setEstatisticas] = useState([0, 0, 0])
    
    useEffect(() => {
        var total = 0;
        var recebidas = 0;
        var naoRecebidas = 0;

        if(props.geral === true){
            props.stats.map(item => {
                var dataItem = new Date(item.data);
                if(dataItem > dataInicio && dataItem < dataFim){
                    if(item.ref_id_rotinas === 2){
                        total++;
                        if(item.recebido.data[0] !== 0){
                            recebidas++;
                        } else {
                            naoRecebidas++;
                        }
                    }
                }
            })
            setEstatisticas([total, recebidas, naoRecebidas])
        } else{
            props.pessoas.map(pessoa => {
                props.stats.map(item => {
                    var dataItem = new Date(item.data);
                    if(dataItem > dataInicio && dataItem < dataFim){
                        if(item.ref_id_rotinas === 2 && item.ref_id_utilizador === pessoa.id_utilizador){
                            total++;
                            if(item.recebido.data[0] !== 0){
                                recebidas++;
                            } else {
                                naoRecebidas++;
                            }
                        }
                    }
                })
                setEstatisticas([total, recebidas, naoRecebidas])
            })
        }
    }, [])

    var percentagem1 = Math.round((estatisticas[1]/estatisticas[0]) * 100);
    var percentagem2 = Math.round((estatisticas[2]/estatisticas[0]) * 100);

    return(
        <Card style={{width: '30%', marginTop: '20px', marginRight: '10px', marginLeft: '10px'}}>
            <Card.Body className='m-0 cartaGrupos'>
                <p className='tituloCardEstatisticas' style={{textAlign: 'center'}}>Notificações de Boa Noite</p>
                <div className='mb-1 mt-1 p-0'>
                    <Pie
                        data={{
                            labels: ['% Recebidas', '% Não Recebidas'],
                            datasets: [{
                                data: [percentagem1, percentagem2],
                                backgroundColor: ['#B7F9B6', '#f9b6b6'],
                                borderWidth: 0
                            }]
                        }}
                        height={150}
                        width={150}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                            animation: {
                                duration: 100
                            },
                            plugins: {
                                legend: {
                                    labels: {
                                        family: 'Roboto',
                                        size: 14,
                                    },
                                    display: true
                                },
                            }
                        }}
                    />
                </div>
            </Card.Body>
            <Card.Footer className='p-0'>
                <div className='m-0 p-0' style={{paddingRight: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: 'lightgrey'}}>Criadas: <br/><b>{estatisticas[0]}</b></span>
                    <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: '#B7F9B6'}}>Recebidas: <br/><b>{estatisticas[1]}</b></span>
                    <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: '#f9b6b6'}}>Não Recebidas: <br/><b>{estatisticas[2]}</b></span>
                </div>
            </Card.Footer>
        </Card>
    )
    
}
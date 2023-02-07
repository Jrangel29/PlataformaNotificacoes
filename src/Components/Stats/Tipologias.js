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

export const TipologiaStats = (props) => {
    
    const [estatisticas, setEstatisticas] = useState([0, 0, 0, 0, 0, 0, 0])
    
    useEffect(() => {
        var total = 0;
        var recebidas = 0;
        var naoRecebidas = 0;
        var bomDiaRecebidas = 0;
        var bomDiaNaoRecebidas = 0;
        var boaNoiteRecebidas = 0;
        var boaNoiteNaoRecebidas = 0;

        var totalInfo = 0;
        var recebidasInfo = 0;
        var naoRecebidasInfo = 0;
        var bomDiaRecebidasInfo = 0;
        var bomDiaNaoRecebidasInfo = 0;
        var boaNoiteRecebidasInfo = 0;
        var boaNoiteNaoRecebidasInfo = 0;

        if(props.geral === true){
            props.stats.map(item => {
                var dataItem = new Date(item.data);
                if(dataItem > dataInicio && dataItem < dataFim && item.ref_id_utilizador !== 1){
                    // Primeiro verifica as que não são info ou personalizada 
                    // Depois verifica se é personalizada e sem bom dia ou boa noite e depois verifica as de informação + rotina de bom dia e boa noite
                    if(item.ref_id_tipologia !== 6 && item.ref_id_tipologia !== 3){
                        if(item.ref_id_tipologia === props.valor){
                            total++;
                            if(item.recebido.data[0] !== 0){
                                recebidas++;
                                if(item.ref_id_rotinas === 1){
                                    bomDiaRecebidas++;
                                } else if(item.ref_id_rotinas === 2){
                                    boaNoiteRecebidas++;
                                }
                            } else {
                                naoRecebidas++;
                                if(item.ref_id_rotinas === 1){
                                    bomDiaNaoRecebidas++;
                                } else if(item.ref_id_rotinas === 2){
                                    boaNoiteNaoRecebidas++;
                                }
                            }
                        }
                    } else if (item.ref_id_tipologia === 3 || item.ref_id_tipologia === 6){
                        if(item.ref_id_tipologia === 6 && item.ref_id_tipologia === props.valor && item.id_eventos !== 1 && item.id_eventos !== 2){
                            total++;
                            if(item.recebido.data[0] !== 0){
                                recebidas++;
                                if(item.ref_id_rotinas === 1){
                                    bomDiaRecebidas++;
                                } else if(item.ref_id_rotinas === 2){
                                    boaNoiteRecebidas++;
                                }
                            } else {
                                naoRecebidas++;
                                if(item.ref_id_rotinas === 1){
                                    bomDiaNaoRecebidas++;
                                } else if(item.ref_id_rotinas === 2){
                                    boaNoiteNaoRecebidas++;
                                }
                            }
                        } else if (item.ref_id_tipologia === 3 && item.ref_id_tipologia === props.valor || item.ref_id_tipologia === 6 && item.id_eventos === 1 || item.ref_id_tipologia === 6 && item.id_eventos === 2){
                            totalInfo++;
                            if(item.recebido.data[0] !== 0){
                                recebidasInfo++;
                                if(item.ref_id_rotinas === 1){
                                    bomDiaRecebidasInfo++;
                                } else if(item.ref_id_rotinas === 2){
                                    boaNoiteRecebidasInfo++;
                                }
                            } else {
                                naoRecebidasInfo++;
                                if(item.ref_id_rotinas === 1){
                                    bomDiaNaoRecebidasInfo++;
                                } else if(item.ref_id_rotinas === 2){
                                    boaNoiteNaoRecebidasInfo++;
                                }
                            }
                        }
                    }
                }
            })
    
            if(props.valor !== 3){
                setEstatisticas([total, recebidas, naoRecebidas, bomDiaRecebidas, bomDiaNaoRecebidas, boaNoiteRecebidas, boaNoiteNaoRecebidas])
            } else {
                setEstatisticas([totalInfo, recebidasInfo, naoRecebidasInfo, bomDiaRecebidasInfo, bomDiaNaoRecebidasInfo, boaNoiteRecebidasInfo, boaNoiteNaoRecebidasInfo ])
            }
        } else {
            props.pessoas.map(pessoa => {
                props.stats.map(item => {
                    if(item.ref_id_utilizador === pessoa.id_utilizador){
                        var dataItem = new Date(item.data);
                        if(dataItem > dataInicio && dataItem < dataFim){
                            // Primeiro verifica as que não são info ou personalizada 
                            // Depois verifica se é personalizada e sem bom dia ou boa noite e depois verifica as de informação + rotina de bom dia e boa noite
                            if(item.ref_id_tipologia !== 6 && item.ref_id_tipologia !== 3){
                                if(item.ref_id_tipologia === props.valor){
                                    total++;
                                    if(item.recebido.data[0] !== 0){
                                        recebidas++;
                                        if(item.ref_id_rotinas === 1){
                                            bomDiaRecebidas++;
                                        } else if(item.ref_id_rotinas === 2){
                                            boaNoiteRecebidas++;
                                        }
                                    } else {
                                        naoRecebidas++;
                                        if(item.ref_id_rotinas === 1){
                                            bomDiaNaoRecebidas++;
                                        } else if(item.ref_id_rotinas === 2){
                                            boaNoiteNaoRecebidas++;
                                        }
                                    }
                                }
                            } else if (item.ref_id_tipologia === 3 || item.ref_id_tipologia === 6){
                                if(item.ref_id_tipologia === 6 && item.ref_id_tipologia === props.valor && item.id_eventos !== 1 && item.id_eventos !== 2){
                                    total++;
                                    if(item.recebido.data[0] !== 0){
                                        recebidas++;
                                        if(item.ref_id_rotinas === 1){
                                            bomDiaRecebidas++;
                                        } else if(item.ref_id_rotinas === 2){
                                            boaNoiteRecebidas++;
                                        }
                                    } else {
                                        naoRecebidas++;
                                        if(item.ref_id_rotinas === 1){
                                            bomDiaNaoRecebidas++;
                                        } else if(item.ref_id_rotinas === 2){
                                            boaNoiteNaoRecebidas++;
                                        }
                                    }
                                } else if (item.ref_id_tipologia === 3 && item.ref_id_tipologia === props.valor || item.ref_id_tipologia === 6 && item.id_eventos === 1 || item.ref_id_tipologia === 6 && item.id_eventos === 2){
                                    totalInfo++;
                                    if(item.recebido.data[0] !== 0){
                                        recebidasInfo++;
                                        if(item.ref_id_rotinas === 1){
                                            bomDiaRecebidasInfo++;
                                        } else if(item.ref_id_rotinas === 2){
                                            boaNoiteRecebidasInfo++;
                                        }
                                    } else {
                                        naoRecebidasInfo++;
                                        if(item.ref_id_rotinas === 1){
                                            bomDiaNaoRecebidasInfo++;
                                        } else if(item.ref_id_rotinas === 2){
                                            boaNoiteNaoRecebidasInfo++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
        
                if(props.valor !== 3){
                    setEstatisticas([total, recebidas, naoRecebidas, bomDiaRecebidas, bomDiaNaoRecebidas, boaNoiteRecebidas, boaNoiteNaoRecebidas])
                } else {
                    setEstatisticas([totalInfo, recebidasInfo, naoRecebidasInfo, bomDiaRecebidasInfo, bomDiaNaoRecebidasInfo, boaNoiteRecebidasInfo, boaNoiteNaoRecebidasInfo ])
                }
            })
        }
    }, [])

    var percentagem1 = Math.round((estatisticas[1]/estatisticas[0]) * 100);
    var percentagem2 = Math.round((estatisticas[2]/estatisticas[0]) * 100);

    var percentagemBomDia1 = Math.round((estatisticas[3]/(estatisticas[3]+estatisticas[4])) * 100);
    var percentagemBomDia2 = Math.round((estatisticas[4]/(estatisticas[3]+estatisticas[4])) * 100);

    var percentagemBoaNoite1 = Math.round((estatisticas[5]/(estatisticas[5]+estatisticas[6])) * 100);
    var percentagemBoaNoite2 = Math.round((estatisticas[6]/(estatisticas[5]+estatisticas[6])) * 100);

    return(
        <>
            <Card style={{width: '30%', marginRight: '10px', marginLeft: '10px'}}>
                <Card.Body className='m-0 cartaGrupos'>
                    <p className='tituloCardEstatisticas' style={{textAlign: 'center'}}>Notificações de {props.tipologia}</p>
                    <div className='mb-1 mt-1 p-0'>
                        {estatisticas[1] + estatisticas[2] !== 0 ?
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
                            :
                            <Pie
                                data={{
                                    labels: ['Não foram criadas notificações'],
                                    datasets: [{
                                        data: [1],
                                        backgroundColor: ['lightgrey'],
                                        borderWidth: 0
                                    }]
                                }}
                                height={150}
                                width={150}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            labels: {
                                                family: 'Roboto',
                                                size: 14,
                                            },
                                            display: true
                                        },
                                        tooltip: {
                                            display: false
                                        }
                                    }
                                }}
                            />
                        }
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
            <Card style={{width: '30%', marginRight: '10px', marginLeft: '10px'}}>
                <Card.Body className='m-0 cartaGrupos'>
                    <p className='tituloCardEstatisticas' style={{textAlign: 'center'}}>Notificações de {props.tipologia} - Bom Dia</p>
                    <div className='mb-1 mt-1 p-0'>
                        {estatisticas[3] + estatisticas[4] !== 0 ? 
                            <Pie
                                data={{
                                    labels: ['% Recebidas', '% Não Recebidas'],
                                    datasets: [{
                                        data: [percentagemBomDia1, percentagemBomDia2],
                                        backgroundColor: ['#B7F9B6', '#f9b6b6'],
                                        borderWidth: 0
                                    }]
                                }}
                                height={150}
                                width={150}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true,
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
                            :
                            <Pie
                                data={{
                                    labels: ['Não foram criadas notificações'],
                                    datasets: [{
                                        data: [1],
                                        backgroundColor: ['lightgrey'],
                                        borderWidth: 0
                                    }]
                                }}
                                height={150}
                                width={150}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            labels: {
                                                family: 'Roboto',
                                                size: 14,
                                            },
                                            display: true
                                        },
                                        tooltip: {
                                            enabled: false
                                        }
                                    }
                                }}
                            />
                        }
                    </div>
                </Card.Body>
                <Card.Footer className='p-0'>
                    <div className='m-0 p-0' style={{paddingRight: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                        <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: 'lightgrey'}}>Criadas: <br/><b>{estatisticas[3] + estatisticas[4]}</b></span>
                        <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: '#B7F9B6'}}>Recebidas: <br/><b>{estatisticas[3]}</b></span>
                        <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: '#f9b6b6'}}>Não recebidas: <br/><b>{estatisticas[4]}</b></span>
                    </div>
                </Card.Footer>
            </Card>
            <Card style={{width: '30%', marginRight: '10px', marginLeft: '10px'}}>
                <Card.Body className='m-0 cartaGrupos'>
                    <p className='tituloCardEstatisticas' style={{textAlign: 'center'}}>Notificações de {props.tipologia} - Boa Noite</p>
                    <div className='mb-1 mt-1 p-0'>
                        {estatisticas[5] + estatisticas[6] !== 0 ?
                            <Pie
                                data={{
                                    labels: ['% Recebidas', '% Não Recebidas'],
                                    datasets: [{
                                        data: [percentagemBoaNoite1, percentagemBoaNoite2],
                                        backgroundColor: ['#B7F9B6', '#f9b6b6'],
                                        borderWidth: 0
                                    }]
                                }}
                                height={150}
                                width={150}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true,
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
                            :
                            <Pie
                                data={{
                                    labels: ['Não foram criadas notificações de Boa Noite'],
                                    datasets: [{
                                        data: [1],
                                        backgroundColor: ['lightgrey'],
                                        borderWidth: 0
                                    }]
                                }}
                                height={150}
                                width={150}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            labels: {
                                                family: 'Roboto',
                                                size: 14,
                                            },
                                            display: true
                                        },
                                        tooltip: {
                                            enabled: false
                                        }
                                    }
                                }}
                            />
                        }
                    </div>
                </Card.Body>
                <Card.Footer className='p-0'>
                    <div className='m-0 p-0' style={{paddingRight: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                        <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: 'lightgrey'}}>Criadas: <br/><b>{estatisticas[5] + estatisticas[6]}</b></span>
                        <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: '#B7F9B6'}}>Recebidas: <br/><b>{estatisticas[5]}</b></span>
                        <span className='py-2' style={{width: '33%', fontSize: '14px', backgroundColor: '#f9b6b6'}}>Não recebidas: <br/><b>{estatisticas[6]}</b></span>
                    </div>
                </Card.Footer>
            </Card>
        </>
    )
    
}
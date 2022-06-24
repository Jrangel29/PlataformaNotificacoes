import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export const PieChart = (props) => {
    
    const [percentagem, setPercentagem] = useState({});

    useEffect(() => {
        var pFechou, pRespondeu;

        pFechou = Math.round(((props.info[0].value / props.info[2].value) * 100) * 10) / 10;
        pRespondeu = Math.round(((props.info[1].value / props.info[2].value) * 100) * 10) / 10;

        setPercentagem([pFechou, pRespondeu])

    }, [props.info])

    return(
        <div className='mb-2 mt-1 col-10 p-0'>
            <Bar
                data={{
                    labels: ['% Fechou', '% Respondeu'],
                    datasets: [{
                        data: [percentagem[0], percentagem[1]],
                        backgroundColor: ['#f9b6b6', '#B7F9B6'],
                        borderColor: ['#980a0a', '#0d980a'],
                        borderWidth: 1
                    }]
                }}
                height={200}
                width={100}
                options={{
                    maintainAspectRatio: false,
                    /*scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }*/
                    plugins: {
                        title: {
                            display: true,
                            text: 'Comparação de % entre pessoas que fecharam e pessoas que responderam à notificação.',
                            padding: {
                                bottom: 10
                            }
                        },
                        legend: {
                            labels: {
                                family: 'Roboto',
                                size: 14,
                            },
                            display: false
                        },
                    }
                }}
            />
        </div>
    )
}

export const PieChartNotiList = (props) => {
    
    const [percentagem, setPercentagem] = useState({});
    const [percentagem2, setPercentagem2] = useState({});
    console.log(props.info)

    useEffect(() => {
        var pFechou, pRespondeu;

        pFechou = Math.round(((props.info[0].value / props.info[2].value) * 100) * 10) / 10;
        pRespondeu = Math.round(((props.info[1].value / props.info[2].value) * 100) * 10) / 10;

        setPercentagem([pFechou, pRespondeu])

    }, [props.info])

    useEffect(() => {
        //TALVEZ PARA A PERCENTAGEM DE ENVIOU CALCULAR ENTRE TODAS AS NOTIFICAÇÕES E AS QUE TÊM MESMO ENVIOU
        var pEnviou, pRecebeu;

        pEnviou = 100;
        pRecebeu = Math.round(((props.info[2].value / props.info[3].value) * 100) * 10) / 10;

        setPercentagem2([pEnviou, pRecebeu])

    }, [props.info])

    return(
        <>
            <div className='mb-2 mt-1 col-5 p-0'>
                <Bar
                    data={{
                        labels: ['% Fechadas', '% Respondidas'],
                        datasets: [{
                            data: [percentagem[0], percentagem[1]],
                            backgroundColor: ['#f9b6b6', '#B7F9B6'],
                            borderColor: ['#980a0a', '#0d980a'],
                            borderWidth: 1
                        }]
                    }}
                    height={200}
                    width={100}
                    options={{
                        maintainAspectRatio: false,
                        /*scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }*/
                        plugins: {
                            title: {
                                display: true,
                                text: 'Comparação de % entre notificações fechadas e respondidas.',
                                padding: {
                                    bottom: 10
                                }
                            },
                            legend: {
                                labels: {
                                    family: 'Roboto',
                                    size: 14,
                                },
                                display: false
                            },
                        }
                    }}
                />
            </div>
            <div className='mb-2 mt-1 offset-1 col-5 p-0'>
                <Bar
                    data={{
                        labels: ['% Enviadas', '% Recebidas'],
                        datasets: [{
                            data: [percentagem2[0], percentagem2[1]],
                            backgroundColor: ['#f9b6b6', '#B7F9B6'],
                            borderColor: ['#980a0a', '#0d980a'],
                            borderWidth: 1
                        }]
                    }}
                    height={200}
                    width={100}
                    options={{
                        maintainAspectRatio: false,
                        /*scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }*/
                        plugins: {
                            title: {
                                display: true,
                                text: 'Comparação de % entre notificações enviadas e recebidas.',
                                padding: {
                                    bottom: 10
                                }
                            },
                            legend: {
                                labels: {
                                    family: 'Roboto',
                                    size: 14,
                                },
                                display: false
                            },
                        }
                    }}
                />
            </div>
        </>
    )
}
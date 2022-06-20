import React, {useState, useEffect} from 'react';
import { Pie } from 'react-chartjs-2';
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
        <div className='mb-2 mt-1 col-6 p-0'>
            <Pie
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
                width={200}
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
                        subtitle: {
                            display: true,
                            text: 'Comparação de % entre pessoas que fecharam e pessoas que responderam à notificação.'
                        },
                        legend: {
                            labels: {
                                family: 'Roboto',
                                size: 14
                            }
                        }
                    }
                }}
            />
        </div>
    )
}
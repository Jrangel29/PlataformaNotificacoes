import React, {useEffect, useState} from "react";
import "../Styles/Homepage.css";
import Navbar from '../Components/Geral/Navbar';
import Header from '../Components/Geral/Header';
import {AllNotifications, AllNotificationsDiaNoite, AllNotificationsBoaNoite, AllNotificationsBomDia} from '../Components/Stats/allNotifs'
import {TipologiaStats} from '../Components/Stats/Tipologias'
import { getStats } from '../Store/Notifications/Actions';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Pages/Loading';
//import axios from 'axios';

const Stats = () => {

    const dispatch = useDispatch();
    const arrayTipologias = ['Agenda', 'Programas', 'Informação', 'Saúde', 'Serviços', 'Personalizada'];

    const notificationStats = useSelector(({ notificacoes }) => notificacoes.data)
    const isLoadingNotificationStats = useSelector(({ notificacoes }) => notificacoes.isLoadingAllStats)

    useEffect(() => {
        dispatch(getStats())
    }, [])

    if(isLoadingNotificationStats){
        return(
            <Loading/>
        )
    }

    return (
      <div className='mainBodyForm container p-0'>
        <Navbar/>
        <Header nome="Estatísticas" apagaMuda="nao"/>
        <div>
            <div className='prevSeccao ms-0'>
                <h1 className='tituloSeccaoPaginaNotifs'>Estatísticas gerais</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
                <AllNotifications stats={notificationStats} geral={true}/>
                <AllNotificationsDiaNoite stats={notificationStats} geral={true}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px'}}>
                <AllNotificationsBomDia stats={notificationStats} geral={true}/>
                <AllNotificationsBoaNoite stats={notificationStats} geral={true}/>
            </div>
        </div>
        <div>
            <div className='prevSeccao ms-0'>
                <h1 className='tituloSeccaoPaginaNotifs'>Estatísticas de Tipologias</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px'}}>
                {arrayTipologias.map((tipo, index) => {
                    return(
                        <>
                            <p className="w-100 textoTipologiaStats">{tipo}</p>
                            <TipologiaStats tipologia={tipo} valor={index+1} stats={notificationStats} geral={true}/>
                        </>
                    )
                })}
            </div>
        </div>
      </div>
    );
}

export default Stats;

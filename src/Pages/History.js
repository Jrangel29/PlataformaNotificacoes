import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Filters from '../Components/Geral/Filters';
import NotificationCards from '../Components/Cards/NotificationCards';
import Header from '../Components/Geral/Header';

class History extends React.Component {

    render(){
        return(
            <div>
                <div className='mainBodyForm container p-0'>
                    <Navbar/>
                    <Header nome="Notificações enviadas" apagaMuda="nao"/>
                    <div style={{padding: "0 40px"}}>
                        <Filters tipo="Histórico"/>
                    </div>
                    <div style={{padding: "0 40px"}}>
                        <NotificationCards tipo={"historico"}/>
                    </div>
                </div>
            </div>
        )
    } 
}

export default History;
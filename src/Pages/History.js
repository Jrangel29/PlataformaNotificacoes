import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Filters from '../Components/Geral/Filters';
import NotificationCards from '../Components/Cards/NotificationCards';
import Header from '../Components/Geral/Header';

class History extends React.Component {

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Notificações enviadas" apagaMuda="nao"/>
                    <div>
                        <Filters tipo="Histórico"/>
                    </div>
                    <div>
                        <NotificationCards tipo={"historico"}/>
                    </div>
                </div>
            </div>
        )
    } 
}

export default History;
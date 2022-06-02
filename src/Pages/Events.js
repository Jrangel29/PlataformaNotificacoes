import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Filters from '../Components/Geral/Filters';
import Header from '../Components/Geral/Header';
import EventCards from '../Components/Cards/EventCards';

class Events extends React.Component {

    render(){
        return(
            <div>
                <div className='mainBodyForm container p-0'>
                    <Navbar/>
                    <Header nome="Eventos" apagaMuda="nao"/>
                    <div style={{padding: "0 40px"}}>
                        <Filters tipo="Evento"/>
                    </div>
                    <div style={{padding: "0 40px"}}>
                        <EventCards/>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Events;
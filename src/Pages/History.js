import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Filters from '../Components/Geral/Filters';
import NotificationCards from '../Components/Cards/NotificationCards';
import Header from '../Components/Geral/Header';

class History extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    onChangeSearch = (e) => this.setState({search: e.target.value});

    render(){
        return(
            <div>
                <div className='mainBodyForm container p-0'>
                    <Navbar/>
                    <Header nome="Notificações enviadas" apagaMuda="nao"/>
                    <div style={{padding: "0 40px"}}>
                        <Filters tipo="Histórico" change={this.onChangeSearch} valorMuda={this.state.search}/>
                    </div>
                    <div style={{padding: "0 40px"}}>
                        <NotificationCards tipo='Enviadas'/>
                    </div>
                </div>
            </div>
        )
    } 
}

export default History;
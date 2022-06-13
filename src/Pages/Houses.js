import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Filters from '../Components/Geral/Filters';
import HouseCards from '../Components/Cards/HouseCards';
import Header from '../Components/Geral/Header';

class Houses extends React.Component {
    
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
                    <Header nome="Casas" apagaMuda="nao"/>
                    <div style={{padding: "0 40px"}}>
                        <Filters tipo="Casa" change={this.onChangeSearch} valorMuda={this.state.search}/>
                    </div>
                    <div style={{padding: "0 40px"}}>
                        <HouseCards pagina="UserList"/>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Houses;
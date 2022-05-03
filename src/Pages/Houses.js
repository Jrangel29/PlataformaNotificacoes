import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Filters from '../Components/Geral/Filters';
import HouseCards from '../Components/Cards/HouseCards';
import Header from '../Components/Geral/Header';

class Houses extends React.Component {

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Casas" apagaMuda="nao"/>
                    <div>
                        <Filters tipo="Casa"/>
                    </div>
                    <div>
                        <HouseCards pagina="UserList"/>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Houses;
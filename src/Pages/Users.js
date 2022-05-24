import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Filters from '../Components/Geral/Filters';
import UserCards from '../Components/Cards/UserCards';
import Header from '../Components/Geral/Header';

class Users extends React.Component {

    render(){
        return(
            <div>
                <div className='mainBodyForm container p-0'>
                    <Navbar/>
                    <Header nome="Utilizadores" apagaMuda="nao"/>
                    <div style={{padding: "0 40px"}}>
                        <Filters tipo="Utilizador"/>
                    </div>
                    <div style={{padding: "0 40px"}}>
                        <UserCards pagina="UserList"/>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Users;
import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Filters from '../Components/Geral/Filters';
import UserCards from '../Components/Cards/UserCards';
import Header from '../Components/Geral/Header';

class Users extends React.Component {

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Utilizadores" apagaMuda="nao"/>
                    <div>
                        <Filters tipo="Utilizador"/>
                    </div>
                    <div>
                        <UserCards pagina="UserList"/>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Users;
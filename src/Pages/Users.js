import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Filters from '../Components/Geral/Filters';
import UserCards from '../Components/Cards/UserCards';
import Header from '../Components/Geral/Header';

class Users extends React.Component {

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
                    <Header nome="Utilizadores" apagaMuda="nao"/>
                    <div style={{padding: "0 40px"}}>
                        <Filters tipo="Utilizador" change={this.onChangeSearch} valorMuda={this.state.search}/>
                    </div>
                    <div style={{padding: "0 40px"}}>
                        <UserCards pagina="UserList" pesquisa={this.state.search}/>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Users;
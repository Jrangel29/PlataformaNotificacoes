import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Header from '../Components/Geral/Header';
import GroupDetailCards from '../Components/Cards/GroupDetailCards';
import '../Styles/User.css';

class House extends React.Component {

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Casas" detalhe="sim" apagaMuda="sim"/>
                    <div className='px-2'>
                        <div>
                            <h1 className='tituloSeccaoPagina'>Casa dos Limas</h1>
                            <p className='textoSeccaoPagina'>Vila Nova de Gaia, Porto</p>
                            <p className='textoSeccaoPagina'><b>ID da box:</b> 997b0ec3-81df-4263-84c6-e5c67b9cc407</p>
                        </div>
                        <div className='mt-4'>
                            <p className='subtituloSeccaoPagina'>Membros da casa</p>
                            <GroupDetailCards/>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default House;
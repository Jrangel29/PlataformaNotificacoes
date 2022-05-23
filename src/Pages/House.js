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
                <div className='mainBodyForm container px-0'>
                    <Header nome="Casas" detalhe="sim" apagaMuda="sim"/>
                    <div>
                        <div className='prevSeccao ms-0'>
                            <h1 className='tituloSeccaoPaginaNotifs'>Informação geral</h1>
                        </div>
                        <div className='mx-3' style={{padding: "10px 40px"}}>
                            <p className='textoSeccaoPagina'><b>Nome:</b> Casa dos Limas</p>
                            <p className='textoSeccaoPagina'><b>Localidade:</b> Vila Nova de Gaia, Porto</p>
                            <p className='textoSeccaoPagina'><b>ID da box:</b> 997b0ec3-81df-4263-84c6-e5c67b9cc407</p>
                        </div>
                        <div className='mt-1 mx-3' style={{padding: "0 40px"}}>
                            <p className='subtituloSeccaoPagina'>Membros da casa</p>
                            <GroupDetailCards/>
                        </div>
                    </div>
                    <div className='p-0 m-0 mt-3'>
                        <div className='prevSeccao ms-0'>
                            <h1 className='tituloSeccaoPaginaNotifs'>Notificações</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    } 
}

export default House;
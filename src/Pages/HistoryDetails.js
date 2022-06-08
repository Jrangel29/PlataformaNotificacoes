import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Header from '../Components/Geral/Header';
import '../Styles/User.css';
import UserDetailCards from '../Components/Cards/UserDetailCards';
import {Table} from 'react-bootstrap';

class HistoryDetails extends React.Component {

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody container'>
                    <Header nome="Histórico" detalhe="sim" apagaMuda="nao"/>
                    <div className='px-2'>
                        <div>
                            <h1 className='tituloSeccaoPagina'>Descontos em carne do Lidl</h1>
                            <p className='subtituloSeccaoPagina'>Conteúdo</p>
                            <p className='textoSeccaoPagina mb-3'>50% Desconto em todas as carnes vermelhas!</p>
                        </div>
                        <div>
                            <h1 className='tituloSeccaoPagina'>Interações</h1>
                            <p className='subtituloSeccaoPagina'>Contagem</p>
                            <Table striped bordered hover className='tabelaHistorico'>
                                <thead>
                                    <tr>
                                        <th>Interação</th>
                                        <th>Contagem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Não Relembrar</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Relembrar daqui a 15 minutos</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Relembrar daqui a 30 minutos</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Relembrar daqui a 1 hora</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Relembrar daqui a 2 horas</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p className='subtituloSeccaoPagina'>Interações detalhadas</p>
                            <UserDetailCards historico="sim"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default HistoryDetails;
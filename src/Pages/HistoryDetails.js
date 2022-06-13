import React from 'react';
import Navbar from '../Components/Geral/Navbar';
import Header from '../Components/Geral/Header';
import '../Styles/User.css';
import UserDetailCards from '../Components/Cards/UserDetailCards';
import {Table} from 'react-bootstrap';

const HistoryDetails = () => {

    return(
        <div>
            <div className='mainBodyForm p-0 container'>
            <Navbar/>
                <Header nome="Histórico" detalhe="sim" apagaMuda="nao"/>
                <div className='prevSeccao ms-0'>
                    <h1 className='tituloSeccaoPaginaNotifs'>Informação geral</h1>
                </div>
                <div style={{padding: '0 40px'}} className="mx-2">
                    <p className='subtituloSeccaoPagina mt-2 mb-0'>Título</p>
                    <p className='textoSeccaoPagina'>50% Desconto em todas as carnes vermelhas!</p>
                    <p className='subtituloSeccaoPagina mt-2 mb-0'>Mensagem</p>
                    <p className='textoSeccaoPagina mb-3'>50% Desconto em todas as carnes vermelhas!</p>
                </div>
                <div className='prevSeccao ms-0'>
                    <h1 className='tituloSeccaoPaginaNotifs'>Interações</h1>
                </div>
                <div style={{padding: '0 40px'}} className="mx-2">
                    <p className='subtituloSeccaoPagina mt-2'>Contagem</p>
                    <Table striped bordered hover className='tabelaHistorico'>
                        <thead>
                            <tr>
                                <th style={{fontSize: '16px'}}>Interação</th>
                                <th style={{fontSize: '16px'}}>Contagem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{fontSize: '14px'}}>Não Relembrar</td>
                                <td style={{fontSize: '14px'}}>1</td>
                            </tr>
                            <tr>
                                <td style={{fontSize: '14px'}}>Relembrar daqui a 15 minutos</td>
                                <td style={{fontSize: '14px'}}>1</td>
                            </tr>
                            <tr>
                                <td style={{fontSize: '14px'}}>Relembrar daqui a 30 minutos</td>
                                <td style={{fontSize: '14px'}}>0</td>
                            </tr>
                            <tr>
                                <td style={{fontSize: '14px'}}>Relembrar daqui a 1 hora</td>
                                <td style={{fontSize: '14px'}}>0</td>
                            </tr>
                            <tr>
                                <td style={{fontSize: '14px'}}>Relembrar daqui a 2 horas</td>
                                <td style={{fontSize: '14px'}}>0</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p className='subtituloSeccaoPagina'>Interações detalhadas</p>
                    {/*<UserDetailCards historico="sim"/>*/}
                </div>
            </div>
        </div>
    )
    
}

export default HistoryDetails;
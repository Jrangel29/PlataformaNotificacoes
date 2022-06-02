import React, {useState, useEffect} from 'react';
import '../../Styles/Navbar.css';
import {Navbar, Nav, Container, Tabs, Tab} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const BarraNav = () => {

    const lugar = window.location.pathname;
    const [tipo, setTipo] = useState('');

    useEffect(() => {
        if(lugar === "/notifications/create" || lugar === "/notifications" || lugar === "/history" || lugar === "/history/details" || lugar === "/events"){
            setTipo('Notifs')
        } else{
            setTipo('Destino')
        }
    }, [])

    return(
        <div className={tipo === 'Notifs' ? 'barraNavegacao pt1 m-0 p-0' : 'barraNavegacao pt2 m-0 p-0'}>
            <div className='containerNavBar topPart'>
                <div className='topBar m-0 p-0 h-100'>
                    <div className={tipo === 'Notifs' ? 'btn btnNav escolheHalf' : 'btn btnNav escolheHalfNot H1'} onClick={() => setTipo('Notifs')}>Notificações</div>
                    <div className={tipo === 'Destino' ? 'btn btnNav escolheHalf' : 'btn btnNav escolheHalfNot H2'} onClick={() => setTipo('Destino')}>Destinatários</div>
                </div>
            </div>
            <div className='containerNavBar w-50'>
                <Navbar className='m-0 p-0 h-100 w-100'>
                    <Nav activeKey={lugar} className='containerNavBar' style={tipo === 'Notifs' ? {margin: 'auto', marginRight: '0'} : null}>
                        {tipo === 'Notifs' ? 
                        <>
                            <Nav.Link as={Link} className={lugar === "/notifications/create" ? 'navSelected' : '' } to="/notifications/create">
                                Criar
                            </Nav.Link>
                            <Nav.Link as={Link} className={lugar === "/events" ? 'navSelected' : '' } to="/events">
                                Eventos
                            </Nav.Link>
                            <Nav.Link as={Link} className={lugar === "/notifications" ? 'navSelected' : '' } to="/notifications">
                                Agendadas
                            </Nav.Link>
                            {/*<Nav.Link as={Link} to="/routines">
                                Rotinas
                            </Nav.Link>*/}
                            <Nav.Link as={Link} className={lugar === "/history" || lugar === "/history/details" ? 'navSelected' : '' } to="/history">
                                Enviadas
                            </Nav.Link>
                        </>
                        :
                        <>
                            <Nav.Link as={Link} className={lugar === "/users" || lugar === "/users/user" || lugar === "/users/create" ? 'navSelected' : '' } to="/users">
                                Utilizadores
                            </Nav.Link>
                            <Nav.Link as={Link} className={lugar === "/houses" || lugar === "/houses/house" || lugar === "/houses/create" ? 'navSelected' : '' } to="/houses">
                                Casas
                            </Nav.Link>
                        </>
                        }
                        {/*<Nav.Link as={Link} to="/groups">
                            Grupos
                        </Nav.Link>
                        <Nav.Link as={Link} to="/templates">
                            Templates
                        </Nav.Link>*/}
                    </Nav>
                </Navbar>
            </div>
        </div>
    )
}

export default BarraNav;
import React, {useState, useEffect} from 'react';
import '../../Styles/Navbar.css';
import {Navbar, Nav, Container, Tabs, Tab} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const BarraNav = () => {

    const lugar = window.location.pathname;
    const [tipo, setTipo] = useState('');

    const stringEvent = lugar.substring(0, 7);
    const stringUser = lugar.substring(0, 6);
    const stringHouse = lugar.substring(0, 7);

    useEffect(() => {
        if(lugar === "/notifications/create" || lugar === "/events" || stringEvent === '/events'){
            setTipo('Eventos')
        } else if(lugar === '/users' || stringUser === "/users" || lugar === "/users/create"){
            setTipo('Destino')
        } else {
            setTipo('Notifications')
        }
    }, [])

    return(
        <div className={tipo === 'Notifs' ? 'barraNavegacao pt1 m-0 p-0' : 'barraNavegacao pt2 m-0 p-0'}>
            <div className='containerNavBar topPart'>
                <div className='topBar m-0 p-0 h-100'>
                    <div className={tipo === 'Eventos' ? 'btn btnNav escolheHalf' : 'btn btnNav escolheHalfNot H1'} onClick={() => setTipo('Eventos')}>Eventos</div>
                    <div className={tipo === 'Notifications' ? 'btn btnNav escolheHalf' : 'btn btnNav escolheHalfNot H2'} onClick={() => setTipo('Notifications')}>Notificações</div>
                    <div className={tipo === 'Destino' ? 'btn btnNav escolheHalf' : 'btn btnNav escolheHalfNot H2'} onClick={() => setTipo('Destino')}>Destinatários</div>
                </div>
            </div>
            <div className='containerNavBar w-100'>
                <Navbar className='m-0 p-0 h-100 w-100'>
                    <Nav activeKey={lugar} className='containerNavBar' style={tipo === 'Eventos' ? {textAlign: 'center', marginLeft: '10%', marginRight: 'auto'} : tipo === 'Notifications' ? {textAlign: 'center', margin: 'auto'} : {textAlign: 'center', marginLeft: 'auto', marginRight: '9%'}}>
                        {tipo === 'Eventos' ? 
                        <>
                            <Nav.Link as={Link} className={lugar === "/events/create" ? 'navSelected' : '' } to="/events/create">
                                Criar
                            </Nav.Link>
                            <Nav.Link as={Link} className={lugar === "/events" || stringEvent === '/events' && lugar !== '/events/create' ? 'navSelected' : '' } to="/events">
                                Eventos
                            </Nav.Link>
                        </>
                        :
                        tipo === 'Notifications' ?
                        <>
                            <Nav.Link as={Link} className={lugar === "/notifications" ? 'navSelected' : '' } to="/notifications">
                                Agendadas
                            </Nav.Link>
                            <Nav.Link as={Link} className={lugar === "/history" || lugar === "/history/details" ? 'navSelected' : '' } to="/history">
                                Enviadas
                            </Nav.Link>
                        </>
                        :
                        <>
                            <Nav.Link as={Link} className={lugar === "/users" || stringUser === "/users" || lugar === "/users/create" ? 'navSelected' : '' } to="/users">
                                Utilizadores
                            </Nav.Link>
                            <Nav.Link as={Link} className={lugar === "/houses" || stringHouse === "/houses" || lugar === "/houses/create" ? 'navSelected' : '' } to="/houses">
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
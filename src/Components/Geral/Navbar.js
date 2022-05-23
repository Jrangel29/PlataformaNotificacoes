import React from 'react';
import '../../Styles/Navbar.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const navbar = () => {

    const lugar = window.location.pathname;

    return(
        <Navbar className='barraNavegacao p-0 sticky-nav'>
            <Container className='containerNavBar'>
                <Nav activeKey={lugar} className='containerNavBar'>
                    <Nav.Link as={Link} className={lugar === "/notifications/create" ? 'navSelected' : '' } to="/notifications/create">
                        Criar Evento
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
                    <Nav.Link as={Link} className={lugar === "/users" || lugar === "/users/user" || lugar === "/users/create" ? 'navSelected' : '' } to="/users">
                        Utilizadores
                    </Nav.Link>
                    <Nav.Link as={Link} className={lugar === "/houses" || lugar === "/houses/house" || lugar === "/houses/create" ? 'navSelected' : '' } to="/houses">
                        Casas
                    </Nav.Link>
                    {/*<Nav.Link as={Link} to="/groups">
                        Grupos
                    </Nav.Link>
                    <Nav.Link as={Link} to="/templates">
                        Templates
                    </Nav.Link>*/}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default navbar;
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
                    <Nav.Link as={Link} to="/notifications/create">
                        Criar Notificação
                    </Nav.Link>
                    <Nav.Link as={Link} to="/notifications">
                        Agendadas
                    </Nav.Link>
                    {/*<Nav.Link as={Link} to="/routines">
                        Rotinas
                    </Nav.Link>*/}
                    <Nav.Link as={Link} to="/history">
                        Enviadas
                    </Nav.Link>
                    <Nav.Link as={Link} to="/users">
                        Utilizadores
                    </Nav.Link>
                    <Nav.Link as={Link} to="/houses">
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
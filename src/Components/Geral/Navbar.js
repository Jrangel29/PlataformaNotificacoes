import React, { useState, useEffect } from "react";
import "../../Styles/Navbar.css";
import { Navbar, Nav, Container, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logOut } from "../../firebase";

function TerminarSessao() {
  return (
    <div onClick={logOut} className={"btn btnNav logoutButton logout"}>
      <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='white' class='bi bi-box-arrow-right' viewBox='0 0 16 16'>
        <path
          fill-rule='evenodd'
          d='M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z'
        />
        <path
          fill-rule='evenodd'
          d='M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z'
        />
      </svg>
    </div>
  );
}

const BarraNav = () => {
  const lugar = window.location.pathname;
  const [tipo, setTipo] = useState("");

  const stringEvent = lugar.substring(0, 7);
  const stringUser = lugar.substring(0, 6);
  const stringHouse = lugar.substring(0, 7);
  const stringHistory = lugar.substring(0, 8);

  useEffect(() => {
    if (lugar === "/notifications/create" || lugar === "/events" || stringEvent === "/events") {
      setTipo("Eventos");
    } else if (
      lugar === "/users" ||
      stringUser === "/users" ||
      lugar === "/users/create" ||
      lugar === "/houses" ||
      stringHouse === "/houses" ||
      lugar === "/houses/create"
    ) {
      setTipo("Destino");
    } else {
      setTipo("Notifications");
    }
  }, []);

  return (
    <div className={tipo === "Notifs" ? "barraNavegacao pt1 m-0 p-0" : "barraNavegacao pt2 m-0 p-0"}>
      <div className='containerNavBar topPart'>
        <div className='topBar m-0 p-0 h-100'>
          <div
            className={tipo === "Eventos" ? "btn btnNav escolheHalf" : "btn btnNav escolheHalfNot H1"}
            onClick={() => setTipo("Eventos")}
          >
            Eventos
          </div>
          <div
            className={tipo === "Notifications" ? "btn btnNav escolheHalf" : "btn btnNav escolheHalfNot H2"}
            onClick={() => setTipo("Notifications")}
          >
            Notificações
          </div>
          <div
            className={tipo === "Destino" ? "btn btnNav escolheHalf" : "btn btnNav escolheHalfNot H2"}
            onClick={() => setTipo("Destino")}
          >
            Destinatários
          </div>
          <TerminarSessao />
        </div>
      </div>
      <div className='containerNavBar w-100'>
        <Navbar className='m-0 p-0 h-100 w-100'>
          <Nav
            activeKey={lugar}
            className='containerNavBar'
            style={
              tipo === "Eventos"
                ? { textAlign: "center", marginLeft: "10%", marginRight: "auto" }
                : tipo === "Notifications"
                ? { textAlign: "center", marginLeft: "38%", marginRight: 'auto' }
                : { textAlign: "center", marginLeft: "auto", marginRight: "13%" }
            }
          >
            {tipo === "Eventos" ? (
              <>
                <Nav.Link as={Link} className={lugar === "/events/create" ? "navSelected" : ""} to='/events/create'>
                  Criar
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className={lugar === "/events" || (stringEvent === "/events" && lugar !== "/events/create") ? "navSelected" : ""}
                  to='/events'
                >
                  Eventos
                </Nav.Link>
              </>
            ) : tipo === "Notifications" ? (
              <>
                <Nav.Link as={Link} className={lugar === "/notifications" ? "navSelected" : ""} to='/notifications'>
                  Agendadas
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className={lugar === "/history" || lugar === "/history/details" || stringHistory === "/history" ? "navSelected" : ""}
                  to='/history'
                >
                  Enviadas
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  className={lugar === "/users" || stringUser === "/users" || lugar === "/users/create" ? "navSelected" : ""}
                  to='/users'
                >
                  Utilizadores
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className={lugar === "/houses" || stringHouse === "/houses" || lugar === "/houses/create" ? "navSelected" : ""}
                  to='/houses'
                >
                  Casas
                </Nav.Link>
              </>
            )}
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
  );
};

export default BarraNav;

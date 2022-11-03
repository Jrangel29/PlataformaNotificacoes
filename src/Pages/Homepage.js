import React from "react";
import "../Styles/Homepage.css";
import Navbar from '../Components/Geral/Navbar';
//import axios from 'axios';
import lapis from "../Images/pencil_black.png";
import historico from "../Images/list_black.png";
import event from "../Images/event_black.png";
import pessoas from "../Images/group_black.png";
import house from "../Images/house_black.png";
import sino from "../Images/bell_black.png";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';

class Homepage extends React.Component {
  /*api() {
        const ola = 'https://geo-navsafety.ua.pt:81/localFigueira';
        const batatas = '997b0ec3-81df-4263-84c6-e5c67b9cc407';

        axios.default.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        axios.get(ola, {
            
        }).then((response) => {
            console.warn(response.data);
        })
    }*/

  render() {
    return (
      <div className='mainBodyForm container p-0'>
        <Navbar/>
        <div className="conteudoHomepage" style={{height: '200px'}}>
          <img src={lapis} style={{width: '85px'}}/>
          <div style={{width: '50%', paddingLeft: "3%", paddingRight: "3%", textAlign: "justify"}}>
            <h1 className='tituloHomepage'>Criar evento</h1>
            <p>Formulário de criação de eventos. <br/> Aqui, tens acesso a vários campos que podes personalizar, de acordo com as necessidades do espectador. <br/>Os momentos de envio dizem respeito a quando as notificações serão enviadas,  tendo em conta a data e regularidade do evento criado.</p>
          </div>
          <Button as={Link} 
            variant='flat'
            style={{width: '15%'}} 
            to={'/events/create'}>Criar Evento</Button>
        </div>
        <div className="conteudoHomepage" style={{height: '200px', backgroundColor: '#DBE2EF'}}>
          <img src={event} style={{width: '85px'}}/>
          <div style={{width: '50%', paddingLeft: "3%", paddingRight: "3%", textAlign: "justify"}}>
            <h1 className='tituloHomepage'>Eventos criados</h1>
            <p>Lista dos eventos criados. <br/>Ao carregares num dos eventos, podes ver mais informações sobre o evento, como as notificações que já foram enviadas e as que ainda vão ser enviadas.</p>
          </div>
          <Button as={Link} 
            variant='flat'
            style={{width: '15%'}} 
            to={'/events/create'}>Eventos criados</Button>
        </div>
        <div className="conteudoHomepage" style={{height: '200px'}}>
          <img src={sino} style={{width: '85px'}}/>
          <div style={{width: '50%', paddingLeft: "3%", paddingRight: "3%", textAlign: "justify"}}>
            <h1 className='tituloHomepage'>Notificações por enviar</h1>
            <p>Notificações que ainda não foram enviadas. <br/> Podes carregar nas notificações para ver mais informações.</p>
          </div>
          <Button as={Link} 
            variant='flat'
            style={{width: '15%'}} 
            to={'/events/create'}>Notificações por enviar</Button>
        </div>
        <div className="conteudoHomepage" style={{height: '200px', backgroundColor: '#DBE2EF'}}>
          <img src={historico} style={{width: '85px'}}/>
          <div style={{width: '50%', paddingLeft: "3%", paddingRight: "3%", textAlign: "justify"}}>
            <h1 className='tituloHomepage'>Notificações enviadas</h1>
            <p>Lista de notificações que já foram enviadas. <br/> Podes carregar nas notificações para ver mais informações.</p>
          </div>
          <Button as={Link} 
            variant='flat'
            style={{width: '15%'}} 
            to={'/events/create'}>Notificações enviadas</Button>
        </div>
        <div className="conteudoHomepage" style={{height: '200px'}}>
          <img src={pessoas} style={{width: '85px'}}/>
          <div style={{width: '50%', paddingLeft: "3%", paddingRight: "3%", textAlign: "justify"}}>
            <h1 className='tituloHomepage'>Utilizadores</h1>
            <p>Menu relativo aos espectadores que recebem notificações. <br/> Podes abrir a página de um deles para ver mais informação, como a casa a que pertence e as notificações que vai receber.</p>
          </div>
          <Button as={Link} 
            variant='flat'
            style={{width: '15%'}} 
            to={'/events/create'}>Utilizadores</Button>
        </div>
        <div className="conteudoHomepage" style={{height: '200px', backgroundColor: '#DBE2EF'}}>
          <img src={house} style={{width: '85px'}}/>
          <div style={{width: '50%', paddingLeft: "3%", paddingRight: "3%", textAlign: "justify"}}>
            <h1 className='tituloHomepage'>Casas</h1>
            <p>Casas dos utilizadores que recebem notificações. <br/> Podes abrir a página de um deles para ver mais informação, como os espectadores que nela moram e o ID da box da casa.</p>
          </div>
          <Button as={Link} 
            variant='flat'
            style={{width: '15%'}} 
            to={'/events/create'}>Casas</Button>
        </div>
      </div>
    );
  }
}

export default Homepage;

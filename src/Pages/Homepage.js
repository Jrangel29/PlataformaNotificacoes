import React from 'react';
import '../Styles/Homepage.css';
//import axios from 'axios';
import lapis from '../Images/Lapis.svg';
import historico from '../Images/Historico.svg';
import event from '../Images/Event.svg';
import pessoas from '../Images/Pessoas.svg';
import rotina from '../Images/Rotina.svg';
import house from '../Images/House.svg';
import sino from '../Images/Sino.svg';
import {Link} from 'react-router-dom';

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

    render(){
        return(
            <div className='mainHomepage'>
                {/*this.api()*/}
                <div className='conteudoHomepage container'>
                    <div className='fila row'>
                        <Link to="/events/create" className='quadradoAzul col-xs-4 col-md-3'>
                            <img src={lapis} className="imagemHomepage"/>
                            <>Criar eventos</>
                        </Link>
                        <Link to="/events" className='quadradoAzul col-xs-4 col-md-3'>
                            <img src={event} className="imagemHomepage"/>
                            <>Eventos criados</>
                        </Link>
                        <Link to="/notifications" className='quadradoAzul col-xs-4 col-md-3'>
                            <img src={sino} className="imagemHomepage"/>
                            <>Notificações por enviar</>
                        </Link>
                        <Link to="/history" className='quadradoAzul col-xs-4 col-md-3'>
                            <img src={historico} className="imagemHomepage"/>
                            <>Notificações enviadas</>
                        </Link>
                        <Link to="/users" className='quadradoAzul col-xs-4 col-md-3'>
                            <img src={pessoas} className="imagemHomepage"/>
                            <>Utilizadores</>
                        </Link>
                        <Link to="/houses" className='quadradoAzul col-xs-4 col-md-3'>
                            <img src={house} className="imagemHomepage"/>
                            <>Casas</>
                        </Link>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Homepage;
import React from 'react';
import '../Styles/Homepage.css';
//import axios from 'axios';
import lapis from '../Images/Lapis.svg';
import historico from '../Images/Historico.svg';
import pessoa from '../Images/Pessoa.svg';
import pessoas from '../Images/Pessoas.svg';
import rotina from '../Images/Rotina.svg';
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
                        <Link to="/notifications" className='quadradoAzul col-xs-4 col-md-3'>
                            <img src={sino} className="imagemHomepage"/>
                            <>Notificações</>
                        </Link>
                        <Link to="/groups" className='quadradoAzul col-xs-4 col-md-3'>
                            <img src={pessoas} className="imagemHomepage"/>
                            <>Grupos</>
                        </Link>
                        <Link to="/history" className='quadradoAzul col-xs-4 col-md-3'>
                            <img src={historico} className="imagemHomepage"/>
                            <>Histórico</>
                        </Link>
                        <Link to="/users" className='quadradoAzul col-xs-4 col-md-3'>
                            <img src={pessoa} className="imagemHomepage"/>
                            <>Utilizadores</>
                        </Link>
                        <Link to="/routines" className='quadradoAzul col-xs-4 col-md-3'>
                            <img src={rotina} className="imagemHomepage"/>
                            <>Rotinas</>
                        </Link>
                        <Link to="/templates" className='quadradoAzul col-xs-4 col-md-3'>
                            <img src={lapis} className="imagemHomepage"/>
                            <>Templates</>
                        </Link>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Homepage;
import React from 'react';
import '../Styles/Homepage.css';
import '../Styles/App.css';
import Navbar from '../Components/Geral/Navbar';

class Error404 extends React.Component {

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody conteudoLoading d-flex'>
                    <h1 className='erro404 mb-0'>404</h1>
                    <p className='tituloSeccaoPagina'>Oops! Parece que aconteceu um erro!</p>
                </div>
            </div>
        )
    } 
}

export default Error404;
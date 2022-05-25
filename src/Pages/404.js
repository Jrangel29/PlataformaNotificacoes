import React from 'react';
import '../Styles/Homepage.css';
import '../Styles/App.css';
import Navbar from '../Components/Geral/Navbar';

class Error404 extends React.Component {

    render(){
        return(
            <div>
                <div className='mainBody'>
                    <Navbar/>
                    <span className='conteudoLoading' style={{display: 'flex', flexGrow: 'column', height: '80vh'}}>
                        <h1 className='erro404 mb-0'>404</h1>
                        <p className='tituloSeccaoPagina'>Oops! Parece que aconteceu um erro!</p>
                    </span>
                </div>
            </div>
        )
    } 
}

export default Error404;
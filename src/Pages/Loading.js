import React from 'react';
import '../Styles/Homepage.css';
import '../Styles/App.css';
import {Spinner} from 'react-bootstrap';
import Navbar from '../Components/Geral/Navbar';

class Loading extends React.Component {

    render(){
        return(
            <div>
                <Navbar/>
                <div className='mainBody conteudoLoading d-flex'>
                    <Spinner style={{height: "50px", width: "50px", color: "#112D4E"}} animation='border'/>
                    <p className='tituloSeccaoPagina mt-2'>A carregar</p>
                </div>
            </div>
        )
    } 
}

export default Loading;
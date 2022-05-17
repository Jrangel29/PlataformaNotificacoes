import React from 'react';
import '../Styles/Homepage.css';
import '../Styles/App.css';
import {Spinner} from 'react-bootstrap';
import Navbar from '../Components/Geral/Navbar';

class Loading extends React.Component {

    render(){
        return(
            <div style={{height: '100%', marginTop: '200px'}}>
                <div className='conteudoLoading' style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <span className='LoadingPage mt-2'>A carregar</span><div className="dot-typing2"></div>
                </div>
            </div>
        )
    } 
}

export default Loading;
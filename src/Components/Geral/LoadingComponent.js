import React from 'react';
import '../../Styles/Homepage.css';
import '../../Styles/App.css';
import {Spinner} from 'react-bootstrap';

class LoadingComponent extends React.Component {

    render(){
        return(
            <div>
                <Spinner style={{height: "25px", width: "25px", color: "#112D4E", marginTop: "20px", marginLeft: "23px"}} animation='border'/>
                <p className='LoadingComponent mt-2'>A carregar</p>
            </div>
        )
    } 
}

export default LoadingComponent;
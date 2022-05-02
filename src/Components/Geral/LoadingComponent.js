import React from 'react';
import '../../Styles/Homepage.css';
import '../../Styles/App.css';
import {Spinner} from 'react-bootstrap';

const LoadingComponent = (props) => {

    return(
        <div>
            <Spinner style={props.comp === "filters" ? {height: "25px", width: "25px", color: "#112D4E", marginLeft: "23px", marginTop: "5px"} : {height: "25px", width: "25px", color: "#112D4E", marginTop: "20px", marginLeft: "23px"}} animation='border'/>
            {props.comp === "filters" ?
            <></>
            :
            <p className='LoadingComponent mt-2'>A carregar</p>
            }
        </div>
    )
}

export default LoadingComponent;
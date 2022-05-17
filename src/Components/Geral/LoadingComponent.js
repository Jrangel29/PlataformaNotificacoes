import React from 'react';
import '../../Styles/Homepage.css';
import '../../Styles/App.css';
import {Spinner} from 'react-bootstrap';

const LoadingComponent = (props) => {

    return(
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <span className='LoadingComponent mt-2'>A carregar</span><div className="dot-typing"></div>
        </div>
    )
}

export default LoadingComponent;
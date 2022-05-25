import React from 'react';
import '../../Styles/Modal.css';
import {Tooltip} from 'react-bootstrap';
import Example from '../../Images/bladeExample.png';

export const MomentsTooltip = (props) => {
    return(
        <Tooltip className='tooltips' id="MomentsTooltip" {...props}>
            <span>
                <p className='m-0 p-0' style={{fontSize: '14px'}}><b>Indicações</b></p>
                <p className='m-0 mt-1 p-0' style={{fontSize: '13px', textJustify: 'inter-word', textAlign: 'left'}}><b>-</b> Selecione os momentos em que quer mandar notifições.</p>
                <p className='m-0 mt-1 p-0' style={{fontSize: '13px', textJustify: 'inter-word', textAlign: 'left'}}><b>-</b> Algumas dos momentos têm um rodapé. Estes permitem resposta do utilizador.</p>
                <p className='m-0 mt-1 p-0' style={{fontSize: '13px', textJustify: 'inter-word', textAlign: 'left'}}><b>-</b> Dependendo da tipologia e periodicidade escolhidas, alguns momentos podem estar indisponíveis.</p>
            </span>
        </Tooltip>
    )
}

export const CategoryTooltip = (props) => {
    return(
        <Tooltip className='tooltips' id="CategoryTooltip" {...props}>
            <span>
                <p className='m-0 p-0' style={{fontSize: '14px'}}><b>Indicações</b></p>
                <p className='m-0 mt-1 p-0' style={{fontSize: '13px', textJustify: 'inter-word', textAlign: 'left'}}><b>-</b> Dependendo da categoria escolhida, alguns recetores podem não aparecer. Alguns dos momentos de envio podem também estar indisponíveis.</p>
            </span>
        </Tooltip>
    )
}

export const BladeTooltip = (props) => {
    return(
        <Tooltip className='tooltips2' id="CategoryTooltip" {...props}>
            <p className='m-0 p-0' style={{fontSize: '14px', margin: 'auto'}}><b>Exemplo</b></p>
            <img src={Example} style={{height: 'auto', maxWidth: '500px'}}/>
        </Tooltip>
    )
}
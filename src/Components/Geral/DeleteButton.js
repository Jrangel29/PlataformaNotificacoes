import React from 'react';
import '../../Styles/App.css';
import Lixo from '../../Images/LixoPreto.svg';
import { useDispatch } from 'react-redux';
import { deleteSingleUser } from '../../Store/Users/Actions';
import { deleteSingleHouse } from '../../Store/Casas/Actions';
import { deleteEventSingle } from '../../Store/Eventos/Actions';

const DeleteButton = (props) => {

    const dispatch = useDispatch();

    const apagaUser = () => {
        dispatch(deleteSingleUser(props.id))
        props.onOpen()
    }
    const apagaCasa = () => {
        dispatch(deleteSingleHouse(props.id))
        props.onOpen()
    }
    const apagaEvento = () => {
        dispatch(deleteEventSingle(props.id))
        props.onOpen()
    }


    return(
        <>
        {props.tipo === 'Utilizadores' ?
            <img className="topIcons" style={{marginRight: "40px", cursor: "pointer"}} onClick={() => apagaUser()} src={Lixo}/>
        :
        props.tipo === 'Casas' ?
            <img className="topIcons" style={{marginRight: "40px", cursor: "pointer"}} onClick={() => apagaCasa()} src={Lixo}/>
        :
            <img className="topIcons" style={{marginRight: "40px", cursor: "pointer"}} onClick={() => apagaEvento()} src={Lixo}/>}
        </>
    )
}

export default DeleteButton;
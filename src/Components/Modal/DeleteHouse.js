import React from 'react';
import '../../Styles/Modal.css';
import {Button, Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteSingleHouse } from '../../Store/Casas/Actions';

function DeleteHouse (props) {

    const dispatch = useDispatch();

    const apagaCasa = () => {
        props.onHide("Confirma", "Casa")
        dispatch(deleteSingleHouse(props.id))
    }

    return(
        <Modal
            {...props}
            centered
            backdrop="static"
            size="lg"
        >
            <Modal.Header className='tituloModal' closeVariant='white'>
                Eliminar Casa
            </Modal.Header>
            <Modal.Body>
                <div className='row m-0'>
                    <p className='textoSeccaoPagina p-0'>Tem a certeza que pretende apagar esta casa? Todos os utilizadores associados também serão apagados.</p>
                </div>
                
                <div className='row m-0 mt-3 justify-content-end'>
                    <Button className='col-2 me-3' variant='danger' onClick={() => props.onHide("Cancela")}>Cancelar</Button>
                    <Button className='col-2' variant='success' onClick={() => apagaCasa()}>Confirmar</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DeleteHouse;
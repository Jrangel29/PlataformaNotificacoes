import React from 'react';
import '../../Styles/Modal.css';
import {Button, Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteSingleUser } from '../../Store/Users/Actions';
import { deleteSingleHouse } from '../../Store/Casas/Actions';
import { deleteEventSingle } from '../../Store/Eventos/Actions';

function DeleteEvent (props) {

    const dispatch = useDispatch();

    const apagaEvento = () => {
        props.onHide("Confirma", "Evento")
        dispatch(deleteEventSingle(props.id))
    }

    return(
        <Modal
            {...props}
            centered
            backdrop="static"
            size="lg"
        >
            <Modal.Header className='tituloModal' closeVariant='white'>
                Eliminar Grupo
            </Modal.Header>
            <Modal.Body>
                <div className='row m-0'>
                    <p className='textoSeccaoPagina p-0'>Tem a certeza que pretende apagar este evento? Os utilizadores deixarão de receber notificações associadas ao mesmo.</p>
                </div>
                
                <div className='row m-0 mt-3 justify-content-end'>
                    <Button className='col-2 me-3' variant='danger' onClick={() => props.onHide("Cancela")}>Cancelar</Button>
                    <Button className='col-2' variant='success' onClick={() => apagaEvento()}>Confirmar</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DeleteEvent;
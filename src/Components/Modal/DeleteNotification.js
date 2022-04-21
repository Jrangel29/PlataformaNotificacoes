import React from 'react';
import '../../Styles/Modal.css';
import {Button, Modal} from 'react-bootstrap';

function DeleteNotification (props) {
    return(
        <Modal
            {...props}
            centered
            backdrop="static"
            size="lg"
        >
            <Modal.Header className='tituloModal' closeVariant='white'>
                Eliminar Notificação
            </Modal.Header>
            <Modal.Body>
                <div className='row m-0'>
                    {
                    props.grupo === "sim" ?
                    <p className='textoSeccaoPagina p-0'>Tem a certeza que pretende apagar esta notificação? Se o fizer, os utilizadores do grupo não a vão receber.</p>
                    :
                    props.tipo === "nao" ?
                    <p className='textoSeccaoPagina p-0'>Tem a certeza que pretende apagar esta notificação? Se o fizer, os utilizadores não a vão receber.</p>
                    :
                    <p className='textoSeccaoPagina p-0'>Tem a certeza que pretende eliminar esta notificação? Este utilizador deixará de a receber, mas os outros utilizadores não.</p>
                    }
                </div>
                
                <div className='row m-0 mt-3 justify-content-end'>
                    <Button className='col-2 me-3' variant='danger' onClick={() => props.onHide("Cancela")}>Cancelar</Button>
                    <Button className='col-2' variant='success' onClick={() => props.onHide("Confirma")}>Confirmar</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DeleteNotification;
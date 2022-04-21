import React from 'react';
import '../../Styles/Modal.css';
import {Button, Modal} from 'react-bootstrap';

function DeleteRoutine (props) {

    return(
        <Modal
            {...props}
            centered
            backdrop="static"
            size="lg"
        >
            <Modal.Header className='tituloModal' closeVariant='white'>
                Eliminar Rotina
            </Modal.Header>
            <Modal.Body>
                <div className='row m-0'>
                    {
                    props.grupo === "sim" ?
                    <p className='textoSeccaoPagina p-0'>Tem a certeza que pretende apagar esta rotina? Se o fizer, os utilizadores deste grupo deixarão de a receber.</p>
                    :
                    props.utilizador === "nao" ?
                    <p className='textoSeccaoPagina p-0'>Tem a certeza que pretende apagar esta rotina? Se o fizer, todos os utilizadores associados deixarão de a receber.</p>
                    :
                    <p className='textoSeccaoPagina p-0'>Tem a certeza que pretende eliminar esta rotina do dia-a-dia do utilizador?</p>
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

export default DeleteRoutine;
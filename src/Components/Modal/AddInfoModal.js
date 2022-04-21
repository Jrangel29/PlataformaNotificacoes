import React from 'react';
import '../../Styles/Modal.css';
import {Button, Modal} from 'react-bootstrap';
import NotificationCards from '../Cards/NotificationCards';

function AddInfoModal (props) {
    return(
        <Modal
            {...props}
            centered
            backdrop="static"
            size="lg"
        >
            <Modal.Header className='tituloModal'>
                Acrescentar informação à rotina seguinte
            </Modal.Header>
            <Modal.Body>
                <h1 className='tituloCategoriasModal'>Tipo de Notificação</h1>
                <div className='row m-0'>
                    <input type="text" placeholder="Pesquisa" className='barraPesquisa col-4 my-1'/>
                    <span className='row m-0'>
                        <NotificationCards tipo="AddInfo"/>
                    </span>
                </div>

                <h1 className='tituloCategoriasModal mt-3'>Informação adicional personalizada</h1>
                <textarea rows="3" className='w-100 inputsForms'/>
                
                <div className='row m-0 mt-3 justify-content-end'>
                    <Button className='col-2 me-3' variant='danger' onClick={() => props.onHide("Cancela")}>Cancelar</Button>
                    <Button className='col-2' variant='success' onClick={() => props.onHide("Confirma")}>Confirmar</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AddInfoModal;
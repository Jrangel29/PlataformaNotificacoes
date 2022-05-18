import React from 'react';
import '../../Styles/Modal.css';
import {Modal} from 'react-bootstrap';

function UserPreferencesModal (props) {

    return(
        <Modal
            {...props}
            centered
            backdrop="static"
            size="lg"
        >
            <Modal.Header className='tituloModal' closeButton='true' closeVariant='white'>
                Preferências dos utilizadores
            </Modal.Header>
            <Modal.Body>
                <div className='row m-0 modalPrefsUser'>
                    <p className='textoPrefsUser mb-0 px-0'><b>Ricardo Lima</b></p>
                    <p className='textoPrefsUser mb-2 px-0'>O Ricardo não gosta de receber notificações de agenda na sua rotina de bom dia. Também não quer receber nenhuma notificação relativa a serviços.</p>
                    <p className='textoPrefsUser mb-0 px-0'><b>Maria Costa</b></p>
                    <p className='textoPrefsUser mb-1 px-0'>A Maria não quer receber notificações sobre farmácias. Quer ser notificada de quando o programa 'Casa feliz' vai começar.</p>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default UserPreferencesModal;
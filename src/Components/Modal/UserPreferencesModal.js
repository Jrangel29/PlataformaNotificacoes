import React from 'react';
import '../../Styles/Modal.css';
import {Modal} from 'react-bootstrap';

function UserPreferencesModal (props) {

    let contagem = 0;
    
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
                    {props.users.length > 0 ?
                    <>
                        {props.users.map((item, index) => {
                            if(item.informacao !== null){
                                contagem++;
                                return(
                                    <span key={index} className='m-0 p-0'>
                                        <p className='textoPrefsUser mb-0 px-0'><b>{item.nome}</b></p>
                                        <p className='textoPrefsUser mb-2 px-0'>{item.informacao}</p>
                                    </span>
                                )
                            }
                        })}
                        {contagem === 0 ? 'Nenhum dos utilizadores escolhidos deu preferências.' : ''}
                    </>
                    :
                    <p className='textoPrefsUser mb-1 px-0'>Ainda não escolheu utilizadores.</p>
                    }
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default UserPreferencesModal;
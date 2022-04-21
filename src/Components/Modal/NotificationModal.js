import React from 'react';
import '../../Styles/Modal.css';
import {Modal} from 'react-bootstrap';

function NotificationModal (props) {
    return(
        <Modal
            {...props}
            centered
            size="lg"
        >
            <Modal.Header className='tituloModal' closeButton closeVariant='white'>
                Título da notificação
            </Modal.Header>
            <Modal.Body>
                <h1 className='tituloCategoriasModal'>Descrição</h1>
                <p className='textoModal'>Batatas</p>
                <h1 className='tituloCategoriasModal'>Momentos de Entrega</h1>
                {props.tipo == "notificacoes" ? 
                <span className='row'>
                    <span className='col-2'>
                        <h2 className='subtituloCategoriasModal'>Dias</h2>
                        <p className='textoModal'>04/04</p>
                    </span>
                    <span className='col-2'>
                        <h2 className='subtituloCategoriasModal'>Horas</h2>
                        <p className='textoModal'>16:30</p>
                    </span>
                </span>
                :
                <span className='row'>
                    <span className='col-4'>
                        <h2 className='subtituloCategoriasModal'>Dias</h2>
                        <p className='textoModal'>Segunda-Feira, Terça-Feira</p>
                    </span>
                    <span className='col-2'>
                        <h2 className='subtituloCategoriasModal'>Horas</h2>
                        <p className='textoModal'>16:30</p>
                    </span>
                </span>
                }
                {
                props.tipo == "RotinaUser" ?
                <></>
                :
                <>
                    <h1 className='tituloCategoriasModal'>Utilizadores que vão receber a notificação</h1>
                    <span className='row listaUsersModal'>
                        <span className='col-12 row itemListaUsersModal m-0'>
                            <p className='col-3 infoUserModal nomeUserModal'>Adolfo Martins</p>
                            <p className='col-3 infoUserModal idadeUserModal'>72 Anos</p>
                            <p className='col-6 infoUserModal'>Vila Nova de Gaia, Porto</p>
                        </span>
                        <span className='col-12 row itemListaUsersModal m-0'>
                            <p className='col-3 infoUserModal nomeUserModal'>Bruno Alencar</p>
                            <p className='col-3 infoUserModal idadeUserModal'>25 Anos</p>
                            <p className='col-6 infoUserModal'>Vila Nova de Gaia, Porto</p>
                        </span>
                        <span className='col-12 row itemListaUsersModal m-0'>
                            <p className='col-3 infoUserModal nomeUserModal'>Pedro Santos</p>
                            <p className='col-3 infoUserModal idadeUserModal'>24 Anos</p>
                            <p className='col-6 infoUserModal'>Vila Nova de Gaia, Porto</p>
                        </span>
                        <span className='col-12 row itemListaUsersModal m-0'>
                            <p className='col-3 infoUserModal nomeUserModal'>Zé Maria</p>
                            <p className='col-3 infoUserModal idadeUserModal'>18 Anos</p>
                            <p className='col-6 infoUserModal'>Vila Nova de Gaia, Porto</p>
                        </span>
                    </span>
                </>
                }
            </Modal.Body>
        </Modal>
    )
}

export default NotificationModal;
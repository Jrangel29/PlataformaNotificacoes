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
            {props.tipo == "notificacoes" ?
            <Modal.Header className='tituloModal' closeButton closeVariant='white'>
                Final da Champions
            </Modal.Header>
            :
            <Modal.Header className='tituloModal' closeButton closeVariant='white'>
                Tomar o medicamento para os diabetes
            </Modal.Header>
            }
            <Modal.Body>
                <h1 className='tituloCategoriasModal'>Descrição</h1>
                {props.tipo == "notificacoes" ?
                <p className='textoModal'>A final da Champions é já amanhã. Não percas o jogo do ano!</p>
                :
                <p className='textoModal'>Olá Luísa, não se esqueça de tomar os medicamentos dos diabetes.</p>
                }
                <h1 className='tituloCategoriasModal'>Momentos de Entrega</h1>
                {props.tipo == "notificacoes" ? 
                <span className='row'>
                    <span className='col-2'>
                        <h2 className='subtituloCategoriasModal'>Dias</h2>
                        <p className='textoModal'>27/05</p>
                    </span>
                    <span className='col-2'>
                        <h2 className='subtituloCategoriasModal'>Horas</h2>
                        <p className='textoModal'>18:30</p>
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
                props.tipo == "notificacoes" ?
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
                :
                <>
                <h1 className='tituloCategoriasModal'>Utilizadores que vão receber a Rotina</h1>
                    <span className='row listaUsersModal'>
                        <span className='col-12 row itemListaUsersModal m-0'>
                            <p className='col-3 infoUserModal nomeUserModal'>Luísa Lopes</p>
                            <p className='col-3 infoUserModal idadeUserModal'>66 Anos</p>
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
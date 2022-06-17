import React from 'react';
import '../../Styles/Modal.css';
import {Modal} from 'react-bootstrap';

function NotificationModal (props) {

    if(!props.info){
        return(
            <></>
        )
    }

    let dataNova = new Date(props.info.data);
    let diaSemana = dataNova.getDay();

    return(
        <Modal
            {...props}
            centered
            size="lg"
        >
            {console.log(props.info)}
            <Modal.Header className='tituloModal' closeButton closeVariant='white'>
                {props.info.mensagem}
            </Modal.Header>
            <Modal.Body>
                <h1 className='tituloCategoriasModal'>Evento</h1>
                    <p className='textoModal'>{props.info.nome}</p>

                <h1 className='tituloCategoriasModal'>Informação do rodapé</h1>
                    <span className='row'>
                        <span className='col-5 me-0 pe-0'>
                            <h2 className='subtituloCategoriasModal'>Título do rodapé</h2>
                            <p className='textoModal'>{props.info.titulo !== null ? props.info.titulo : 'Este evento não tem título de rodapé.'}</p>
                        </span>
                        <span className='col-6 ms-0 ps-0'>
                            <h2 className='subtituloCategoriasModal'>Descrição do rodapé</h2>
                            <p className='textoModal'>{props.info.descricao !== null ? props.info.descricao : 'Este evento não tem descrição de rodapé.'}</p>
                        </span>
                    </span>

                <h1 className='tituloCategoriasModal'>Momentos de Entrega</h1>
                    <span className='row'>
                        <span className='col-5'>
                            <h2 className='subtituloCategoriasModal'>Dia</h2>
                            <p className='textoModal'>{diaSemana === 1 ? 'Segunda-Feira' : diaSemana === 2 ? 'Terça-Feira' : diaSemana === 3 ? 'Quarta-Feira' : diaSemana === 4 ? 'Quinta-Feira' : diaSemana === 5 ? 'Sexta-Feira' : diaSemana === 6 ? 'Sábado' : 'Domingo' }</p>
                        </span>
                        <span className='col-5 ps-0'>
                            <h2 className='subtituloCategoriasModal'>Horas</h2>
                            <p className='textoModal'>{props.info.ref_id_rotinas === null ? props.info.hora.slice(0, 5) : props.info.ref_id_rotinas === 1 ? 'Rotina de Bom dia' : 'Rotina de Boa Noite'}</p>
                        </span>
                    </span>
                
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
            </Modal.Body>
        </Modal>
    )
}

export default NotificationModal;
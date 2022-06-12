import React from 'react';
import '../../Styles/Modal.css';
import {Button, Modal} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function DeleteUser (props) {
    const navigate = useNavigate();

    return(
        <Modal
            {...props}
            centered
            backdrop="static"
        >
            <Modal.Header className='tituloModal'>
                {props.tiponotif === "AddInfo" ?
                <>
                Acrescentar informação à rotina seguinte
                </>
                :
                props.tiponotif === "Editar" ?
                <>
                Informação atualizada
                </>
                :
                props.tiponotif === "CriarGrupo" ?
                <>
                Evento criado
                </>
                :
                props.tiponotif === "CriarNotificação" ?
                <>
                Notificação criada
                </>
                :
                props.tiponotif === "CriarTemplate" ?
                <>
                Notificação criada
                </>
                :
                props.tiponotif === "CriarUtilizador" ?
                <>
                Utilizador criado
                </>
                :
                props.tiponotif === "CriarCasa" ?
                <>
                Casa criada
                </>
                :
                <>
                Eliminar {props.tiponotif}
                </>
                }
            </Modal.Header>
            <Modal.Body>
                <div className='row m-0'>
                    {props.tiponotif === "Notificação" ?
                    <p className='textoSeccaoPagina p-0'>A notificação foi eliminada com sucesso!</p>
                    :
                    props.tiponotif === "Rotina" ?
                    <p className='textoSeccaoPagina p-0'>A rotina foi eliminada com sucesso!</p>
                    :
                    props.tiponotif === "Casa" ?
                    <p className='textoSeccaoPagina p-0'>A casa foi eliminada com sucesso!</p>
                    :
                    props.tiponotif === "Template" ?
                    <p className='textoSeccaoPagina p-0'>O template foi eliminado com sucesso!</p>
                    :
                    props.tiponotif === "Utilizador" ?
                    <p className='textoSeccaoPagina p-0'>O utilizador foi eliminado com sucesso!</p>
                    :
                    props.tiponotif === "Evento" ?
                    <p className='textoSeccaoPagina p-0'>O evento foi eliminado com sucesso!</p>
                    :
                    props.tiponotif === "AddInfo" ?
                    <p className='textoSeccaoPagina p-0'>A informação foi adicionada à notificação com sucesso!</p>
                    :
                    props.tiponotif === "Editar"  ?
                    <p className='textoSeccaoPagina p-0'>A informação foi atualizada com sucesso!</p>
                    :
                    props.tiponotif === "CriarGrupo"  ?
                    <p className='textoSeccaoPagina p-0'>O grupo foi criado com sucesso!</p>
                    :
                    props.tiponotif === "CriarNotificação"  ?
                    <p className='textoSeccaoPagina p-0'>A notificação foi criada com sucesso!</p>
                    :
                    props.tiponotif === "CriarTemplate"  ?
                    <p className='textoSeccaoPagina p-0'>O template foi criado com sucesso!</p>
                    :
                    props.tiponotif === "CriarUtilizador"  ?
                    <p className='textoSeccaoPagina p-0'>O utilizador foi criado com sucesso!</p>
                    :
                    props.tiponotif === "CriarCasa"  ?
                    <p className='textoSeccaoPagina p-0'>A casa foi criada com sucesso!</p>
                    :
                    <></>
                    }
                </div>
                
                <div className='row m-0 mt-3 justify-content-end'>
                    {props.tiponotif === "Notificação" || props.tiponotif === "Rotina" || props.tiponotif === "AddInfo" || props.tiponotif === "Template" ?
                    <Button className='col-3' variant='success' onClick={() => props.onHide()}>Confirmar</Button>
                    :
                    props.tiponotif === "Editar" ?
                    <Button className='col-3' variant='success' onClick={() => navigate(-1)}>Confirmar</Button>
                    :
                    <Button 
                        as={Link} 
                        className='col-3' 
                        variant='success' 
                        to={
                            props.tiponotif === "CriarNotificação" ?
                            '/events'
                            :
                            props.tiponotif === "CriarGrupo" || props.tiponotif === "Evento" ?
                            '/events'
                            :
                            props.tiponotif === "Casa" ?
                            '/houses'
                            :
                            '/users'
                        }
                        >Confirmar</Button>
                    }
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default DeleteUser;
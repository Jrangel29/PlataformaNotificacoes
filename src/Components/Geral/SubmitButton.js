import React from 'react';
import '../../Styles/App.css';
import {Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createNewGroup } from '../../Store/Groups/Actions';
import { createNewUser } from '../../Store/Users/Actions';
import { createNewNotification } from '../../Store/Notifications/Actions';

const SubmitButton = (props) => {
    
    const dispatch = useDispatch();

    const criaUser = (nome, idade, idBox, distrito, concelho, saude, informacaoAdicional) => {
        props.openModal();
        dispatch(createNewUser(nome, idade, idBox, distrito, concelho, saude, informacaoAdicional));
    };

    const criaGrupo = (nome, descricao, idade, distrito, concelho) => {
        props.openModal();
        dispatch(createNewGroup(nome, descricao, idade, distrito, concelho));
    };

    const criaNotification = (tipologia, subcategoria, categoriaSaude, envioNotif, dias, tituloNotif, subtituloNotif, descricaoNotif, paramsPersonalizado) => {
        props.openModal();
        dispatch(createNewNotification(tipologia, subcategoria, categoriaSaude, envioNotif, dias, tituloNotif, subtituloNotif, descricaoNotif, paramsPersonalizado));
    };

    if(props.tipoForm === "User"){
        return(
            <>
                {props.params.infoUser.nomeUser === "" || props.params.infoUser.idade === "" || props.params.infoUser.idBox === "" || props.params.infoUser.distrito === "" || props.params.infoUser.concelho === "" ?
                <span className='row m-0 justify-content-end p-0'>
                    <Button className='col-2' variant='custom' disabled>Criar Utilizador</Button>
                </span>
                :
                <span className='row m-0 justify-content-end p-0'>
                    <Button 
                        className='col-2' 
                        variant='flat' 
                        onClick={
                            () => criaUser(props.params.infoUser.nomeUser, props.params.infoUser.idade, props.params.infoUser.idBox, props.params.infoUser.distrito, props.params.infoUser.concelho, props.params.mostraSaude, props.params.infoUser.infoAdicional)
                            }>Criar Utilizador</Button>
                </span>
                }
            </>
        )
    } else if(props.tipoForm === "Grupo"){
        return(
            <>
            {props.params.infoGroup.nomeGroup === "" || props.params.infoGroup.descricao === "" ?
            <span className='row m-0 p-0 justify-content-end'>
                <Button className='col-2' variant='custom' disabled>Criar Grupo</Button>
            </span>
            :
            <span className='row m-0 p-0 justify-content-end'>
                <Button 
                    className='col-2' 
                    variant='flat' 
                    onClick={
                        () => criaGrupo(props.params.infoGroup.nomeGroup, props.params.infoGroup.descricao, props.params.infoGroup.idade, props.params.infoGroup.distrito, props.params.infoGroup.concelho)
                        }>Criar Grupo</Button>
            </span>
            }
            </>
        )
    } else if(props.tipoForm === "Notification"){
        return(
            <>
            {
            props.params.tipologia === "Personalizado" && props.params.paramsPersonalizado.popupSecundario === "Não" && props.params.tituloNotif !== "" && props.params.envioNotif.tipoNotif !== "" ?
            <span className='row m-0 p-0 justify-content-end'>
                <Button 
                    className='col-2' 
                    variant='flat' 
                    onClick={
                        () => criaNotification(props.params.tipologia, props.params.categoriaInfo, props.params.terceiraCategoriaSaude, props.params.envioNotif, props.params.dias, props.params.tituloNotif, props.params.subtituloNotif, props.params.descricaoNotif, props.params.paramsPersonalizado)
                        }>Criar Grupo</Button>
            </span>
            :
            props.params.tipologia === "" || props.params.tituloNotif === "" || props.params.subtituloNotif === "" || props.params.descricaoNotif === "" || props.params.envioNotif.tipoNotif === "" ?
            <span className='row m-0 p-0 justify-content-end'>
                <Button className='col-2' variant='custom' disabled>Criar Grupo</Button>
            </span>
            :
            <span className='row m-0 p-0 justify-content-end'>
                <Button 
                    className='col-2' 
                    variant='flat' 
                    onClick={
                        () => criaNotification(props.params.tipologia, props.params.categoriaInfo, props.params.terceiraCategoriaSaude, props.params.envioNotif, props.params.dias, props.params.tituloNotif, props.params.subtituloNotif, props.params.descricaoNotif, props.params.paramsPersonalizado)
                        }>Criar Grupo</Button>
            </span>
            }
            </>
        )
    }
}

export default SubmitButton;
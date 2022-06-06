import React from 'react';
import '../../Styles/App.css';
import {Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createNewGroup } from '../../Store/Groups/Actions';
import { updateUserInfo, createNewUser } from '../../Store/Users/Actions';
import { createNewNotification } from '../../Store/Notifications/Actions';
import { createNewHouse, getHousePeopleList } from '../../Store/Casas/Actions';

const SubmitButton = (props) => {
    
    const dispatch = useDispatch();

    let contagemDias = 0;
    let contagemMomentos = 0;

    const criaUser = (nome, idade, idCasa, informacaoAdicional, blackList) => {
        props.openModal();
        dispatch(createNewUser(nome, idade, idCasa, informacaoAdicional, blackList));
    };

    const editaUser = (idUser, nome, idade, idCasa, informacaoAdicional, blackList) => {
        props.openModal();
        console.log(idUser, nome, idade, idCasa, informacaoAdicional, blackList)
        dispatch(updateUserInfo(idUser, nome, idade, idCasa, informacaoAdicional, blackList));
    };

    const criaGrupo = (nome, descricao, idade, distrito, concelho) => {
        props.openModal();
        dispatch(createNewGroup(nome, descricao, idade, distrito, concelho));
    };

    const criaNotification = (tipologia, regularidade, nomeItem, momentoUnico, mensagens, idTipologia, hora, envioNotif, idRegular, dias, diaUnico, diaMes, subcategoria, paramsPersonalizado, casasEscolhidas, usersEscolhidos, dataFim) => {
        props.openModal();
        dispatch(createNewNotification(tipologia, regularidade, nomeItem, momentoUnico, mensagens, idTipologia, hora, envioNotif, idRegular, dias, diaUnico, diaMes, subcategoria, paramsPersonalizado, casasEscolhidas, usersEscolhidos, dataFim));
    };

    const criaCasa = (nome, id, concelho) => {
        props.openModal();
        dispatch(createNewHouse(nome, id, concelho));
    };

    if(props.tipoForm === "User"){
        return(
            <>
                {props.params.infoUser.nomeUser === "" || props.params.infoUser.idade === "" || props.params.infoUser.idCasa === "" || props.params.infoUser.infoAdicional === "" ?
                <span className='row m-0 justify-content-end'>
                    <Button className='col-2' variant='custom' disabled>Criar Utilizador</Button>
                </span>
                :
                <span className='row m-0 justify-content-end'>
                    <Button 
                        className='col-2' 
                        variant='flat' 
                        onClick={
                            () => criaUser(props.params.infoUser.nomeUser, props.params.infoUser.idade, props.params.infoUser.idCasa, props.params.infoUser.infoAdicional, props.params.tipologias)
                            }>Criar Utilizador</Button>
                </span>
                }
            </>
        )
    } else if(props.tipoForm === "UserEdit"){
        return(
            <>
                {props.params.infoUser.nomeUser === "" || props.params.infoUser.idade === "" || props.params.infoUser.idCasa === "" || props.params.infoUser.infoAdicional === "" ?
                <span className='row m-0 justify-content-end'>
                    <Button className='col-2' variant='custom' disabled>Confirmar Alterações</Button>
                </span>
                :
                <span className='row m-0 justify-content-end'>
                    <Button 
                        className='col-2' 
                        variant='flat' 
                        onClick={
                            () => editaUser(props.params.infoUser.userId, props.params.infoUser.nomeUser, props.params.infoUser.idade, props.params.infoUser.idCasa, props.params.infoUser.infoAdicional, props.params.tipologias)
                            }>Confirmar Alterações</Button>
                </span>
                }
            </>
        )
    } else if(props.tipoForm === "Grupo"){
        return(
            <>
            {props.params.infoGroup.nomeGroup === "" || props.params.infoGroup.descricao === "" ?
            <span className='row m-0 justify-content-end'>
                <Button className='col-2' variant='custom' disabled>Criar Grupo</Button>
            </span>
            :
            <span className='row m-0 justify-content-end'>
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
        //console.log(props.params)
        return(
            <>
            {
            props.params.tipologia === "" || props.params.idTipologia === "" || props.params.nomeItem === "" || props.params.envioNotif.envioNotif === "" || props.params.envioNotif.regularidade === "" ?
            <span className='row m-0 justify-content-end'>
                <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
            </span>
            :
                props.params.tipologia === 'Agenda' || props.params.tipologia === 'Saúde' || props.params.tipologia === 'Programas' || props.params.tipologia === 'Personalizada' && props.params.paramsPersonalizado.tipoRecetor === 'Recetores Individuais' ?
                    props.params.usersEscolhidos.length === 0 ?
                    <span className='row m-0 justify-content-end'>
                        <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                    </span>
                    :
                        props.params.regularidade === 'Pontual' ?
                            props.params.momentoUnico === 'Imediato' ?
                                props.params.mensagens.imediato.active === true && props.params.mensagens.imediato.message !== '' ?
                                    <span className='row m-0 justify-content-end'>
                                        <Button 
                                            className='col-2' 
                                            variant='flat' 
                                            onClick={
                                                () => criaNotification(props.params.tipologia, props.params.regularidade, props.params.nomeItem, props.params.momentoUnico, props.params.mensagens, props.params.idTipologia, props.params.hora, props.params.envioNotif, props.params.idRegular, props.params.dias, props.params.diaUnico, props.params.diaMes, props.params.categoriaInfo, props.params.paramsPersonalizado, props.params.casasEscolhidas, props.params.usersEscolhidos, props.params.dataFim)
                                                }>Criar Notificação</Button>
                                    </span>
                                :
                                <span className='row m-0 justify-content-end'>
                                    <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                </span>
                            :
                                props.params.diaUnico !== '' && props.params.hora !== '' ?
                                    <>
                                        {Object.keys(props.params.mensagens).map(item => {
                                            if(item !== "meiaHora" && props.params.mensagens[item].active === true && props.params.mensagens[item].message !== ''){
                                                contagemMomentos++;
                                            }
                                            if(item === "meiaHora" && props.params.mensagens[item].active === true && props.params.mensagens[item].message !== '' && props.params.mensagens[item].tituloBlade !== '' && props.params.mensagens[item].descricao !== ''){
                                                contagemMomentos++;
                                            }
                                        })}
                                        {contagemMomentos !== 0 && props.params.hora !== '' ?
                                        <span className='row m-0 justify-content-end'>
                                            <Button 
                                                className='col-2' 
                                                variant='flat' 
                                                onClick={
                                                    () => criaNotification(props.params.tipologia, props.params.regularidade, props.params.nomeItem, props.params.momentoUnico, props.params.mensagens, props.params.idTipologia, props.params.hora, props.params.envioNotif, props.params.idRegular, props.params.dias, props.params.diaUnico, props.params.diaMes, props.params.categoriaInfo, props.params.paramsPersonalizado, props.params.casasEscolhidas, props.params.usersEscolhidos, props.params.dataFim)
                                                    }>Criar Notificação</Button>
                                        </span>
                                        :
                                        <span className='row m-0 justify-content-end'>
                                            <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                        </span>
                                        }
                                    </> 
                                :
                                <span className='row m-0 justify-content-end'>
                                    <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                </span>
                        :
                            props.params.envioNotif === 'Diária' ?
                                props.params.hora !== '' && props.params.dataFim !== '' ?
                                <>
                                    {Object.keys(props.params.mensagens).map(item => {
                                        if(item !== "meiaHora" && props.params.mensagens[item].active === true && props.params.mensagens[item].message !== ''){
                                            contagemMomentos++;
                                        }
                                        if(item === "meiaHora" && props.params.mensagens[item].active === true && props.params.mensagens[item].message !== '' && props.params.mensagens[item].tituloBlade !== '' && props.params.mensagens[item].descricao !== ''){
                                            contagemMomentos++;
                                        }
                                    })}
                                    {contagemMomentos !== 0 ?
                                    <span className='row m-0 justify-content-end'>
                                        <Button 
                                            className='col-2' 
                                            variant='flat' 
                                            onClick={
                                                () => criaNotification(props.params.tipologia, props.params.regularidade, props.params.nomeItem, props.params.momentoUnico, props.params.mensagens, props.params.idTipologia, props.params.hora, props.params.envioNotif, props.params.idRegular, props.params.dias, props.params.diaUnico, props.params.diaMes, props.params.categoriaInfo, props.params.paramsPersonalizado, props.params.casasEscolhidas, props.params.usersEscolhidos, props.params.dataFim)
                                                }>Criar Notificação</Button>
                                    </span>
                                    :
                                    <span className='row m-0 justify-content-end'>
                                        <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                    </span>
                                    }
                                </> 
                                :
                                <span className='row m-0 justify-content-end'>
                                    <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                </span>
                            :  
                            props.params.envioNotif === 'Semanal' ?
                                <>
                                    {Object.keys(props.params.dias).map(item => {
                                        if(props.params.dias[item] === true){
                                            contagemDias++;
                                        }
                                    })}
                                    {Object.keys(props.params.mensagens).map(item => {
                                        if(item !== "meiaHora" && props.params.mensagens[item].active === true && props.params.mensagens[item].message !== ''){
                                            contagemMomentos++;
                                        }
                                        if(item === "meiaHora" && props.params.mensagens[item].active === true && props.params.mensagens[item].message !== '' && props.params.mensagens[item].tituloBlade !== '' && props.params.mensagens[item].descricao !== ''){
                                            contagemMomentos++;
                                        }
                                    })}
                                    {contagemDias !== 0 && contagemMomentos !== 0 && props.params.hora !== '' && props.params.dataFim !== '' ?
                                    <span className='row m-0 justify-content-end'>
                                        <Button 
                                            className='col-2' 
                                            variant='flat' 
                                            onClick={
                                                () => criaNotification(props.params.tipologia, props.params.regularidade, props.params.nomeItem, props.params.momentoUnico, props.params.mensagens, props.params.idTipologia, props.params.hora, props.params.envioNotif, props.params.idRegular, props.params.dias, props.params.diaUnico, props.params.diaMes, props.params.categoriaInfo, props.params.paramsPersonalizado, props.params.casasEscolhidas, props.params.usersEscolhidos, props.params.dataFim)
                                                }>Criar Notificação</Button>
                                    </span>
                                    :
                                    <span className='row m-0 justify-content-end'>
                                        <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                    </span>
                                    }
                                </> 
                                :
                                props.params.diaMes !== '' && props.params.hora !== '' && props.params.dataFim !== '' ?
                                    <span className='row m-0 justify-content-end'>
                                        <Button 
                                            className='col-2' 
                                            variant='flat' 
                                            onClick={
                                                () => criaNotification(props.params.tipologia, props.params.regularidade, props.params.nomeItem, props.params.momentoUnico, props.params.mensagens, props.params.idTipologia, props.params.hora, props.params.envioNotif, props.params.idRegular, props.params.dias, props.params.diaUnico, props.params.diaMes, props.params.categoriaInfo, props.params.paramsPersonalizado, props.params.casasEscolhidas, props.params.usersEscolhidos, props.params.dataFim)
                                                }>Criar Notificação</Button>
                                    </span>
                                    :
                                    <span className='row m-0 justify-content-end'>
                                        <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                    </span>             
                :
                props.params.casasEscolhidas.length !== 0 ?
                    props.params.regularidade === 'Pontual' ?
                        props.params.tipologia === 'Serviços' ?
                            props.params.momentoUnico === 'Imediato' ?
                                props.params.mensagens.imediato.active === true && props.params.mensagens.imediato.message !== '' ?
                                    <span className='row m-0 justify-content-end'>
                                        <Button 
                                            className='col-2' 
                                            variant='flat' 
                                            onClick={
                                                () => criaNotification(props.params.tipologia, props.params.regularidade, props.params.nomeItem, props.params.momentoUnico, props.params.mensagens, props.params.idTipologia, props.params.hora, props.params.envioNotif, props.params.idRegular, props.params.dias, props.params.diaUnico, props.params.diaMes, props.params.categoriaInfo, props.params.paramsPersonalizado, props.params.casasEscolhidas, props.params.usersEscolhidos, props.params.dataFim)
                                                }>Criar Notificação</Button>
                                    </span>
                                :
                                <span className='row m-0 justify-content-end'>
                                    <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                </span>
                            :
                                props.params.diaUnico !== '' && props.params.hora !== '' ?
                                    <>
                                        {Object.keys(props.params.mensagens).map(item => {
                                            if(item !== "meiaHora" && props.params.mensagens[item].active === true && props.params.mensagens[item].message !== ''){
                                                contagemMomentos++;
                                            }
                                            if(item === "meiaHora" && props.params.mensagens[item].active === true && props.params.mensagens[item].message !== '' && props.params.mensagens[item].tituloBlade !== '' && props.params.mensagens[item].descricao !== ''){
                                                contagemMomentos++;
                                            }
                                        })}
                                        {contagemMomentos !== 0 && props.params.hora !== '' ?
                                        <span className='row m-0 justify-content-end'>
                                            <Button 
                                                className='col-2' 
                                                variant='flat' 
                                                onClick={
                                                    () => criaNotification(props.params.tipologia, props.params.regularidade, props.params.nomeItem, props.params.momentoUnico, props.params.mensagens, props.params.idTipologia, props.params.hora, props.params.envioNotif, props.params.idRegular, props.params.dias, props.params.diaUnico, props.params.diaMes, props.params.categoriaInfo, props.params.paramsPersonalizado, props.params.casasEscolhidas, props.params.usersEscolhidos, props.params.dataFim)
                                                    }>Criar Notificação</Button>
                                        </span>
                                        :
                                        <span className='row m-0 justify-content-end'>
                                            <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                        </span>
                                        }
                                    </> 
                                :
                                <span className='row m-0 justify-content-end'>
                                    <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                </span>
                        :
                            <>
                                {Object.keys(props.params.mensagens).map(item => {
                                    if(props.params.mensagens[item].active === true && props.params.mensagens[item].message !== ''){
                                        contagemMomentos++;
                                    }
                                })}
                                {contagemMomentos !== 0 ?
                                <span className='row m-0 justify-content-end'>
                                    <Button 
                                        className='col-2' 
                                        variant='flat' 
                                        onClick={
                                            () => criaNotification(props.params.tipologia, props.params.regularidade, props.params.nomeItem, props.params.momentoUnico, props.params.mensagens, props.params.idTipologia, props.params.hora, props.params.envioNotif, props.params.idRegular, props.params.dias, props.params.diaUnico, props.params.diaMes, props.params.categoriaInfo, props.params.paramsPersonalizado, props.params.casasEscolhidas, props.params.usersEscolhidos, props.params.dataFim)
                                            }>Criar Notificação</Button>
                                </span>
                                :
                                <span className='row m-0 justify-content-end'>
                                    <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                </span>
                                }
                            </>  
                    :
                        props.params.envioNotif === 'Diária' ?
                            props.params.tipologia === 'Serviços' ?
                                props.params.hora !== '' && props.params.dataFim !== '' ?
                                <>
                                    {Object.keys(props.params.mensagens).map(item => {
                                        if(item !== "meiaHora" && props.params.mensagens[item].active === true && props.params.mensagens[item].message !== ''){
                                            contagemMomentos++;
                                        }
                                        if(item === "meiaHora" && props.params.mensagens[item].active === true && props.params.mensagens[item].message !== '' && props.params.mensagens[item].tituloBlade !== '' && props.params.mensagens[item].descricao !== ''){
                                            contagemMomentos++;
                                        }
                                    })}
                                    {contagemMomentos !== 0 ?
                                    <span className='row m-0 justify-content-end'>
                                        <Button 
                                            className='col-2' 
                                            variant='flat' 
                                            onClick={
                                                () => criaNotification(props.params.tipologia, props.params.regularidade, props.params.nomeItem, props.params.momentoUnico, props.params.mensagens, props.params.idTipologia, props.params.hora, props.params.envioNotif, props.params.idRegular, props.params.dias, props.params.diaUnico, props.params.diaMes, props.params.categoriaInfo, props.params.paramsPersonalizado, props.params.casasEscolhidas, props.params.usersEscolhidos, props.params.dataFim)
                                                }>Criar Notificação</Button>
                                    </span>
                                    :
                                    <span className='row m-0 justify-content-end'>
                                        <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                    </span>
                                    }
                                </> 
                                :
                                <span className='row m-0 justify-content-end'>
                                    <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                </span>
                            :
                                <>
                                    {Object.keys(props.params.mensagens).map(item => {
                                        if(item !== "meiaHora" && props.params.mensagens[item].active === true && props.params.mensagens[item].message !== ''){
                                            contagemMomentos++;
                                        }
                                        if(item === "meiaHora" && props.params.mensagens[item].active === true && props.params.mensagens[item].message !== '' && props.params.mensagens[item].tituloBlade !== '' && props.params.mensagens[item].descricao !== ''){
                                            contagemMomentos++;
                                        }
                                    })}
                                    {contagemMomentos !== 0 ?
                                    <span className='row m-0 justify-content-end'>
                                        <Button 
                                            className='col-2' 
                                            variant='flat' 
                                            onClick={
                                                () => criaNotification(props.params.tipologia, props.params.regularidade, props.params.nomeItem, props.params.momentoUnico, props.params.mensagens, props.params.idTipologia, props.params.hora, props.params.envioNotif, props.params.idRegular, props.params.dias, props.params.diaUnico, props.params.diaMes, props.params.categoriaInfo, props.params.paramsPersonalizado, props.params.casasEscolhidas, props.params.usersEscolhidos, props.params.dataFim)
                                                }>Criar Notificação</Button>
                                    </span>
                                    :
                                    <span className='row m-0 justify-content-end'>
                                        <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                    </span>
                                    }
                                </> 
                        :  
                        props.params.envioNotif === 'Semanal' ?
                            <>
                                {Object.keys(props.params.dias).map(item => {
                                    if(item === true){
                                        contagemDias++;
                                    }
                                })}
                                {contagemDias !== 0 && props.params.hora !== '' && props.params.dataFim !== '' && props.params.tipologia === 'Serviços' || contagemDias !== 0 && props.params.tipologia === 'Informação' ?
                                <span className='row m-0 justify-content-end'>
                                    <Button 
                                        className='col-2' 
                                        variant='flat' 
                                        onClick={
                                            () => criaNotification(props.params.tipologia, props.params.regularidade, props.params.nomeItem, props.params.momentoUnico, props.params.mensagens, props.params.idTipologia, props.params.hora, props.params.envioNotif, props.params.idRegular, props.params.dias, props.params.diaUnico, props.params.diaMes, props.params.categoriaInfo, props.params.paramsPersonalizado, props.params.casasEscolhidas, props.params.usersEscolhidos, props.params.dataFim)
                                            }>Criar Notificação</Button>
                                </span>
                                :
                                <span className='row m-0 justify-content-end'>
                                    <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                </span>
                                }
                            </> 
                            :
                            props.params.diaMes !== '' && props.params.hora !== '' && props.params.dataFim !== '' ?
                                <span className='row m-0 justify-content-end'>
                                    <Button 
                                        className='col-2' 
                                        variant='flat' 
                                        onClick={
                                            () => criaNotification(props.params.tipologia, props.params.regularidade, props.params.nomeItem, props.params.momentoUnico, props.params.mensagens, props.params.idTipologia, props.params.hora, props.params.envioNotif, props.params.idRegular, props.params.dias, props.params.diaUnico, props.params.diaMes, props.params.categoriaInfo, props.params.paramsPersonalizado, props.params.casasEscolhidas, props.params.usersEscolhidos, props.params.dataFim)
                                            }>Criar Notificação</Button>
                                </span>
                                :
                                <span className='row m-0 justify-content-end'>
                                    <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                                </span>
                :
                <span className='row m-0 justify-content-end'>
                    <Button className='col-2' variant='custom' disabled>Criar Notificação</Button>
                </span>
            }
            </>
        )
    } else if(props.tipoForm === "Casa"){
        return(
            <>
                {props.params.infoUser.nomeCasa === "" || props.params.infoUser.idBox === "" || props.params.infoUser.distrito === "" || props.params.infoUser.concelho === "" ?
                <span className='row m-0 justify-content-end'>
                    <Button className='col-2' variant='custom' disabled>Criar Casa</Button>
                </span>
                :
                <span className='row m-0 justify-content-end'>
                    <Button 
                        className='col-2' 
                        variant='flat'
                        onClick={
                            () => criaCasa(props.params.infoUser.nomeCasa, props.params.infoUser.idBox, props.params.infoUser.concelho)
                        } 
                        >Criar Casa</Button>
                </span>
                }
            </>
        )
    }
}

export default SubmitButton;
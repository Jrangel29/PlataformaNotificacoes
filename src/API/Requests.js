import { GetDiaSemana, GetMeses, GetEveryday, GetUnique, GetDiaMes, GetMesesDif } from "./Hooks";
import { GeraNotificacoes } from './CreateNotifs';

//DEMO

export const EnviaNotification = (notification) => {
    fetch(`https://geo-navsafety.ua.pt:443/overtv/notifications/demo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({notification})
    }).then(response => console.log(response))
}




//USERS

export const createUser = (nome, idade, ref_id_casa, informacoes, blacklist) => {
    fetch(`https://geo-navsafety.ua.pt:443/overtv/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome, idade, ref_id_casa, informacoes, blacklist})
    }).then(response => response.json())
}

export const updateUser = (uid, nome, idade, ref_id_casa, informacoes, blacklist) => {
    fetch(`https://geo-navsafety.ua.pt:443/overtv/users`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({uid, nome, idade, ref_id_casa, informacoes, blacklist})
    }).then(response => response.json())
}

export const fetchUsers = () =>
  fetch(`https://geo-navsafety.ua.pt:443/overtv/users`)
    .then(response => response.json())

export const fetchTipologiaUsers = (id) =>
  fetch(`https://geo-navsafety.ua.pt:443/overtv/users/?tipologia=${id}`)
    .then(response => response.json())

export const fetchSingleUser = (id) =>
  fetch(`https://geo-navsafety.ua.pt:443/overtv/users/${id}`)
    .then(response => response.json())

export const deleteUser = (id) => {
    fetch(`https://geo-navsafety.ua.pt:443/overtv/users/${id}`, {
        method: 'DELETE'
    })
}



//CASAS

export const createHouse = (nome, idBox, concelho) => {
    fetch(`https://geo-navsafety.ua.pt:443/overtv/casas`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome, idBox, concelho})
    }).then(response => response.json())
}

export const updateHouse = (id_casa, nome, idBox, concelho, recebe) => {
    
    //console.log(id_casa)
    fetch(`https://geo-navsafety.ua.pt:443/overtv/casas`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id_casa, nome, idBox, concelho, recebe})
    }).then(response => response.json())
}

export const fetchHouses = () =>
  fetch(`https://geo-navsafety.ua.pt:443/overtv/casas`)
    .then(response => response.json())

export const fetchHousePeople = (id) =>
    fetch(`https://geo-navsafety.ua.pt:443/overtv/casas/${id}`)
      .then(response => response.json())

export const deleteHouse = (id) => {
    fetch(`https://geo-navsafety.ua.pt:443/overtv/casas/${id}`, {
        method: 'DELETE'
    })
}



//GROUPS

export const createGroup = (name, descricao, idade, distrito, concelho) => {
    fetch(`https://geo-navsafety.ua.pt:443/overtv/grupos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, descricao, idade, distrito, concelho})
    }).then(response => response.json())
}


//TIPOLOGIAS

export const fetchTipologiaList = () =>
  fetch(`https://geo-navsafety.ua.pt:443/overtv/tipologias`)
    .then(response => response.json())


//DISTRITOS

export const fetchDistritosList = () =>
  fetch(`https://geo-navsafety.ua.pt:443/overtv/localidade/distritos`)
    .then(response => response.json())


//CONCELHOS

export const fetchConcelhos = (id) =>
  fetch(`https://geo-navsafety.ua.pt:443/overtv/localidade/concelhos/${id}`)
    .then(response => response.json())


//EVENTOS

export const fetchEventos = () =>
    fetch(`https://geo-navsafety.ua.pt:443/overtv/eventos`)
      .then(response => response.json())

export const fetchSingleEvent = (id) =>
    fetch(`https://geo-navsafety.ua.pt:443/overtv/eventos/${id}`)
      .then(response => response.json())


export const deleteEvent = (id) => {
    fetch(`https://geo-navsafety.ua.pt:443/overtv/eventos/${id}`, {
        method: 'DELETE'
    })
}


//NOTIFICATIONS

export const fetchAllNotifications = () =>
    fetch(`https://geo-navsafety.ua.pt:443/overtv/notifications`)
      .then(response => response.json())

export const fetchAllNotificationsStats = () =>
    fetch(`https://geo-navsafety.ua.pt:443/overtv/notifications/stats`)
      .then(response => response.json())

export const fetchNotifications = (id) =>
    fetch(`https://geo-navsafety.ua.pt:443/overtv/notifications/user/${id}`)
      .then(response => response.json())

export const fetchNotificationInfo = (id) =>
    fetch(`https://geo-navsafety.ua.pt:443/overtv/notifications/${id}`)
      .then(response => response.json())

export const createNotification = (tipologia, intervaloTempo, nomeItem, momentoUnico, mensagens, idTipologia, horaEvento, envioNotif, idRegular, dias, diaUnico, diaMes, subcategoria, paramsPersonalizado, casasEscolhidas, usersEscolhidos, dataFim, canal, tipoPersonalizado) => {
    //console.log({tipologia: tipologia, intervalo: intervaloTempo, nome: nomeItem, momento: momentoUnico, mensagens: mensagens, idTipo: idTipologia, hora: horaEvento, envio: envioNotif, idReg: idRegular, dias: dias, diaUnico: diaUnico, diaMes: diaMes, sub: subcategoria, params: paramsPersonalizado, casas: casasEscolhidas, users: usersEscolhidos, dataFim: dataFim, canal: canal})
    const objectImagens = {
        "Agenda": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeAgenda.png?alt=media&token=38fb87cc-f8fa-4015-a775-b4da0e6b9a77",
        "Saúde": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeSaude.png?alt=media&token=fd1ae805-eea2-4dce-b4f8-4d904c4e65b4",
        "Programas": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeProgramas.png?alt=media&token=3e89e385-5379-403a-93b5-d05f9efda5a6",
        "Informação": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeInformacao.png?alt=media&token=e706c143-43d2-4625-af36-22a1a658ee30",
        "Serviços": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeServicos.png?alt=media&token=2d858888-6925-482c-b2e5-2c89722e5626",
        "Social": 'https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/Social.png?alt=media&token=71468c63-2340-4eef-85a5-007f6f83b9f9'
    }


    //DATAS

    if(envioNotif === 'Pontual' && momentoUnico === 'Dia e Hora'){
        var diaInicio = new Date(diaUnico);
        var weekDay = diaInicio.getDay();
    }

    if(envioNotif === 'Pontual' && momentoUnico === 'Imediato'){
        var diaInicio = new Date();
        var diaImediato = diaInicio.getFullYear() + '-' + ((diaInicio.getMonth() > 8) ? (diaInicio.getMonth() + 1) : ('0' + (diaInicio.getMonth() + 1))) + '-' + ((diaInicio.getDate() > 9) ? diaInicio.getDate() : ('0' + diaInicio.getDate()));
        var horaImediato = `${diaInicio.getHours() < 10 ? `0${diaInicio.getHours()}` : diaInicio.getHours()}:${(diaInicio.getMinutes() < 10) ? `0${diaInicio.getMinutes()}` : diaInicio.getMinutes()}`;
    }

    if(envioNotif === 'Diária' || envioNotif === 'Mensal'){
        var diaInicio = new Date();
    }

    if(envioNotif === 'Semanal'){
        var diaInicio = new Date();
        var diasWeek = [];
        Object.keys(dias).map(item => {
            if(dias[item] === true){
                let str = item.slice(item.length - 1);
                diasWeek.push(str)
            }
        })
    }
    

    //Tipologias



    var ObjetoEnvio = {
        nome_evento: nomeItem,
        tipologia: idTipologia,
        regularidade: {
            tipo: idRegular,
            data: '', // diaUnico
            hora: '', // horaEvento
            dias: []
        },
        destinatarios: [],
        notificacoes:[]
    }

    var contagemUser = 0;
    var casasUser = [];

    //console.log(objectImagens[paramsPersonalizado.icone])

    usersEscolhidos.map(item => {
        if(tipologia === 'Personalizada' || tipologia === 'Programas'){
            if(ObjetoEnvio.destinatarios.length === 0){
                ObjetoEnvio.destinatarios.push(item.idUser)
            }
            for (let i = 0; i < ObjetoEnvio.destinatarios.length; i++){
                if(ObjetoEnvio.destinatarios[i] === item.idUser){
                    casasUser.push(item.idCasa);
                }
            }
            for (let i = 0; i < casasUser; i++){
                if(casasUser[i] === item.idCasa){
                    contagemUser++;
                }
            }
            if(contagemUser === 0){
                ObjetoEnvio.destinatarios.push(item.idUser)
            }
            contagemUser = 0;
        } else {
            ObjetoEnvio.destinatarios.push(item.idUser)
        }
    })

    if(envioNotif === 'Pontual' && momentoUnico === 'Dia e Hora'){
        let diasEvento = GetUnique(diaInicio, mensagens);
        let notificacao = GeraNotificacoes(mensagens, diasEvento, tipologia, horaEvento, momentoUnico, 'Unico', diaInicio, paramsPersonalizado.icone, paramsPersonalizado.usaIcone, canal, tipoPersonalizado);
        
        let dataNew = new Date(diaInicio);
        let diaFormated = dataNew.getFullYear() + '-' + ((dataNew.getMonth() > 8) ? (dataNew.getMonth() + 1) : ('0' + (dataNew.getMonth() + 1))) + '-' + ((dataNew.getDate() > 9) ? dataNew.getDate() : ('0' + dataNew.getDate()));
        
        ObjetoEnvio.regularidade.tipo = 1;
        ObjetoEnvio.regularidade.data = diaFormated;
        ObjetoEnvio.regularidade.hora = horaEvento;
        if(weekDay !== 0){
            ObjetoEnvio.regularidade.dias = [weekDay];
        } else {
            ObjetoEnvio.regularidade.dias = [7];
        }
        ObjetoEnvio.notificacoes = notificacao;

        if(mensagens.imediato.active === true){
            var diaInicio = new Date();
            var diaImediato = diaInicio.getFullYear() + '-' + ((diaInicio.getMonth() > 8) ? (diaInicio.getMonth() + 1) : ('0' + (diaInicio.getMonth() + 1))) + '-' + ((diaInicio.getDate() > 9) ? diaInicio.getDate() : ('0' + diaInicio.getDate()));
            var horaImediato = `${diaInicio.getHours() < 10 ? `0${diaInicio.getHours()}` : diaInicio.getHours()}:${(diaInicio.getMinutes() < 10) ? `0${diaInicio.getMinutes()}` : diaInicio.getMinutes()}`;

            if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Sim"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: objectImagens[paramsPersonalizado.icone],
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Não"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: null,
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else {
                let imediato = {
                    mensagem: mensagens.imediato.message,
                    url_icone: objectImagens[tipologia],
                    data: diaImediato,
                    hora: horaImediato,
                    rotina: null,
                    zapping: 0,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                }
                ObjetoEnvio.notificacoes.push(imediato)
            }
        }
    }

    if(envioNotif === 'Pontual' && momentoUnico === 'Imediato'){
        if(tipologia === 'Serviços'){
            let notificacao = {
                mensagem: mensagens.imediato.message,
                url_icone: objectImagens[tipologia],
                data: diaImediato,
                hora: horaImediato,
                rotina: null,
                zapping: 0,
                titulo: mensagens.imediato.tituloBlade,
                descricao: mensagens.imediato.descricao,
                botao_titulo: 'Ir para App',
                botao_navigate: `page:${canal.id}`,
            }
            ObjetoEnvio.regularidade.tipo = 1;
            ObjetoEnvio.regularidade.data = diaImediato;
            ObjetoEnvio.regularidade.hora = horaImediato;
            ObjetoEnvio.regularidade.dias = [];
            ObjetoEnvio.notificacoes.push(notificacao);
        } else if(tipologia === 'Programas'){
            let notificacao = {
                mensagem: mensagens.imediato.message,
                url_icone: objectImagens[tipologia],
                data: diaImediato,
                hora: horaImediato,
                rotina: null,
                zapping: 0,
                titulo: mensagens.imediato.tituloBlade,
                descricao: mensagens.imediato.descricao,
                botao_titulo: `Mudar para ${canal.nome}`,
                botao_navigate: `tune:${canal.id}`,
            }
            ObjetoEnvio.regularidade.tipo = 1;
            ObjetoEnvio.regularidade.data = diaImediato;
            ObjetoEnvio.regularidade.hora = horaImediato;
            ObjetoEnvio.regularidade.dias = [];
            ObjetoEnvio.notificacoes.push(notificacao);
        } else if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Sim"){
            let imediato = {
                mensagem: mensagens.imediato.message,
                url_icone: objectImagens[paramsPersonalizado.icone],
                data: diaImediato,
                hora: horaImediato,
                rotina: null,
                zapping: 0,
                titulo: null,
                descricao: null,
                botao_titulo: null,
                botao_navigate: null,
            }
            ObjetoEnvio.regularidade.tipo = 1;
            ObjetoEnvio.regularidade.data = diaImediato;
            ObjetoEnvio.regularidade.hora = horaImediato;
            ObjetoEnvio.regularidade.dias = [];
            ObjetoEnvio.notificacoes.push(imediato)
        } else if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Não"){
            let imediato = {
                mensagem: mensagens.imediato.message,
                url_icone: null,
                data: diaImediato,
                hora: horaImediato,
                rotina: null,
                zapping: 0,
                titulo: null,
                descricao: null,
                botao_titulo: null,
                botao_navigate: null,
            }
            ObjetoEnvio.regularidade.tipo = 1;
            ObjetoEnvio.regularidade.data = diaImediato;
            ObjetoEnvio.regularidade.hora = horaImediato;
            ObjetoEnvio.regularidade.dias = [];
            ObjetoEnvio.notificacoes.push(imediato)
        } else {
            let notificacao = {
                mensagem: mensagens.imediato.message,
                url_icone: objectImagens[tipologia],
                data: diaImediato,
                hora: horaImediato,
                rotina: null,
                zapping: 0,
                titulo: null,
                descricao: null,
                botao_titulo: null,
                botao_navigate: null,
            }
            ObjetoEnvio.regularidade.tipo = 1;
            ObjetoEnvio.regularidade.data = diaImediato;
            ObjetoEnvio.regularidade.hora = horaImediato;
            ObjetoEnvio.regularidade.dias = [];
            ObjetoEnvio.notificacoes.push(notificacao);
        }
    }

    if(envioNotif === 'Diária'){
        let meses = GetMesesDif(diaInicio, dataFim);
        let diasEvento = GetEveryday(GetMeses(meses), dataFim);
        let notificacao = GeraNotificacoes(mensagens, diasEvento, tipologia, horaEvento, momentoUnico, 'Diária', envioNotif, paramsPersonalizado.icone, paramsPersonalizado.usaIcone, canal, tipoPersonalizado);
        ObjetoEnvio.regularidade.tipo = 2;
        ObjetoEnvio.regularidade.data = null;
        ObjetoEnvio.regularidade.hora = horaEvento;
        ObjetoEnvio.regularidade.dias = [1, 2, 3, 4, 5, 6, 7];
        ObjetoEnvio.notificacoes = notificacao;
       
        if(mensagens.imediato.active === true){
            var diaInicio = new Date();
            var diaImediato = diaInicio.getFullYear() + '-' + ((diaInicio.getMonth() > 8) ? (diaInicio.getMonth() + 1) : ('0' + (diaInicio.getMonth() + 1))) + '-' + ((diaInicio.getDate() > 9) ? diaInicio.getDate() : ('0' + diaInicio.getDate()));
            var horaImediato = `${diaInicio.getHours() < 10 ? `0${diaInicio.getHours()}` : diaInicio.getHours()}:${(diaInicio.getMinutes() < 10) ? `0${diaInicio.getMinutes()}` : diaInicio.getMinutes()}`;

            if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Sim"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: objectImagens[paramsPersonalizado.icone],
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Não"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: null,
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else {
                let imediato = {
                    mensagem: mensagens.imediato.message,
                    url_icone: objectImagens[tipologia],
                    data: diaImediato,
                    hora: horaImediato,
                    rotina: null,
                    zapping: 0,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                }
                ObjetoEnvio.notificacoes.push(imediato)
            }
        }
    }

    if(envioNotif === 'Semanal'){
        let meses = GetMesesDif(diaInicio, dataFim);
        let diasEvento = GetDiaSemana(diasWeek, GetMeses(meses), mensagens, dataFim);
        let notificacao = GeraNotificacoes(mensagens, diasEvento, tipologia, horaEvento, momentoUnico, 'Semanal', envioNotif, paramsPersonalizado.icone, paramsPersonalizado.usaIcone, canal, tipoPersonalizado);
        ObjetoEnvio.regularidade.tipo = 3;
        ObjetoEnvio.regularidade.data = null;
        ObjetoEnvio.regularidade.data = diaUnico;
        ObjetoEnvio.regularidade.hora = horaEvento;
        diasWeek.map(item => {
            if(item !== 0){
                ObjetoEnvio.regularidade.dias.push(item)
            } else {
                ObjetoEnvio.regularidade.dias.push(7)
            }
        })
        ObjetoEnvio.notificacoes = notificacao;
        
        if(mensagens.imediato.active === true){
            var diaInicio = new Date();
            var diaImediato = diaInicio.getFullYear() + '-' + ((diaInicio.getMonth() > 8) ? (diaInicio.getMonth() + 1) : ('0' + (diaInicio.getMonth() + 1))) + '-' + ((diaInicio.getDate() > 9) ? diaInicio.getDate() : ('0' + diaInicio.getDate()));
            var horaImediato = `${diaInicio.getHours() < 10 ? `0${diaInicio.getHours()}` : diaInicio.getHours()}:${(diaInicio.getMinutes() < 10) ? `0${diaInicio.getMinutes()}` : diaInicio.getMinutes()}`;
            if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Sim"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: objectImagens[paramsPersonalizado.icone],
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Não"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: null,
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else {
                let imediato = {
                    mensagem: mensagens.imediato.message,
                    url_icone: objectImagens[tipologia],
                    data: diaImediato,
                    hora: horaImediato,
                    rotina: null,
                    zapping: 0,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                }
                ObjetoEnvio.notificacoes.push(imediato)
            }
        }
    }

    if(envioNotif === 'Mensal'){
        let meses = GetMesesDif(diaInicio, dataFim);
        let diasEvento = GetDiaMes(diaMes, GetMeses(meses), mensagens, dataFim);
        let notificacao = GeraNotificacoes(mensagens, diasEvento, tipologia, horaEvento, momentoUnico, 'Mensal', envioNotif, paramsPersonalizado.icone, paramsPersonalizado.usaIcone, canal, tipoPersonalizado);
        ObjetoEnvio.regularidade.tipo = 4;
        ObjetoEnvio.regularidade.data = null;
        ObjetoEnvio.regularidade.hora = horaEvento;
        ObjetoEnvio.regularidade.dias = [];
        ObjetoEnvio.notificacoes = notificacao;
        
        if(mensagens.imediato.active === true){
            var diaInicio = new Date();
            var diaImediato = diaInicio.getFullYear() + '-' + ((diaInicio.getMonth() > 8) ? (diaInicio.getMonth() + 1) : ('0' + (diaInicio.getMonth() + 1))) + '-' + ((diaInicio.getDate() > 9) ? diaInicio.getDate() : ('0' + diaInicio.getDate()));
            var horaImediato = `${diaInicio.getHours() < 10 ? `0${diaInicio.getHours()}` : diaInicio.getHours()}:${(diaInicio.getMinutes() < 10) ? `0${diaInicio.getMinutes()}` : diaInicio.getMinutes()}`;
            if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Sim"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: objectImagens[paramsPersonalizado.icone],
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: mensagens.imediato.tituloBlade,
                        descricao: mensagens.imediato.descricao,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Não"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: null,
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else {
                let imediato = {
                    mensagem: mensagens.imediato.message,
                    url_icone: objectImagens[tipologia],
                    data: diaImediato,
                    hora: horaImediato,
                    rotina: null,
                    zapping: 0,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                }
                ObjetoEnvio.notificacoes.push(imediato)
            }
        }
    }

    //console.log(ObjetoEnvio)

    fetch(`https://geo-navsafety.ua.pt:443/overtv/eventos/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...ObjetoEnvio})
    }).then(response => response.json())
}

export const updateNotification = (id, tipologia, intervaloTempo, nomeItem, momentoUnico, mensagens, idTipologia, horaEvento, envioNotif, idRegular, dias, diaUnico, diaMes, subcategoria, paramsPersonalizado, casasEscolhidas, usersEscolhidos, dataFim, canal, tipoPersonalizado) => {
    
    //console.log({id: id, tipologia: tipologia, intervalo: intervaloTempo, nome: nomeItem, momento: momentoUnico, mensagens: mensagens, idTipo: idTipologia, hora: horaEvento, envio: envioNotif, idReg: idRegular, dias: dias, diaUnico: diaUnico, diaMes: diaMes, sub: subcategoria, params: paramsPersonalizado, casas: casasEscolhidas, users: usersEscolhidos, dataFim: dataFim, canal: canal})
    const objectImagens = {
        "Agenda": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeAgenda.png?alt=media&token=38fb87cc-f8fa-4015-a775-b4da0e6b9a77",
        "Saúde": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeSaude.png?alt=media&token=fd1ae805-eea2-4dce-b4f8-4d904c4e65b4",
        "Programas": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeProgramas.png?alt=media&token=3e89e385-5379-403a-93b5-d05f9efda5a6",
        "Informação": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeInformacao.png?alt=media&token=e706c143-43d2-4625-af36-22a1a658ee30",
        "Serviços": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeServicos.png?alt=media&token=2d858888-6925-482c-b2e5-2c89722e5626"
    }


    //DATAS

    if(envioNotif === 'Pontual' && momentoUnico === 'Dia e Hora'){
        var diaInicio = new Date(diaUnico);
        var weekDay = diaInicio.getDay();
    }

    if(envioNotif === 'Pontual' && momentoUnico === 'Imediato'){
        var diaInicio = new Date();
        var diaImediato = diaInicio.getFullYear() + '-' + ((diaInicio.getMonth() > 8) ? (diaInicio.getMonth() + 1) : ('0' + (diaInicio.getMonth() + 1))) + '-' + ((diaInicio.getDate() > 9) ? diaInicio.getDate() : ('0' + diaInicio.getDate()));
        var horaImediato = `${diaInicio.getHours() < 10 ? `0${diaInicio.getHours()}` : diaInicio.getHours()}:${(diaInicio.getMinutes() < 10) ? `0${diaInicio.getMinutes()}` : diaInicio.getMinutes()}`;
    }

    if(envioNotif === 'Diária' || envioNotif === 'Mensal'){
        var diaInicio = new Date();
    }

    if(envioNotif === 'Semanal'){
        var diaInicio = new Date();
        var diasWeek = [];
        Object.keys(dias).map(item => {
            if(dias[item] === true){
                let str = item.slice(item.length - 1);
                diasWeek.push(str)
            }
        })
    }
    

    //Tipologias



    var ObjetoEnvio = {
        nome_evento: nomeItem,
        tipologia: idTipologia,
        regularidade: {
            tipo: idRegular,
            data: '', // diaUnico
            hora: '', // horaEvento
            dias: []
        },
        destinatarios: [],
        notificacoes:[]
    }

    //console.log(usersEscolhidos)

    usersEscolhidos.map(item => {
        ObjetoEnvio.destinatarios.push(item.idUser)
    })

    if(envioNotif === 'Pontual' && momentoUnico === 'Dia e Hora'){
        let diasEvento = GetUnique(diaInicio, mensagens);
        let notificacao = GeraNotificacoes(mensagens, diasEvento, tipologia, horaEvento, momentoUnico, 'Unico', diaInicio, paramsPersonalizado.icone, paramsPersonalizado.usaIcone, canal);
        
        let dataNew = new Date(diaInicio);
        let diaFormated = dataNew.getFullYear() + '-' + ((dataNew.getMonth() > 8) ? (dataNew.getMonth() + 1) : ('0' + (dataNew.getMonth() + 1))) + '-' + ((dataNew.getDate() > 9) ? dataNew.getDate() : ('0' + dataNew.getDate()));
        
        ObjetoEnvio.regularidade.tipo = 1;
        ObjetoEnvio.regularidade.data = diaFormated;
        ObjetoEnvio.regularidade.hora = horaEvento;
        if(weekDay !== 0){
            ObjetoEnvio.regularidade.dias = [weekDay];
        } else {
            ObjetoEnvio.regularidade.dias = [7];
        }
        ObjetoEnvio.notificacoes = notificacao;

        if(mensagens.imediato.active === true){
            var diaInicio = new Date();
            var diaImediato = diaInicio.getFullYear() + '-' + ((diaInicio.getMonth() > 8) ? (diaInicio.getMonth() + 1) : ('0' + (diaInicio.getMonth() + 1))) + '-' + ((diaInicio.getDate() > 9) ? diaInicio.getDate() : ('0' + diaInicio.getDate()));
            var horaImediato = `${diaInicio.getHours() < 10 ? `0${diaInicio.getHours()}` : diaInicio.getHours()}:${(diaInicio.getMinutes() < 10) ? `0${diaInicio.getMinutes()}` : diaInicio.getMinutes()}`;

            if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Sim"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: objectImagens[paramsPersonalizado.icone],
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Não"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: null,
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else {
                let imediato = {
                    mensagem: mensagens.imediato.message,
                    url_icone: objectImagens[tipologia],
                    data: diaImediato,
                    hora: horaImediato,
                    rotina: null,
                    zapping: 0,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                }
                ObjetoEnvio.notificacoes.push(imediato)
            }
        }
    }

    if(envioNotif === 'Pontual' && momentoUnico === 'Imediato'){
        if(tipologia === 'Serviços'){
            let notificacao = {
                mensagem: mensagens.imediato.message,
                url_icone: objectImagens[tipologia],
                data: diaImediato,
                hora: horaImediato,
                rotina: null,
                zapping: 0,
                titulo: mensagens.imediato.tituloBlade,
                descricao: mensagens.imediato.descricao,
                botao_titulo: 'Ir para App',
                botao_navigate: `page:${canal.id}`,
            }
            ObjetoEnvio.regularidade.tipo = 1;
            ObjetoEnvio.regularidade.data = diaImediato;
            ObjetoEnvio.regularidade.hora = horaImediato;
            ObjetoEnvio.regularidade.dias = [];
            ObjetoEnvio.notificacoes.push(notificacao);
        } else if(tipologia === 'Programas'){
            let notificacao = {
                mensagem: mensagens.imediato.message,
                url_icone: objectImagens[tipologia],
                data: diaImediato,
                hora: horaImediato,
                rotina: null,
                zapping: 0,
                titulo: mensagens.imediato.tituloBlade,
                descricao: mensagens.imediato.descricao,
                botao_titulo: `Mudar para ${canal.nome}`,
                botao_navigate: `tune:${canal.id}`,
            }
            ObjetoEnvio.regularidade.tipo = 1;
            ObjetoEnvio.regularidade.data = diaImediato;
            ObjetoEnvio.regularidade.hora = horaImediato;
            ObjetoEnvio.regularidade.dias = [];
            ObjetoEnvio.notificacoes.push(notificacao);
        } else {
            let notificacao = {
                mensagem: mensagens.imediato.message,
                url_icone: objectImagens[tipologia],
                data: diaImediato,
                hora: horaImediato,
                rotina: null,
                zapping: 0,
                titulo: null,
                descricao: null,
                botao_titulo: null,
                botao_navigate: null,
            }
            ObjetoEnvio.regularidade.tipo = 1;
            ObjetoEnvio.regularidade.data = diaImediato;
            ObjetoEnvio.regularidade.hora = horaImediato;
            ObjetoEnvio.regularidade.dias = [];
            ObjetoEnvio.notificacoes.push(notificacao);
        }
    }

    if(envioNotif === 'Diária'){
        let meses = GetMesesDif(diaInicio, dataFim);
        let diasEvento = GetEveryday(GetMeses(meses), dataFim);
        let notificacao = GeraNotificacoes(mensagens, diasEvento, tipologia, horaEvento, momentoUnico, 'Diária', envioNotif, paramsPersonalizado.icone, paramsPersonalizado.usaIcone, canal);
        ObjetoEnvio.regularidade.tipo = 2;
        ObjetoEnvio.regularidade.data = null;
        ObjetoEnvio.regularidade.hora = horaEvento;
        ObjetoEnvio.regularidade.dias = [1, 2, 3, 4, 5, 6, 7];
        ObjetoEnvio.notificacoes = notificacao;
       
        if(mensagens.imediato.active === true){
            var diaInicio = new Date();
            var diaImediato = diaInicio.getFullYear() + '-' + ((diaInicio.getMonth() > 8) ? (diaInicio.getMonth() + 1) : ('0' + (diaInicio.getMonth() + 1))) + '-' + ((diaInicio.getDate() > 9) ? diaInicio.getDate() : ('0' + diaInicio.getDate()));
            var horaImediato = `${diaInicio.getHours() < 10 ? `0${diaInicio.getHours()}` : diaInicio.getHours()}:${(diaInicio.getMinutes() < 10) ? `0${diaInicio.getMinutes()}` : diaInicio.getMinutes()}`;

            if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Sim"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: objectImagens[paramsPersonalizado.icone],
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: mensagens.imediato.tituloBlade,
                        descricao: mensagens.imediato.descricao,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Não"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: null,
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else {
                let imediato = {
                    mensagem: mensagens.imediato.message,
                    url_icone: objectImagens[tipologia],
                    data: diaImediato,
                    hora: horaImediato,
                    rotina: null,
                    zapping: 0,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                }
                ObjetoEnvio.notificacoes.push(imediato)
            }
        }
    }

    if(envioNotif === 'Semanal'){
        let meses = GetMesesDif(diaInicio, dataFim);
        let diasEvento = GetDiaSemana(diasWeek, GetMeses(meses), mensagens, dataFim);
        let notificacao = GeraNotificacoes(mensagens, diasEvento, tipologia, horaEvento, momentoUnico, 'Semanal', envioNotif, paramsPersonalizado.icone, paramsPersonalizado.usaIcone, canal);
        ObjetoEnvio.regularidade.tipo = 3;
        ObjetoEnvio.regularidade.data = null;
        ObjetoEnvio.regularidade.data = diaUnico;
        ObjetoEnvio.regularidade.hora = horaEvento;
        diasWeek.map(item => {
            if(item !== 0){
                ObjetoEnvio.regularidade.dias.push(item)
            } else {
                ObjetoEnvio.regularidade.dias.push(7)
            }
        })
        ObjetoEnvio.notificacoes = notificacao;
        
        if(mensagens.imediato.active === true){
            var diaInicio = new Date();
            var diaImediato = diaInicio.getFullYear() + '-' + ((diaInicio.getMonth() > 8) ? (diaInicio.getMonth() + 1) : ('0' + (diaInicio.getMonth() + 1))) + '-' + ((diaInicio.getDate() > 9) ? diaInicio.getDate() : ('0' + diaInicio.getDate()));
            var horaImediato = `${diaInicio.getHours() < 10 ? `0${diaInicio.getHours()}` : diaInicio.getHours()}:${(diaInicio.getMinutes() < 10) ? `0${diaInicio.getMinutes()}` : diaInicio.getMinutes()}`;
            if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Sim"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: objectImagens[paramsPersonalizado.icone],
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: mensagens.imediato.tituloBlade,
                        descricao: mensagens.imediato.descricao,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Não"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: null,
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else {
                let imediato = {
                    mensagem: mensagens.imediato.message,
                    url_icone: objectImagens[tipologia],
                    data: diaImediato,
                    hora: horaImediato,
                    rotina: null,
                    zapping: 0,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                }
                ObjetoEnvio.notificacoes.push(imediato)
            }
        }
    }

    if(envioNotif === 'Mensal'){
        let meses = GetMesesDif(diaInicio, dataFim);
        let diasEvento = GetDiaMes(diaMes, GetMeses(meses), mensagens, dataFim);
        let notificacao = GeraNotificacoes(mensagens, diasEvento, tipologia, horaEvento, momentoUnico, 'Mensal', envioNotif, paramsPersonalizado.icone, paramsPersonalizado.usaIcone, canal);
        ObjetoEnvio.regularidade.tipo = 4;
        ObjetoEnvio.regularidade.data = null;
        ObjetoEnvio.regularidade.hora = horaEvento;
        ObjetoEnvio.regularidade.dias = [];
        ObjetoEnvio.notificacoes = notificacao;
        
        if(mensagens.imediato.active === true){
            var diaInicio = new Date();
            var diaImediato = diaInicio.getFullYear() + '-' + ((diaInicio.getMonth() > 8) ? (diaInicio.getMonth() + 1) : ('0' + (diaInicio.getMonth() + 1))) + '-' + ((diaInicio.getDate() > 9) ? diaInicio.getDate() : ('0' + diaInicio.getDate()));
            var horaImediato = `${diaInicio.getHours() < 10 ? `0${diaInicio.getHours()}` : diaInicio.getHours()}:${(diaInicio.getMinutes() < 10) ? `0${diaInicio.getMinutes()}` : diaInicio.getMinutes()}`;
            if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Sim"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: objectImagens[paramsPersonalizado.icone],
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: mensagens.imediato.tituloBlade,
                        descricao: mensagens.imediato.descricao,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: objectImagens[paramsPersonalizado.icone],
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else if(tipologia === 'Personalizada' && paramsPersonalizado.usaIcone === "Não"){
                if(mensagens.imediato.persVal === false){
                    let imediato = {
                        mensagem: mensagens.imediato.message,
                        url_icone: null,
                        data: diaImediato,
                        hora: horaImediato,
                        rotina: null,
                        zapping: 0,
                        titulo: null,
                        descricao: null,
                        botao_titulo: null,
                        botao_navigate: null,
                    }
                    ObjetoEnvio.notificacoes.push(imediato)
                } else {
                    if(tipoPersonalizado === 'Jogo') {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: 'Abrir o jogo',
                            botao_navigate: 'callback:http://prosenior.ddns.net/proseniortv',
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    } else {
                        let imediato = {
                            mensagem: mensagens.imediato.message,
                            url_icone: null,
                            data: diaImediato,
                            hora: horaImediato,
                            rotina: null,
                            zapping: 0,
                            titulo: mensagens.imediato.tituloBlade,
                            descricao: mensagens.imediato.descricao,
                            botao_titulo: null,
                            botao_navigate: null,
                        }
                        ObjetoEnvio.notificacoes.push(imediato)
                    }
                }
            } else {
                let imediato = {
                    mensagem: mensagens.imediato.message,
                    url_icone: objectImagens[tipologia],
                    data: diaImediato,
                    hora: horaImediato,
                    rotina: null,
                    zapping: 0,
                    titulo: null,
                    descricao: null,
                    botao_titulo: null,
                    botao_navigate: null,
                }
                ObjetoEnvio.notificacoes.push(imediato)
            }
        }
    }

    //console.log(ObjetoEnvio)

    fetch(`https://geo-navsafety.ua.pt:443/overtv/eventos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, ...ObjetoEnvio})
    }).then(response => response.json())
}


//Testes da API NEWS

export const fetchNews = () =>
  fetch(`https://newsapi.org/v2/top-headlines?country=pt&apiKey=8ec5bab39959481daee66b15db5b0283`)
    .then(response => {
        let ola = response.json();
        console.log(ola)
    })

export const fetchNewsTitle = () =>
    fetch(`https://newsapi.org/v2/everything?q=Marcelo-enviou-lei-da-Europol-e-Interpol-para-o-Tribunal-Constitucional&from=2022-11-16&to=2022-11-17&language=pt&apiKey=8ec5bab39959481daee66b15db5b0283`)
    .then(response => {
        let ola = response.json();
        console.log(ola)
    })
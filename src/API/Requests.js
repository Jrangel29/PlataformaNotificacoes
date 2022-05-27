//USERS

export const createUser = (nome, idade, ref_id_casa, informacoes, blacklist) => {
    fetch(`http://geo-navsafety.ua.pt:443/overtv/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome, idade, ref_id_casa, informacoes, blacklist})
    }).then(response => response.json())
}

export const fetchUsers = () =>
  fetch(`http://geo-navsafety.ua.pt:443/overtv/users`)
    .then(response => response.json())

export const fetchTipologiaUsers = (id) =>
  fetch(`http://geo-navsafety.ua.pt:443/overtv/users/?tipologia=${id}`)
    .then(response => response.json())

export const fetchSingleUser = (id) =>
  fetch(`http://geo-navsafety.ua.pt:443/overtv/users/${id}`)
    .then(response => response.json())

//CASAS

export const createHouse = (nome, idBox, concelho) => {
    fetch(`http://geo-navsafety.ua.pt:443/overtv/casas/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nome, idBox, concelho})
    }).then(response => response.json())
}

export const fetchHouses = () =>
  fetch(`http://geo-navsafety.ua.pt:443/overtv/casas`)
    .then(response => response.json())

export const fetchHousePeople = (id) =>
    fetch(`http://geo-navsafety.ua.pt:443/overtv/casas/${id}`)
      .then(response => response.json())



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

//Tipologias

export const fetchTipologiaList = () =>
  fetch(`http://geo-navsafety.ua.pt:443/overtv/tipologias`)
    .then(response => response.json())

//Distritos

export const fetchDistritosList = () =>
  fetch(`http://geo-navsafety.ua.pt:443/overtv/localidade/distritos`)
    .then(response => response.json())

//Concelhos

export const fetchConcelhos = (id) =>
  fetch(`http://geo-navsafety.ua.pt:443/overtv/localidade/concelhos/${id}`)
    .then(response => response.json())

//NOTIFICATIONS

const objectImagens = {
    "Agenda": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeAgenda.png?alt=media&token=db7c8498-6b3d-47f8-a9ef-175bc5d02dbd",
    "Boa Noite": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeBoaNoite.png?alt=media&token=c2b86cba-fedd-4c16-8363-61c4fd106ad2",
    "Bom Dia": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeBomDia.png?alt=media&token=d6551eb3-d7f3-4649-b7b9-668828fbfce8",
    "Saúde": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeSaude.png?alt=media&token=6d2ed984-0cf4-4650-ab7a-ad9843a736b3",
    "Conteúdo": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeConteudo.png?alt=media&token=07eb79dc-93b5-439b-87ca-083f71dfe971",
    "Informação": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeInfo.png?alt=media&token=15650b3a-70f0-4728-b846-73413afac8ba",
    "Serviço": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeServico.png?alt=media&token=970100b9-4a98-48f5-8038-6a9128026e79"
}

export const createNotification = (tipologia, intervaloTempo, nomeItem, momentoUnico, mensagens, idTipologia, horaEvento, envioNotif, idRegular, dias, diaUnico, diaMes, subcategoria, paramsPersonalizado, casasEscolhidas, usersEscolhidos) => {

    //DATAS

    var diaInicio = new Date();
    var diaString = diaInicio.getFullYear() + '-' + ((diaInicio.getMonth() > 8) ? (diaInicio.getMonth() + 1) : ('0' + (diaInicio.getMonth() + 1))) + '-' + ((diaInicio.getDate() > 9) ? diaInicio.getDate() : ('0' + diaInicio.getDate()));
    var meio = diaInicio.setMonth(diaInicio.getMonth() + 3);
    var diaFim = new Date(meio);
    var diaFimString = diaFim.getFullYear() + '-' + ((diaFim.getMonth() > 8) ? (diaFim.getMonth() + 1) : ('0' + (diaFim.getMonth() + 1))) + '-' + ((diaFim.getDate() > 9) ? diaFim.getDate() : ('0' + diaFim.getDate()));

    var diferenca = diaFim.getTime() - diaInicio.getTime();
    let totalDias = Math.ceil(diferenca / (1000 * 3600 * 24));
    
    console.log(diaString);
    console.log(diaFimString);

    //Tipologias



    var ObjetoEnvio = {
        nome_evento: nomeItem,
        tipologia: idTipologia,
        regularidade: {
            tipo: idRegular,
            data: diaUnico,
            hora: horaEvento,
            dias: []
        },
        destinatarios: [],
        notificacoes:[]
    }

    if(tipologia === 'Agenda' || tipologia === 'Programas' || tipologia === 'Saúde'){
        usersEscolhidos.map(item => {
            ObjetoEnvio.destinatarios.push(item.idUser)
        })
    }
    
    if(tipologia === 'Informação' || tipologia === 'Serviços' || tipologia === 'Saúde'){
        casasEscolhidas.map(item => {
            ObjetoEnvio.destinatarios.push(item.idCasa)
        })
    }

    console.log(ObjetoEnvio)
    /*fetch(`https://geo-navsafety.ua.pt:443/overtv/notifications`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...objectEnvio})
    }).then(response => response.json())*/
}
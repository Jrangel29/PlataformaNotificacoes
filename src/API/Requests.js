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

export const createNotification = (tipologia, subcategoria, categoriaSaude, envioNotif, dias, tituloNotif, subtituloNotif, descricaoNotif, paramsPersonalizado) => {
    
    let objectEnvio = {
        tipologiaEnvio: tipologia,
        tituloEnvio: tituloNotif,
        frequenciaEnvio: envioNotif.tipoNotif
    };

    if(tipologia == "Saúde" && subcategoria == "Genérica"){
        objectEnvio = {
            ...objectEnvio,
            categoriaSaudeEnvio: categoriaSaude
        }
    }

    if(tipologia != "Personalizado" ){
        if(tipologia != "Informação"){
            objectEnvio = {
                ...objectEnvio,
                subtituloNotifEnvio: subtituloNotif,
                descricaoNotifEnvio: descricaoNotif,
                iconeEnvio: objectImagens[tipologia]
            }
        } else {
            objectEnvio = {
                ...objectEnvio,
                subtituloNotifEnvio: subtituloNotif,
                descricaoNotifEnvio: descricaoNotif,
                iconeEnvio: objectImagens[subcategoria]
            }
        }
    } else{
        if(paramsPersonalizado.popupSecundario == "Sim"){
            objectEnvio = {
                ...objectEnvio,
                subtituloNotifEnvio: subtituloNotif,
                descricaoNotifEnvio: descricaoNotif
            }
        }
        if(paramsPersonalizado.usaIcone == "Sim"){
            objectEnvio = {
                ...objectEnvio,
                iconeEnvio: objectImagens[paramsPersonalizado.icone]
            }
        }
    }

    if(envioNotif.tipoNotif == "Rotina" || envioNotif.periodicidade == "Semanal"){
        objectEnvio = {
            ...objectEnvio,
            diasEnvio: dias
        }
    }
    
    fetch(`https://geo-navsafety.ua.pt:443/overtv/notifications`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...objectEnvio})
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
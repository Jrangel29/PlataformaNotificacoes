const objectImagens = {
    "Agenda": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeAgenda.png?alt=media&token=db7c8498-6b3d-47f8-a9ef-175bc5d02dbd",
    "Saúde": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeSaude.png?alt=media&token=6d2ed984-0cf4-4650-ab7a-ad9843a736b3",
    "Programas": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeConteudo.png?alt=media&token=07eb79dc-93b5-439b-87ca-083f71dfe971",
    "Informação": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeInfo.png?alt=media&token=15650b3a-70f0-4728-b846-73413afac8ba",
    "Serviços": "https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeServico.png?alt=media&token=970100b9-4a98-48f5-8038-6a9128026e79"
}

export const GeraNotificacoes = (mensagens, dias, tipologia, horaEvento, tipo, regular, dia, iconePersonalizado, usaIcone) => {
    
    let notificacoesFinal = [];
    
    if(mensagens.semanaAntes.active === true){
        if(regular === 'Unico') {
            dias.diasEvento.map(item => {
                if(item.name === 'semanaAntes'){
                    if(tipologia === 'Agenda'){
                        notificacoesFinal.push({
                            mensagem: mensagens.semanaAntes.message,
                            titulo: null,
                            descricao: null,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 1
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.semanaAntes.message,
                            titulo: null,
                            descricao: null,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            })
        } else if (regular === 'Mensal'){
            dias.diasMensagens.semanaAntes.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: null,
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                }
            })
        }
    }

    if(mensagens.dias3.active === true){
        if(regular === 'Unico') {
            dias.diasEvento.map(item => {
                if(item.name === 'dias3'){
                    if(tipologia === 'Agenda'){
                        notificacoesFinal.push({
                            mensagem: mensagens.dias3.message,
                            titulo: null,
                            descricao: null,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 1
                        })
                    } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                        notificacoesFinal.push({
                            mensagem: mensagens.semanaAntes.message,
                            titulo: null,
                            descricao: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                        notificacoesFinal.push({
                            mensagem: mensagens.semanaAntes.message,
                            titulo: null,
                            descricao: null,
                            url_icone: null,
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    }else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                        notificacoesFinal.push({
                            mensagem: mensagens.semanaAntes.message,
                            titulo: null,
                            descricao: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                        notificacoesFinal.push({
                            mensagem: mensagens.semanaAntes.message,
                            titulo: null,
                            descricao: null,
                            url_icone: null,
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.dias3.message,
                            titulo: null,
                            descricao: null,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    }
                }
            })
        } else if(regular === 'Mensal' || regular === 'Semanal') {
            dias.diasMensagens.dias3.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.dias3.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: null,
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.dias3.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                }
            })
        }
    }

    if(mensagens.diaAnterior.active === true){
        if(regular === 'Unico') {
            dias.diasEvento.map(item => {
                if(item.name === 'diaAnterior'){
                    if(tipologia === 'Agenda'){
                        notificacoesFinal.push({
                            mensagem: mensagens.diaAnterior.message,
                            titulo: null,
                            descricao: null,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaEvento,
                            rotina: 2,
                            zapping: 1
                        })
                    } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                        notificacoesFinal.push({
                            mensagem: mensagens.semanaAntes.message,
                            titulo: null,
                            descricao: null,
                            url_icone: objectImagens[iconePersonalizado],
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                        notificacoesFinal.push({
                            mensagem: mensagens.semanaAntes.message,
                            titulo: null,
                            descricao: null,
                            url_icone: null,
                            data: item,
                            hora: horaEvento,
                            rotina: null,
                            zapping: 0
                        })
                    } else {
                        notificacoesFinal.push({
                            mensagem: mensagens.diaAnterior.message,
                            titulo: null,
                            descricao: null,
                            url_icone: objectImagens[tipologia],
                            data: item,
                            hora: horaEvento,
                            rotina: 2,
                            zapping: 0
                        })
                    }
                }
            })
        } else if(regular === 'Diária'){
            dias.diasEvento.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.diaAnterior.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: 2,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: null,
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.diaAnterior.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: 2,
                        zapping: 0
                    })
                }
            })
        } else if(regular === 'Mensal' || regular === 'Semanal') {
            dias.diasMensagens.diaAnterior.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.diaAnterior.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: null,
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.diaAnterior.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                }
            })
        }
    }

    if(mensagens.diaProprio.active === true){
        if(regular === 'Unico') {
            let diaFormated = dia.getFullYear() + '-' + ((dia.getMonth() > 8) ? (dia.getMonth() + 1) : ('0' + (dia.getMonth() + 1))) + '-' + ((dia.getDate() > 9) ? dia.getDate() : ('0' + dia.getDate()));
            if(tipologia === 'Agenda'){
                notificacoesFinal.push({
                    mensagem: mensagens.diaProprio.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaEvento,
                    rotina: 1,
                    zapping: 1
                })
            } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                notificacoesFinal.push({
                    mensagem: mensagens.semanaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[iconePersonalizado],
                    data: diaFormated,
                    hora: horaEvento,
                    rotina: null,
                    zapping: 0
                })
            } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                notificacoesFinal.push({
                    mensagem: mensagens.semanaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: null,
                    data: diaFormated,
                    hora: horaEvento,
                    rotina: null,
                    zapping: 0
                })
            } else {
                notificacoesFinal.push({
                    mensagem: mensagens.diaProprio.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaEvento,
                    rotina: 1,
                    zapping: 0
                })
            }
        } else if(regular === 'Diária' || regular === 'Mensal' || regular === 'Semanal') {
            dias.diasEvento.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.diaProprio.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: 1,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: null,
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.diaProprio.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: 1,
                        zapping: 0
                    })
                }
            })
        }
    }

    if(mensagens.horaAntes.active === true){
        let novaData = new Date();
        let hora = horaEvento.substring(2, 0)
        let minutos = horaEvento.substring(3, 5)
        novaData.setHours(hora, minutos);
        novaData.setHours(novaData.getHours() - 1);

        let horaFinal = `${novaData.getHours()}:${novaData.getMinutes() < 10 ? '0' + novaData.getMinutes() : novaData.getMinutes()}`
        

        if(regular === 'Unico') {
            let diaFormated = dia.getFullYear() + '-' + ((dia.getMonth() > 8) ? (dia.getMonth() + 1) : ('0' + (dia.getMonth() + 1))) + '-' + ((dia.getDate() > 9) ? dia.getDate() : ('0' + dia.getDate()));
            if(tipologia === 'Agenda'){
                notificacoesFinal.push({
                    mensagem: mensagens.horaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 1
                })
            } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                notificacoesFinal.push({
                    mensagem: mensagens.semanaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[iconePersonalizado],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                notificacoesFinal.push({
                    mensagem: mensagens.semanaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: null,
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            } else {
                notificacoesFinal.push({
                    mensagem: mensagens.horaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            }
        } else if(regular === 'Diária' || regular === 'Mensal' || regular === 'Semanal') {
            dias.diasEvento.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.horaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: null,
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.horaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                }
            })
        }
    }

    if(mensagens.meiaHora.active === true){
        let novaData = new Date();
        let hora = horaEvento.substring(2, 0)
        let minutos = horaEvento.substring(3, 5)
        novaData.setHours(hora, minutos);
        let dataFlex = new Date(novaData - 30 * 60000);

        let horaFinal = `${dataFlex.getHours()}:${(dataFlex.getMinutes() < 10) ? `0${dataFlex.getMinutes()}` : dataFlex.getMinutes()}`;

        if(regular === 'Unico') {
            let diaFormated = dia.getFullYear() + '-' + ((dia.getMonth() > 8) ? (dia.getMonth() + 1) : ('0' + (dia.getMonth() + 1))) + '-' + ((dia.getDate() > 9) ? dia.getDate() : ('0' + dia.getDate()));
            if(tipologia === 'Agenda'){
                notificacoesFinal.push({
                    mensagem: mensagens.meiaHora.message,
                    titulo: mensagens.meiaHora.tituloBlade,
                    descricao: mensagens.meiaHora.descricao,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 1
                })
            } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                notificacoesFinal.push({
                    mensagem: mensagens.semanaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[iconePersonalizado],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                notificacoesFinal.push({
                    mensagem: mensagens.semanaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: null,
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            } else {
                notificacoesFinal.push({
                    mensagem: mensagens.meiaHora.message,
                    titulo: mensagens.meiaHora.tituloBlade,
                    descricao: mensagens.meiaHora.descricao,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            }
        } else if(regular === 'Diária' || regular === 'Mensal' || regular === 'Semanal') {
            dias.diasEvento.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.meiaHora.message,
                        titulo: mensagens.meiaHora.tituloBlade,
                        descricao: mensagens.meiaHora.descricao,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: mensagens.meiaHora.tituloBlade,
                        descricao: mensagens.meiaHora.descricao,
                        url_icone: objectImagens[iconePersonalizado],
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: mensagens.meiaHora.tituloBlade,
                        descricao: mensagens.meiaHora.descricao,
                        url_icone: null,
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.meiaHora.message,
                        titulo: mensagens.meiaHora.tituloBlade,
                        descricao: mensagens.meiaHora.descricao,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                }
            })
        }
    }

    if(mensagens.quartoHora.active === true){
        let novaData = new Date();
        let hora = horaEvento.substring(2, 0)
        let minutos = horaEvento.substring(3, 5)
        novaData.setHours(hora, minutos);
        let dataFlex = new Date(novaData - 15 * 60000);

        let horaFinal = `${dataFlex.getHours()}:${(dataFlex.getMinutes() < 10) ? `0${dataFlex.getMinutes()}` : dataFlex.getMinutes()}`;
         
        
        if(regular === 'Unico') {
            let diaFormated = dia.getFullYear() + '-' + ((dia.getMonth() > 8) ? (dia.getMonth() + 1) : ('0' + (dia.getMonth() + 1))) + '-' + ((dia.getDate() > 9) ? dia.getDate() : ('0' + dia.getDate()));
            if(tipologia === 'Agenda'){
                notificacoesFinal.push({
                    mensagem: mensagens.quartoHora.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 1
                })
            } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                notificacoesFinal.push({
                    mensagem: mensagens.semanaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[iconePersonalizado],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                notificacoesFinal.push({
                    mensagem: mensagens.semanaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: null,
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            }  else {
                notificacoesFinal.push({
                    mensagem: mensagens.quartoHora.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            }
        } else if(regular === 'Diária' || regular === 'Mensal' || regular === 'Semanal') {
            dias.diasEvento.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.quartoHora.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: null,
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.quartoHora.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                }
            })
        }
    }

    if(mensagens.minutos5.active === true){
        let novaData = new Date();
        let hora = horaEvento.substring(2, 0)
        let minutos = horaEvento.substring(3, 5)
        novaData.setHours(hora, minutos);
        let dataFlex = new Date(novaData - 15 * 60000);

        let horaFinal = `${dataFlex.getHours()}:${(dataFlex.getMinutes() < 10) ? `0${dataFlex.getMinutes()}` : dataFlex.getMinutes()}`;

        if(regular === 'Unico') {
            let diaFormated = dia.getFullYear() + '-' + ((dia.getMonth() > 8) ? (dia.getMonth() + 1) : ('0' + (dia.getMonth() + 1))) + '-' + ((dia.getDate() > 9) ? dia.getDate() : ('0' + dia.getDate()));
            if(tipologia === 'Agenda'){
                notificacoesFinal.push({
                    mensagem: mensagens.minutos5.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    zapping: 1
                })
            } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                notificacoesFinal.push({
                    mensagem: mensagens.semanaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[iconePersonalizado],
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                notificacoesFinal.push({
                    mensagem: mensagens.semanaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: null,
                    data: diaFormated,
                    hora: horaFinal,
                    rotina: null,
                    zapping: 0
                })
            } else {
                notificacoesFinal.push({
                    mensagem: mensagens.minutos5.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaFinal,
                    zapping: 0
                })
            }
        } else if(regular === 'Diária' || regular === 'Mensal' || regular === 'Semanal') {
            dias.diasEvento.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.minutos5.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: null,
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                } else {
                    notificacoesFinal.push({
                        mensagem: mensagens.minutos5.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaFinal,
                        rotina: null,
                        zapping: 0
                    })
                }
            })
        }
    }

    if(mensagens.momentoAcontecimento.active === true){
        if(regular === 'Unico') {
            let diaFormated = dia.getFullYear() + '-' + ((dia.getMonth() > 8) ? (dia.getMonth() + 1) : ('0' + (dia.getMonth() + 1))) + '-' + ((dia.getDate() > 9) ? dia.getDate() : ('0' + dia.getDate()));
            if(tipologia === 'Agenda'){
                notificacoesFinal.push({
                    mensagem: mensagens.momentoAcontecimento.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaEvento,
                    zapping: 1
                })
            } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                notificacoesFinal.push({
                    mensagem: mensagens.semanaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[iconePersonalizado],
                    data: diaFormated,
                    hora: horaEvento,
                    rotina: null,
                    zapping: 0
                })
            } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                notificacoesFinal.push({
                    mensagem: mensagens.semanaAntes.message,
                    titulo: null,
                    descricao: null,
                    url_icone: null,
                    data: diaFormated,
                    hora: horaEvento,
                    rotina: null,
                    zapping: 0
                })
            } else {
                notificacoesFinal.push({
                    mensagem: mensagens.momentoAcontecimento.message,
                    titulo: null,
                    descricao: null,
                    url_icone: objectImagens[tipologia],
                    data: diaFormated,
                    hora: horaEvento,
                    zapping: 0
                })
            }
        } else if(regular === 'Diária' || regular === 'Mensal' || regular === 'Semanal') {
            dias.diasEvento.map(item => {
                if(tipologia === 'Agenda'){
                    notificacoesFinal.push({
                        mensagem: mensagens.momentoAcontecimento.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 1
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Sim') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[iconePersonalizado],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                } else if(tipologia === 'Personalizado' && usaIcone === 'Não') {
                    notificacoesFinal.push({
                        mensagem: mensagens.semanaAntes.message,
                        titulo: null,
                        descricao: null,
                        url_icone: null,
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                }  else {
                    notificacoesFinal.push({
                        mensagem: mensagens.momentoAcontecimento.message,
                        titulo: null,
                        descricao: null,
                        url_icone: objectImagens[tipologia],
                        data: item,
                        hora: horaEvento,
                        rotina: null,
                        zapping: 0
                    })
                }
            })
        }
    }

    return notificacoesFinal;
}
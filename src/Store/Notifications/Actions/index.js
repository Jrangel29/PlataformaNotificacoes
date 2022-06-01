import {
    NOTIFICATION_CREATE_SUCCESS,
    NOTIFICATION_CREATE_ERROR,
    NOTIFICATION_CREATE_START
} from './Constants';
import {createNotification} from '../../../API/Requests';

export const createNewNotification = ( tipologia = '', regularidade = '', nomeItem = '', momentoUnico = '', mensagens = '', idTipologia = '', hora = '', envioNotif = '', idRegular = '', dias = '', diaUnico = '', diaMes = '', subcategoria = '', paramsPersonalizado = '', casasEscolhidas = '', usersEscolhidos = '', dataFim = '') => {
    
    return(dispatch) => {
        dispatch({ type: NOTIFICATION_CREATE_START });
        createNotification(tipologia, regularidade, nomeItem, momentoUnico, mensagens, idTipologia, hora, envioNotif, idRegular, dias, diaUnico, diaMes, subcategoria, paramsPersonalizado, casasEscolhidas, usersEscolhidos, dataFim)
        .then(Info => {
            dispatch({type: NOTIFICATION_CREATE_SUCCESS, payload: Info})
        })
        .catch(() => dispatch({type: NOTIFICATION_CREATE_ERROR}))
    }
}
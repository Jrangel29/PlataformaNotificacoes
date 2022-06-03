import {
    NOTIFICATION_CREATE_SUCCESS,
    NOTIFICATION_CREATE_ERROR,
    NOTIFICATION_CREATE_START,
    NOTIFICATION_GET_SUCCESS,
    NOTIFICATION_GET_ERROR,
    NOTIFICATION_GET_START
} from './Constants';
import {createNotification, fetchNotifications} from '../../../API/Requests';

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

export const getNotificationsUser = (id) => {
    return (dispatch) => {
      dispatch({ type: NOTIFICATION_GET_START });
  
      fetchNotifications(id)
        .then(Notification => {
          dispatch({ type: NOTIFICATION_GET_SUCCESS, payload: Notification })
        })
        .catch(() => dispatch({ type: NOTIFICATION_GET_ERROR }))
    }
  }
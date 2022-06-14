import {
    NOTIFICATION_CREATE_SUCCESS,
    NOTIFICATION_CREATE_ERROR,
    NOTIFICATION_CREATE_START,
    NOTIFICATION_GET_SUCCESS,
    NOTIFICATION_GET_ERROR,
    NOTIFICATION_GET_START,
    NOTIFICATION_ALL_GET_START,
    NOTIFICATION_ALL_GET_SUCCESS,
    NOTIFICATION_ALL_GET_ERROR,
    NOTIFICATION_SINGLE_GET_SUCCESS,
    NOTIFICATION_SINGLE_GET_ERROR,
    NOTIFICATION_SINGLE_GET_START,
} from './Constants';
import {createNotification, fetchNotifications, fetchAllNotifications, fetchNotificationInfo} from '../../../API/Requests';

export const createNewNotification = ( tipologia = '', regularidade = '', nomeItem = '', momentoUnico = '', mensagens = '', idTipologia = '', hora = '', envioNotif = '', idRegular = '', dias = '', diaUnico = '', diaMes = '', subcategoria = '', paramsPersonalizado = '', casasEscolhidas = '', usersEscolhidos = '', dataFim = '', canal = '') => {
    
    return(dispatch) => {
        dispatch({ type: NOTIFICATION_CREATE_START });
        createNotification(tipologia, regularidade, nomeItem, momentoUnico, mensagens, idTipologia, hora, envioNotif, idRegular, dias, diaUnico, diaMes, subcategoria, paramsPersonalizado, casasEscolhidas, usersEscolhidos, dataFim, canal)
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

  export const getNotifications = () => {
    return (dispatch) => {
      dispatch({ type: NOTIFICATION_ALL_GET_START });
  
      fetchAllNotifications()
        .then(Notification => {
          dispatch({ type: NOTIFICATION_ALL_GET_SUCCESS, payload: Notification })
        })
        .catch(() => dispatch({ type: NOTIFICATION_ALL_GET_ERROR }))
    }
  }

  export const getNotificationInfo = (id) => {
    return (dispatch) => {
      dispatch({ type: NOTIFICATION_SINGLE_GET_START });
  
      fetchNotificationInfo(id)
        .then(Notification => {
          dispatch({ type: NOTIFICATION_SINGLE_GET_SUCCESS, payload: Notification })
        })
        .catch(() => dispatch({ type: NOTIFICATION_SINGLE_GET_ERROR }))
    }
  }
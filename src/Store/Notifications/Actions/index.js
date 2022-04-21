import {
    NOTIFICATION_CREATE_SUCCESS,
    NOTIFICATION_CREATE_ERROR,
    NOTIFICATION_CREATE_START
} from './Constants';
import {createNotification} from '../../../API/Requests';

export const createNewNotification = ( tipologia = '', subcategoria = '', categoriaSaude = '', envioNotif = '', dias = '', tituloNotif = '', subtituloNotif = '', descricaoNotif = '', paramsPersonalizado = '') => {
    
    return(dispatch) => {
        dispatch({ type: NOTIFICATION_CREATE_START });
        createNotification(tipologia, subcategoria, categoriaSaude, envioNotif, dias, tituloNotif, subtituloNotif, descricaoNotif, paramsPersonalizado)
        .then(Info => {
            dispatch({type: NOTIFICATION_CREATE_SUCCESS, payload: Info})
        })
        .catch(() => dispatch({type: NOTIFICATION_CREATE_ERROR}))
    }
}
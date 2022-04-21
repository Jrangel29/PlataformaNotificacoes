import {
    USER_CREATE_SUCCESS,
    USER_CREATE_ERROR,
    USER_CREATE_START
} from './Constants';
import {createUser} from '../../../API/Requests';

export const createNewUser = ( nome = '', idade = '', idBox = '', distrito = '', concelho = '', saude = '', informacaoAdicional = '') => {
    
    return(dispatch) => {
        dispatch({ type: USER_CREATE_START });
        createUser(nome, idade, idBox, distrito, concelho, saude, informacaoAdicional)
        .then(Info => {
            dispatch({type: USER_CREATE_SUCCESS, payload: Info})
        })
        .catch(() => dispatch({type: USER_CREATE_ERROR}))
    }
}
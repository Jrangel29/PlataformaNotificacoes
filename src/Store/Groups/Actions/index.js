import {
    GROUP_CREATE_SUCCESS,
    GROUP_CREATE_ERROR,
    GROUP_CREATE_START
} from './Constants';
import {createGroup} from '../../../API/Requests';

export const createNewGroup = ( nome = '', descricao = '', idade = '', distrito = '', concelho = '') => {
    
    return(dispatch) => {
        dispatch({ type: GROUP_CREATE_START });
        createGroup(nome, descricao, idade, distrito, concelho)
        .then(Info => {
            dispatch({type: GROUP_CREATE_SUCCESS, payload: Info})
        })
        .catch(() => dispatch({type: GROUP_CREATE_ERROR}))
    }
}
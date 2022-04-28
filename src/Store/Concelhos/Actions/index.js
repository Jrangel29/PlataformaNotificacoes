import {
    CONCELHOS_GET_START,
    CONCELHOS_GET_SUCCESS,
    CONCELHOS_GET_ERROR
} from './Constants';
import {fetchConcelhos} from '../../../API/Requests';

export const getConcelhos = (id) => {
    return (dispatch) => {
      dispatch({ type: CONCELHOS_GET_START });
  
      fetchConcelhos(id)
        .then(Concelhos => {
          dispatch({ type: CONCELHOS_GET_SUCCESS, payload: Concelhos })
        })
        .catch(() => dispatch({ type: CONCELHOS_GET_ERROR }))
    }
  }
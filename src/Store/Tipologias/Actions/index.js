import {
    TIPOLOGIA_GET_START,
    TIPOLOGIA_GET_SUCCESS,
    TIPOLOGIA_GET_ERROR
} from './Constants';
import {fetchTipologiaList} from '../../../API/Requests';

export const getTipologiasList = () => {
    return (dispatch) => {
      dispatch({ type: TIPOLOGIA_GET_START });
  
      fetchTipologiaList()
        .then(Tipologia => {
          dispatch({ type: TIPOLOGIA_GET_SUCCESS, payload: Tipologia })
        })
        .catch(() => dispatch({ type: TIPOLOGIA_GET_ERROR }))
    }
  }
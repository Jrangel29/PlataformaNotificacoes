import {
    DISTRITOS_GET_START,
    DISTRITOS_GET_SUCCESS,
    DISTRITOS_GET_ERROR
} from './Constants';
import {fetchDistritosList} from '../../../API/Requests';

export const getDistritosList = () => {
    return (dispatch) => {
      dispatch({ type: DISTRITOS_GET_START });
  
      fetchDistritosList()
        .then(Distritos => {
          dispatch({ type: DISTRITOS_GET_SUCCESS, payload: Distritos })
        })
        .catch(() => dispatch({ type: DISTRITOS_GET_ERROR }))
    }
  }
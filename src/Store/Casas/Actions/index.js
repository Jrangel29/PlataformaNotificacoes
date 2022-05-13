import {
    CASAS_CREATE_SUCCESS,
    CASAS_CREATE_ERROR,
    CASAS_CREATE_START,
    CASAS_GET_SUCCESS,
    CASAS_GET_ERROR,
    CASAS_GET_START,
} from './Constants';
import {createHouse, fetchHouses} from '../../../API/Requests';

export const createNewHouse = ( nome = '', id = '', concelho = '') => {
    
    return(dispatch) => {
        dispatch({ type: CASAS_CREATE_START });
        createHouse(nome, id, concelho)
        .then(Info => {
            dispatch({type: CASAS_CREATE_SUCCESS, payload: Info})
        })
        .catch(() => dispatch({type: CASAS_CREATE_ERROR}))
    }
}

export const getHousesList = () => {
    return (dispatch) => {
      dispatch({ type: CASAS_GET_START });
  
      fetchHouses()
        .then(Houses => {
          dispatch({ type: CASAS_GET_SUCCESS, payload: Houses })
        })
        .catch(() => dispatch({ type: CASAS_GET_ERROR }))
    }
  }
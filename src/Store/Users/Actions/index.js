import {
    USER_CREATE_SUCCESS,
    USER_CREATE_ERROR,
    USER_CREATE_START,
    USERS_GET_START,
    USERS_GET_SUCCESS,
    USERS_GET_ERROR,
    SINGLE_USER_GET_START,
    SINGLE_USER_GET_ERROR,
    SINGLE_USER_GET_SUCCESS,
    TIPOLOGIA_USERS_GET_ERROR,
    TIPOLOGIA_USERS_GET_START,
    TIPOLOGIA_USERS_GET_SUCCESS,
    USER_UPDATE_ERROR,
    USER_UPDATE_START,
    USER_UPDATE_SUCCESS
} from './Constants';
import {createUser, fetchUsers, fetchSingleUser, fetchTipologiaUsers, updateUser} from '../../../API/Requests';

export const createNewUser = ( nome = '', idade = '', idCasa = '', informacaoAdicional = '', blackList = '') => {  
  return(dispatch) => {
      dispatch({ type: USER_CREATE_START });
      createUser(nome, idade, idCasa, informacaoAdicional, blackList)
      .then(Info => {
          dispatch({type: USER_CREATE_SUCCESS, payload: Info})
      })
      .catch(() => dispatch({type: USER_CREATE_ERROR}))
  }
}

export const updateUserInfo = ( idUser = '', nome = '', idade = '', idCasa = '', informacaoAdicional = '', blackList = '') => {  
  return(dispatch) => {
      dispatch({ type: USER_UPDATE_START });
      updateUser(idUser, nome, idade, idCasa, informacaoAdicional, blackList)
      .then(Info => {
          dispatch({type: USER_UPDATE_SUCCESS, payload: Info})
      })
      .catch(() => dispatch({type: USER_UPDATE_ERROR}))
  }
}

export const getUsersList = () => {
  return (dispatch) => {
    dispatch({ type: USERS_GET_START });

    fetchUsers()
      .then(Users => {
        dispatch({ type: USERS_GET_SUCCESS, payload: Users })
      })
      .catch(() => dispatch({ type: USERS_GET_ERROR }))
  }
}

export const getSingleUser = (id) => {
  return (dispatch) => {
    dispatch({ type: SINGLE_USER_GET_START });

    fetchSingleUser(id)
      .then(User => {
        dispatch({ type: SINGLE_USER_GET_SUCCESS, payload: User })
      })
      .catch(() => dispatch({ type: SINGLE_USER_GET_ERROR }))
  }
}

export const getTipologiaUsersList = (id) => {
  return (dispatch) => {
    dispatch({ type: TIPOLOGIA_USERS_GET_START });

    fetchTipologiaUsers(id)
      .then(Users => {
        dispatch({ type: TIPOLOGIA_USERS_GET_SUCCESS, payload: Users })
      })
      .catch(() => dispatch({ type: TIPOLOGIA_USERS_GET_ERROR }))
  }
}
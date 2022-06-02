import {
    EVENTS_GET_SUCCESS,
    EVENTS_GET_ERROR,
    EVENTS_GET_START,
    EVENT_GET_SUCCESS,
    EVENT_GET_ERROR,
    EVENT_GET_START,
} from './Constants';
import {fetchEventos, fetchSingleEvent} from '../../../API/Requests';

export const getEventsList = () => {
    return (dispatch) => {
      dispatch({ type: EVENTS_GET_START });
  
      fetchEventos()
        .then(Events => {
            dispatch({ type: EVENTS_GET_SUCCESS, payload: Events })
        })
        .catch(() => dispatch({ type: EVENTS_GET_ERROR }))
    }
  }

export const getEventSingle = (id) => {
    return (dispatch) => {
      dispatch({ type: EVENT_GET_START });
  
      fetchSingleEvent(id)
        .then(Event => {
            dispatch({ type: EVENT_GET_SUCCESS, payload: Event })
        })
        .catch(() => dispatch({ type: EVENT_GET_ERROR }))
    }
  }
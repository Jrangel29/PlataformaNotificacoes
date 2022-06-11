import {
    EVENTS_GET_SUCCESS,
    EVENTS_GET_ERROR,
    EVENTS_GET_START,
    EVENT_GET_SUCCESS,
    EVENT_GET_ERROR,
    EVENT_GET_START,
    EVENT_DELETE_ERROR,
    EVENT_DELETE_START,
    EVENT_DELETE_SUCCESS
} from './Constants';
import {fetchEventos, fetchSingleEvent, deleteEvent} from '../../../API/Requests';

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

export const deleteEventSingle = (id) => {
    return (dispatch) => {
      dispatch({ type: EVENT_DELETE_START });
  
      deleteEvent(id)
        .then(Event => {
            dispatch({ type: EVENT_DELETE_SUCCESS, payload: Event })
        })
        .catch(() => dispatch({ type: EVENT_DELETE_ERROR }))
    }
  }
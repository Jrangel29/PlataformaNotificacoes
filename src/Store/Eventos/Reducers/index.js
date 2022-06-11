import {
    EVENTS_GET_START,
    EVENTS_GET_SUCCESS,
    EVENT_GET_START,
    EVENT_GET_SUCCESS,
    EVENT_DELETE_SUCCESS
} from '../Actions/Constants'

const initialState = {
    isLoading: true,
    isLoadingEvent: true,
    singleEvent: {}
}

export default (state = initialState, { type, payload }) => {
    let data;
    
    switch(type) {
        case EVENTS_GET_START:
            return { ...state, isLoading: true };
        case EVENTS_GET_SUCCESS:
            return { ...state, data: payload, isLoading: false };
        case EVENT_GET_START:
            return { ...state, isLoadingEvent: true };
        case EVENT_GET_SUCCESS:
            return { ...state, singleEvent: payload, isLoadingEvent: false };
        case EVENT_DELETE_SUCCESS:
            return { ...state };
        default:
            return state;
    }
}
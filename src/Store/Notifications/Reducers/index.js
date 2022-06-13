import {
    NOTIFICATION_CREATE_SUCCESS,
    NOTIFICATION_CREATE_START,
    NOTIFICATION_GET_SUCCESS,
    NOTIFICATION_GET_START,
    NOTIFICATION_ALL_GET_START,
    NOTIFICATION_ALL_GET_SUCCESS,
    NOTIFICATION_SINGLE_GET_SUCCESS,
    NOTIFICATION_SINGLE_GET_START,
} from '../Actions/Constants'

const initialState = {
    isLoadingCreate: true,
    singleNotification: {},
    isLoading: true,
    isLoadingAll: true,
    isLoadingSingle: true
}

export default (state = initialState, { type, payload }) => {
    let data;
    
    switch(type) {
        case NOTIFICATION_CREATE_START:
            return {...state, isLoadingCreate: true};
            break;
        case NOTIFICATION_CREATE_SUCCESS:
            return {...state, isLoadingCreate: false};
            break;
        case NOTIFICATION_GET_START:
            return { ...state, isLoading: true };
        case NOTIFICATION_GET_SUCCESS:
            return { ...state, data: payload, isLoading: false };
        case NOTIFICATION_ALL_GET_START:
            return { ...state, isLoadingAll: true };
        case NOTIFICATION_ALL_GET_SUCCESS:
            return { ...state, data: payload, isLoadingAll: false };
        case NOTIFICATION_SINGLE_GET_START:
            return { ...state, isLoadingSingle: true };
        case NOTIFICATION_SINGLE_GET_SUCCESS:
            return { ...state, data: payload, isLoadingSingle: false };
        default:
            return state;
    }
}
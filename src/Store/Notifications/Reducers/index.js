import {
    NOTIFICATION_CREATE_SUCCESS,
    NOTIFICATION_CREATE_START,
    NOTIFICATION_GET_SUCCESS,
    NOTIFICATION_GET_START,
    NOTIFICATION_ALL_GET_START,
    NOTIFICATION_ALL_GET_SUCCESS
} from '../Actions/Constants'

const initialState = {
    isLoadingCreate: true,
    singleNotification: {},
    isLoading: true,
    isLoadingAll: true
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
        default:
            return state;
        case NOTIFICATION_GET_START:
            return { ...state, isLoading: true };
        case NOTIFICATION_GET_SUCCESS:
            return { ...state, data: payload, isLoading: false };
        case NOTIFICATION_ALL_GET_START:
            return { ...state, isLoadingAll: true };
        case NOTIFICATION_ALL_GET_SUCCESS:
            return { ...state, data: payload, isLoadingAll: false };
    }
}
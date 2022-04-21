import {
    NOTIFICATION_CREATE_SUCCESS,
    NOTIFICATION_CREATE_START
} from '../Actions/Constants'

const initialState = {
    isLoadingCreate: true,
    singleNotification: {}
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
    }
}
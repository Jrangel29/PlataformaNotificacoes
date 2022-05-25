import {
    USER_CREATE_SUCCESS,
    USER_CREATE_START,
    USERS_GET_START,
    USERS_GET_SUCCESS,
    SINGLE_USER_GET_START,
    SINGLE_USER_GET_SUCCESS
} from '../Actions/Constants'

const initialState = {
    isLoading: true,
    isLoadingCreate: true,
    singleUser: {},
    isLoadingUser: true,
    userUnique: {}
}

export default (state = initialState, { type, payload }) => {
    let data;
    
    switch(type) {
        case USER_CREATE_START:
            return {...state, isLoadingCreate: true};
            break;
        case USER_CREATE_SUCCESS:
            return {...state, isLoadingCreate: false};
            break;
        case USERS_GET_START:
            return { ...state, isLoading: true };
        case USERS_GET_SUCCESS:
            return { ...state, data: payload, isLoading: false };
        case SINGLE_USER_GET_START:
            return { ...state, isLoadingUser: true };
        case SINGLE_USER_GET_SUCCESS:
            return { ...state, userUnique: payload, isLoadingUser: false };
        default:
            return state;
    }
}
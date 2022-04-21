import {
    USER_CREATE_SUCCESS,
    USER_CREATE_START
} from '../Actions/Constants'

const initialState = {
    isLoadingCreate: true,
    singleUser: {}
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
        default:
            return state;
    }
}
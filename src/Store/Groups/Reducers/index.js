import {
    GROUP_CREATE_SUCCESS,
    GROUP_CREATE_ERROR,
    GROUP_CREATE_START
} from '../Actions/Constants'

const initialState = {
    isLoadingCreate: true,
    singleGroup: {}
}

export default (state = initialState, { type, payload }) => {
    let data;

    switch(type) {
        case GROUP_CREATE_START:
            return {...state, isLoadingCreate: true};
            break;
        case GROUP_CREATE_SUCCESS:
            return {...state, isLoadingCreate: false};
            break;
        default:
            return state;
    }
}
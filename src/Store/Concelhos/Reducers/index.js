import {
    CONCELHOS_GET_START,
    CONCELHOS_GET_SUCCESS
} from '../Actions/Constants'

const initialState = {
    isLoading: true
}

export default (state = initialState, { type, payload }) => {
    let data;
    
    switch(type) {
        case CONCELHOS_GET_START:
            return { ...state, isLoading: true };
        case CONCELHOS_GET_SUCCESS:
            return { ...state, data: payload, isLoading: false };
        default:
            return state;
    }
}
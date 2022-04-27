import {
    TIPOLOGIA_GET_START,
    TIPOLOGIA_GET_SUCCESS
} from '../Actions/Constants'

const initialState = {
    isLoading: true
}

export default (state = initialState, { type, payload }) => {
    let data;
    
    switch(type) {
        case TIPOLOGIA_GET_START:
            return { ...state, isLoading: true };
        case TIPOLOGIA_GET_SUCCESS:
            return { ...state, data: payload, isLoading: false };
        default:
            return state;
    }
}
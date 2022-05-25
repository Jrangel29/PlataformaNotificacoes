import {
    CASAS_CREATE_SUCCESS,
    CASAS_CREATE_START,
    CASAS_GET_START,
    CASAS_GET_SUCCESS,
    CASAS_PESSOAS_GET_START,
    CASAS_PESSOAS_GET_SUCCESS
} from '../Actions/Constants'

const initialState = {
    isLoadingCreate: true,
    singleCasa: {},
    isLoading: true,
    isLoadingPeople: true
}

export default (state = initialState, { type, payload }) => {
    let data;
    //let batata = []
    
    switch(type) {
        case CASAS_CREATE_START:
            return {...state, isLoadingCreate: true};
            break;
        case CASAS_CREATE_SUCCESS:
            return {...state, isLoadingCreate: false};
            break;
        case CASAS_GET_START:
            return { ...state, isLoading: true };
        case CASAS_GET_SUCCESS:
            return { ...state, data: payload, isLoading: false };
        case CASAS_PESSOAS_GET_START:
            return { ...state, isLoadingPeople: true };
        case CASAS_PESSOAS_GET_SUCCESS:
            return { ...state, singleCasa: payload, isLoadingPeople: false };
        default:
            return state;
    }
}
import * as types from '../constants/actionTypes';

const initialState = {
    loading: false,
    success: false,
    message: null,
    data: null
}

const postReducer = (state = initialState, action) => {
    switch (action.type){
        case types.FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.FETCH_POSTS_SUCCESSED:
            return {
                ...state,
                loading: false,
                success: true,
                data: action.data
            };
        case types.FETCH_POSTS_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                message: action.message
            };
        default:
            return state;
    }
}


export default postReducer;

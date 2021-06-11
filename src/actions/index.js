import * as types from '../constants/actionTypes';

export const loadPosts = () => async dispatch => {
    try {
        dispatch({type: types.FETCH_POSTS_REQUEST});
        const url = "http://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        const data = await response.json();
        // data trái là trong initialState, data phải là dữ liệu lấy về
        dispatch({type: types.FETCH_POSTS_SUCCESSED, data: data})
    } catch (error) {
        console.log(error);
        // message trái là trong initialState, error phải là dữ liệu lấy về
        dispatch({type: types.FETCH_POSTS_SUCCESSED, message: error})
    }
}
import {combineReducers} from 'redux';
import {SELECT_REDDIT,FETCH_REQUEST,RECEIVE_POSTS} from '../actions';

const selectedReddit=(state='frontend',action)=>{
    switch (action.type){
        case SELECT_REDDIT:
            return action.reddit;
        default:
            return state;
    }
};

const post=(state={posts:[],isFetching:false},action)=>{
    switch (action.type){
        case FETCH_REQUEST:
            return {...state,isFetching:true};
        case RECEIVE_POSTS:
            return {...state,posts:action.posts,lastUpdate:Date.now(),isFetching:false};
    }
};

const postByReddit=(state={},action)=>{
    switch (action.type){
        case FETCH_REQUEST:
        case RECEIVE_POSTS:
            return {
                ...state,
                [action.reddit]:post(state[action.reddit],action)
            };
        default:
            return state;
    }
};

export default combineReducers({
    selectedReddit,
    postByReddit
});
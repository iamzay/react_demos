/**
 * Created by zay on 2017/7/7.
 */
import {INCREMENT,DECREMENT} from './actionTypes';
import {increment,decrement} from './action';

const reducer=(state=0,action)=>{
    switch(action.type){
        case INCREMENT:
            return state+1;
        case DECREMENT:
            return state-1;
        default:
            return state;
    }
};

export {increment,decrement,reducer};
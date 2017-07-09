/**
 * Created by zay on 2017/7/9.
 */
import * as types from '../constants/ActionTypes';
import {combineReducers} from 'redux';

function byId(state={},action){
    switch (action.type){
        case types.ADD_TO_CART:
            return {...state,[action.id]:{...state[action.id],inventory:state[action.id].inventory-1}};
        case types.RECEIVE_PRODUCTS:
            return action.products.reduce((obj,product)=>{obj[product.id]=product;return obj},{});
        default:
            return state;
    }
}

function visibleIds(state=[],action){
    switch (action.type){
        case types.RECEIVE_PRODUCTS:
            return action.products.map((product)=>product.id);
        default:
            return state;
    }
}

export default combineReducers({
    byId,
    visibleIds
});
/**
 * Created by zay on 2017/7/9.
 */
import * as types from '../constants/ActionTypes';

const initialState={
    addedIds:[],
    quantityById:{}
};

function cart(state=initialState,action){
    let addedIds,quantityById;
    switch (action.type){
        case types.ADD_TO_CART:
            if(state.addedIds.find((id)=>id===action.id)){
                addedIds=[...state.addedIds];
                const prevQuantity=state.quantityById[action.id];
                quantityById=Object.assign({},state.quantityById,{[action.id]:prevQuantity+1});
            } else{
                addedIds=[...state.addedIds,action.id];
                quantityById=Object.assign({},state.quantityById,{[action.id]:1});
            }
            return {addedIds,quantityById};

        case types.CHECKOUT_REQUEST:
            return initialState;

        default:
            return state;
    }
}

export default cart;
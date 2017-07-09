/**
 * Created by zay on 2017/7/9.
 */
import * as types from '../constants/ActionTypes';
import shop from '../api/shop';

const addToCartUnsafe=productId=>({
    type:types.ADD_TO_CART,
    id:productId
});

const addToCart=productId=>(dispatch,getState)=>{
    const byId=getState().products.byId;
    if(byId[productId].inventory>0){
        dispatch(addToCartUnsafe(productId));
    }
};

const receiveProducts=products=>({
    type:types.RECEIVE_PRODUCTS,
    products
});

const getAllProducts=()=>(dispatch)=>{
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
};

const checkout=products=>(dispatch,getState)=>{
    const {cart}=getState();
    dispatch({
        type:types.CHECKOUT_REQUEST
    });
    shop.buyProducts(products, () => {
        dispatch({
            type: types.CHECKOUT_SUCCESS,
            cart
        })
        // Replace the line above with line below to rollback on failure:
        // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
};

export {checkout,getAllProducts,addToCart};
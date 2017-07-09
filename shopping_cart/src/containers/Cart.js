/**
 * Created by zay on 2017/7/9.
 */
import React from 'react';
import {connect} from 'react-redux';
import {checkout} from '../actions';

const Cart=({products,checkout})=>{
    const total=products.reduce((total,product)=>{total+=product.price*product.cnt; return total},0);
    return (
        <div>
            <h3>Your Cart</h3>
            {products.map((product)=>(
                <div>{product.title+' - '+product.price+' * '+product.cnt}</div>
            ))}
            <div>{'Total: $'+total}</div>
            <button onClick={()=>checkout(products)}>checkout</button>
        </div>
    );
};

const mapStateToProps=(state)=>{
    const addedIds=state.cart.addedIds;
    const quantityById=state.cart.quantityById;
    const byId=state.products.byId;
    const products=addedIds.map((id)=>({...byId[id],cnt:quantityById[id]}));
    return {products};
};

const mapDispatchToProps=dispatch=>{
    return {checkout:(products)=>dispatch(checkout(products))}
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
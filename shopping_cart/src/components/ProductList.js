/**
 * Created by zay on 2017/7/9.
 */
import React from 'react';
import {connect} from 'react-redux';
import Product from './Product';
import {addToCart} from '../actions';

const ProductList=({products,addToCart})=>(
    <div>
        <h3>
            Products
        </h3>
        {products.map((product)=><Product product={product} handleClick={addToCart} id={product.id}/>)}
        <hr/>
    </div>
);

const mapStateToProps=state=>{
    const byId=state.products.byId;
    const visibleIds=state.products.visibleIds;
    return {
        products:visibleIds.map((id)=>({...byId[id],id}))
    }
};

const mapDispatchToProps=dispatch=>({
    addToCart:(id)=>dispatch(addToCart(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);

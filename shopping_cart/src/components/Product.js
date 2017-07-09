/**
 * Created by zay on 2017/7/9.
 */
import React from 'react';

const Product=({product,handleClick})=>(
    <div style={{marginBottom:"20px"}}>
        <div>
        {product.title+' - '+'$'+product.price}
        </div>
        <button onClick={()=>handleClick(product.id)} disabled={product.inventory<=0}>
            {product.inventory>0?'Add to cart':'Sold Out'}
        </button>
    </div>
);

export default Product;
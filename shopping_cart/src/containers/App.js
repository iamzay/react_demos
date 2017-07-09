/**
 * Created by zay on 2017/7/9.
 */
import React from 'react';
import ProductList from '../components/ProductList';
import Cart from './Cart';

const App=()=>(
    <div>
        <h2>Shopping Cart Example</h2>
        <hr/>
        <ProductList/>
        <Cart/>
    </div>
);

export default App;
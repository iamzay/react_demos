import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import Counter from './components/Counter';
import {reducer,increment,decrement} from './reducers';

const store=createStore(reducer);
const render=()=>ReactDom.render(
    <Counter value={store.getState()}
             onIncrement={() => store.dispatch(increment())}
             onDecrement={() => store.dispatch(decrement())}/>,
    document.getElementById('root')
);

store.subscribe(render);

render();


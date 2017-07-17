/**
 * Created by zay on 2017/7/9.
 */
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import App from './App';
import reducer from './reducers';
import {Provider} from 'react-redux';

const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(

    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);
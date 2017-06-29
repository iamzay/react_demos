import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';
import './App.css';
import {Provider} from './connect';

function createStore (reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe }
}

function reducer(state,action){
    if(!state)
        return {themeColor:'green'};
    switch (action.type){
        case 'CHANGE_COLOR':
            return {...state,themeColor:action.themeColor};
        default:
            return state;
    }
}

const store=createStore(reducer);

class App extends Component {
    static childContextTypes={
        store:PropTypes.object
    };

    getChildContext(){
        return {store};
    }

  render() {
    return (
        <Provider store={store}>
            <Header/>
            <Content/>
        </Provider>
    );
  }
}

export default App;

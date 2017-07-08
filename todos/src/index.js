/**
 * Created by zay on 2017/7/7.
 */
/**
 * Created by zay on 2017/7/7.
 */
import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {default as TodoList} from './containers/TodoListContainer';
import {default as AddTodo} from './containers/AddTodoContainer';
import {default as FilterLink} from './containers/LinkContainer';

const store=createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <div>
        <AddTodo/>
        <TodoList/>
            <FilterLink filterText="ALL">ALL</FilterLink>
            <FilterLink filterText="COMPLETED">Completed</FilterLink>
            <FilterLink filterText="TODO">Todo</FilterLink>
        </div>
    </Provider>,
    document.getElementById('root')
);
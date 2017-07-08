/**
 * Created by zay on 2017/7/7.
 */
import React from 'react';
import Todo from './Todo';

const TodoList=({todos,onClick})=>(
    <ul>
        {todos.map((todo)=><Todo key={todo.id} todo={todo} onClick={onClick}/>)}
    </ul>
);

export default TodoList;
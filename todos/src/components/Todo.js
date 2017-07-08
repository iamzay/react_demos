/**
 * Created by zay on 2017/7/7.
 */
import React from 'react';

const Todo = (({onClick, todo}) =>
    <li
        onClick={() => {onClick(todo.id);}}
        style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}
    >
        {todo.text}
    </li>);

export default Todo;


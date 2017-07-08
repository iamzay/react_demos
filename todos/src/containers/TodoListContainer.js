/**
 * Created by zay on 2017/7/7.
 */
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions';

const mapStateToProps=state=>{
    let {todos,filterText}=state;
    const filterTodos=(status)=>todos.filter((todo)=>todo.isCompleted===status);

    if(filterText==='ALL'){
        return {todos};
    }
    if(filterText==='COMPLETED'){
        return {todos:filterTodos(true)};
    }
    return {todos:filterTodos(false)};

};

const mapDispatchToProps=dispatch=>({onClick:(id)=>dispatch(toggleTodo(id))});

const TodoListContainer=connect(mapStateToProps,mapDispatchToProps)(TodoList);

export default TodoListContainer;
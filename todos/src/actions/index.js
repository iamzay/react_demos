/**
 * Created by zay on 2017/7/7.
 */
const addTodo=(text)=>({type:"ADD_TODO",text});
const toggleTodo=(id)=>({type:"TOGGLE_TODO",id});

const setFilterText=(filterText)=>({type:"SET_FILTER_TEXT",filterText});

export {addTodo,toggleTodo,setFilterText};
/**
 * Created by zay on 2017/7/7.
 */
let nextId=1;
let data={
    text:"go to school",
    isCompleted:false,
    id:0
};

function todos(state=[data],action){
    switch(action.type){
        case "ADD_TODO":
            return [...state,{...action,id:nextId++,isCompleted:false}];
        case "TOGGLE_TODO":
            return state.map((todo)=>{
                if(todo.id===action.id){
                    return Object.assign({},todo,{isCompleted:!todo.isCompleted});
                }
                return todo;
            });
        default:
            return state;
    }
}

export default todos;
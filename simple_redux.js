/**
 * Created by zay on 2017/6/28.
 */
// 返回{getState,dispatch,subscribe}
function createStore(reducer) {
    let state=null;
    let listeners=[];
    const getState=()=>state;
    const dispatch=action=>{
        state=reducer(state,action);
        // 每次修改完状态调用listener
        listeners.forEach(listener=>listener());
    };
    const subscribe=listener=>listeners.push(listener);
    // 初始化状态
    dispatch({});
    return {dispatch,subscribe,getState};
}

// 根据state的和action返回一个新的state，而不是修改原来state
function reducer (state,action) {
    if (!state) {
        return { title:'hello-world' };
    }
    // 根据action.type返回不同的state
    switch (action){
        case 'CHANGE_TITLE':
            return {...state,title:action.title};
            break;
            // more case
        default: return state;
    }
}
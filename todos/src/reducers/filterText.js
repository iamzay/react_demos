/**
 * Created by zay on 2017/7/7.
 */
function filterText(state="ALL",action){
    switch(action.type){
        case "SET_FILTER_TEXT":
            return action.filterText;
        default:
            return state;
    }
}

export default filterText;
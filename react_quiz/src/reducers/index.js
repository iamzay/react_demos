/**
 * Created by zay on 2017/7/9.
 */
const initialState={
    questionId:0,
    nextButtonDisabled:true,
    result:{}
};

const reduer=(state=initialState,action)=>{
    switch (aciton.type){
        case 'ANSWER_CHANGED':
            const {result:prevResult}=state.result;
            const prevCnt=prevResult[action.answer]||0;
            return {...state,nextButtonDisabled:false,result:{...prevResult,[action.answer]:prevCnt+1}};
        case 'NEXT_QUESTION':
            return {...state,questionId:state.questionId+1};
        default:
            return state;
    }
};

export default reduer;
/**
 * Created by zay on 2017/7/9.
 */
const initialState={
    questionId:0,
    nextButtonDisabled:true,
    result:{},
    answer:''
};

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case 'ANSWER_CHANGED':
            return {...state,nextButtonDisabled:false,answer:action.answer};
        case 'NEXT_QUESTION':
            const {result:prevResult}=state;
            const prevCnt=prevResult[state.answer]||0;
            return {...state,nextButtonDisabled:true,result:{...prevResult,[state.answer]:prevCnt+1},questionId:state.questionId+1,answer:''};
        default:
            return state;
    }
};

export default reducer;
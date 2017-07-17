/**
 * Created by zay on 2017/7/17.
 */
import React from 'react';
import {connect} from 'react-redux';

const Option=({option,handleClick,answer})=>{
    const {type,content}=option;

    return (
        <div className="answerOption">
            <input type="radio" name="answer" onClick={()=>handleClick(type)} checked={answer==type}/>
            <label htmlFor="">{content}</label>
        </div>
    )
};

const mapStateToProps=state=>({
    answer:state.answer
});

const mapDispatchToProps=dispatch=>({
    handleClick:answer=>dispatch({type:'ANSWER_CHANGED',answer})
});

export default connect(mapStateToProps,mapDispatchToProps)(Option);
/**
 * Created by zay on 2017/7/17.
 */
import React from 'react';
import Option from './Option';
import quizQuestions from '../api';
import {connect} from 'react-redux';

const Question=(props)=>{
    const {questionId,questionTotal}=props;
    const question=quizQuestions[questionId];
    const {question:title,answers}=question;
    return (
        <div className="questionCard">
            <div className="questionDescription">
                <div className="questionPosition">{'Question '+(questionId+1)+' of '+questionTotal}</div>
                <h2 className="questionTitle">{title}</h2>
            </div>
            <div className="answerOptions">
                {answers.map((option,id)=><Option key={id} option={option}/>)}
            </div>
        </div>
    )
};

const mapStateToProps=state=>({
    questionId:state.questionId
});

export default connect(mapStateToProps)(Question);
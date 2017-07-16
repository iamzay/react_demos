/**
 * Created by zay on 2017/7/17.
 */
import React from 'react';
import Option from './Option';

const Question=(props)=>{
    const {questionId,questionTotal,question}=props;
    const {question:title,answers}=question;
    return (
        <div className="questionCard">
            <div className="questionDescription">
                <div className="questionPosition">{'Question '+questionId+' of '+questionTotal}</div>
                <h2 className="questionTitle">{title}</h2>
            </div>
            <div className="answerOptions">
                {answers.map((option,id)=><Option key={id} option={option}/>)}
            </div>
        </div>
    )
};

export default Question;
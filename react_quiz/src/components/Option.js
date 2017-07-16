/**
 * Created by zay on 2017/7/17.
 */
import React from 'react';

const Option=({option})=>{
    const {type,content}=option;

    return (
        <div className="answerOption">
            <input type="radio" name="answer"/>
            <label htmlFor="">{content}</label>
        </div>
    )
};

export default Option;
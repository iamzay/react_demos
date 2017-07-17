/**
 * Created by zay on 2017/7/17.
 */

import React from 'react';

const Answer=({result})=>{
    const keys=[];
    for(let prop in result){
        if(result.hasOwnProperty(prop)){
            keys.push(prop);
        }
    }
    const answer=keys.reduce((key,answer)=>{answer=result[key]>result[answer]?key:answer;return answer});
    return (<div className="answer">
        {'You prefer '+answer}
    </div>);
};

export default Answer;
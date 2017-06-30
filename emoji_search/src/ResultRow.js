/**
 * Created by zay on 2017/6/30.
 */
import React from 'react';
import './ResultRow.css';

class ResultRow extends React.Component {
    render(){
        const result=this.props.result;
        const symbol=result.symbol,title=result.title;
        const codePointHex = symbol.codePointAt(0).toString(16);
        const src=`//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return (
            <div className="result-row">
                <img src={src} alt="emoji"/>
                <span>{title}</span>
            </div>
        )
    }
}

export default ResultRow;
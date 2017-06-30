/**
 * Created by zay on 2017/6/30.
 */
import React from 'react';
import ResultRow from './ResultRow';

class ResultList extends React.Component {
    render(){
        return (
            <div>
                {this.props.results.map((result)=><ResultRow result={result} key={result.title}/>)}
            </div>
        )
    }

}

export default ResultList;
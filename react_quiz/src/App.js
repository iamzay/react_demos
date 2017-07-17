/**
 * Created by zay on 2017/7/17.
 */
import React from 'react';
import './App.css';
import logo from './svg/logo.svg';
import Question from './components/Question';
import {connect} from 'react-redux';
import Answer from './components/Answer';

const App=(props)=>(
    <div>
        <header>
            <img src={logo} alt="react logo" className="logo"/>
            <h2 className="title">React Quiz</h2>
        </header>
        <main>
            {(()=>{
                if(props.questionId<5){
                    return (<div>
                        <Question questionTotal={5}/>
                        <button className="nextButton" disabled={props.nextButtonDisabled} onClick={props.handleClick}>Next</button>
                    </div>)
                }
                return <Answer result={props.result}/>
            })()}
        </main>
    </div>
);

const mapStateToProps=state=>({
    nextButtonDisabled:state.nextButtonDisabled,
    questionId:state.questionId,
    result:state.result
});

const mapDispatchToProps=dispatch=>({
    handleClick:()=>dispatch({type:'NEXT_QUESTION'})
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
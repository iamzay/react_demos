/**
 * Created by zay on 2017/7/17.
 */
import React from 'react';
import './App.css';
import logo from './svg/logo.svg';
import Question from './components/Question';
import quizQuestions from './api';

const App=()=>(
    <div>
        <header>
            <img src={logo} alt="react logo" className="logo"/>xs
            <h2 className="title">React Quiz</h2>
        </header>
        <body>
        <Question questionId={1} questionTotal={5} question={quizQuestions[0]}/>
        <button className="nextButton">Next</button>
        </body>
    </div>
);

export default App;
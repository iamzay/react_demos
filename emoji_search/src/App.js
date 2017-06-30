import React from 'react';
import './App.css';
import ResultList from './ResultList';
import SearchInput from './SearchInput';
import Header from './Header';
import emojiData from './emojiList.json';

class App extends React.Component {
    constructor(){
        super(...arguments);
        this.state={results:[]};
    }

    componentWillMount(){
        this.getResults('');
    }

    getResults(searchStr){
        const results=emojiData.filter((emoji)=>emoji.title.includes(searchStr)).slice(0,20);
        this.setState({results});
    }

    render(){
        return (
            <div>
                <Header/>
                <SearchInput handleInputChange={this.getResults.bind(this)}/>
                <ResultList results={this.state.results}/>
            </div>
        );
    }
}

export default App;
import './App.css'

import React, {Component} from 'react'

class App extends Component {
    constructor(){
        super(...arguments);
        this.state={loading:true,error:null,value:null};
    }

    componentDidMount(){
        this.props.promise.then(
            value=>this.setState({loading:false,value}),
            error=>this.setState({loading:false,error})
        );
    }

    render(){
        if(this.state.loading){
            return <span>Loading...</span>;
        }
        if(this.state.error!==null){
            return <span>Error:</span>
        }
        let repos=this.state.value.items;
        let repoList=repos.map(repo=><li><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}</li>);
        return (
            <main>
                <h1>Most Popular JavaScript Projects in Github</h1>
                <ol>{repoList}</ol>
            </main>
        );
    }
}

export default App

import React,{Component} from 'react';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

export default class App extends Component{
    render(){
        return (
            <div>
                <Picker options={['frontend','reactjs']}/>
                <Posts/>
            </div>
        )
    }
}

class Form extends Component {
    constructor(props){
        super(props);
        this.state={username:'',password:''};
    }

    render(){
        return (
            <div>
                <form>
                    <input name="username" type="text" value=""/>
                </form>
            </div>
        )
    }
}

/**
 * Created by zay on 2017/7/8.
 */
import React from 'react';

export default class AddTodo extends React.Component{
    handleClick(e){
        e.preventDefault();
        this.props.onClick(this.input.value);
        this.input.value='';
    }

    render(){
        return (
            <form>
                <input type="text" ref={(input)=>this.input=input}/>
                <button onClick={this.handleClick.bind(this)}>AddTodo</button>
            </form>
        );
    }
}
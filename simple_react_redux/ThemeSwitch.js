/**
 * Created by zay on 2017/6/28.
 */
import React from 'react';
import PropTypes from 'prop-types';
import connect from './connect';

class ThemeSwitch extends React.Component {
    handleClick(color){
        this.props.changeColor(color);
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick.bind(this,'red')}>Red</button>
                <button onClick={this.handleClick.bind(this,'blue')}>Blue</button>
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
     return {
         changeColor:(color)=>dispatch({type:'CHANGE_COLOR',themeColor:color})
     };
};

export default connect(null,mapDispatchToProps)(ThemeSwitch);
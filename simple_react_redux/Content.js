/**
 * Created by zay on 2017/6/28.
 */
import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import PropTypes from 'prop-types';
import connect from './connect';

class Content extends React.Component {
    render(){
        return (
            <div>
            <p style={{color:this.props.themeColor}}>React.js内容</p>
            <ThemeSwitch/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        themeColor:state.themeColor
    };
};

export default connect(mapStateToProps)(Content);
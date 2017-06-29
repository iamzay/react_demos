/**
 * Created by zay on 2017/6/28.
 */
import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    static contextTypes={
        store:PropTypes.object
    };

    constructor(props){
        super(props);
        this.state={themeColor:''};
    }

    componentWillMount(){
        this._updateThemeColor();
    }

    _updateThemeColor(){
        const {store}=this.context;
        this.setState={themeColor:store.getState().themeColor};
    }

    render(){
        return (
            <h1 style={{color:this.state.themeColor}}>React.js小书</h1>
        );
    }
}

export default Header;
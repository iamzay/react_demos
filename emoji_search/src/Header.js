/**
 * Created by zay on 2017/6/30.
 */
import React from 'react';
import './Header.css';

class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" alt="emoji"/>
                <span>Emoji Search</span>
                <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" alt="emoji"/>
            </div>
        );
    }
}

export default Header;
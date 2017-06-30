/**
 * Created by zay on 2017/6/30.
 */
import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component {
    handleInputChange(event){
        const searchStr=event.target.value;
        this.props.handleInputChange(searchStr);
    }

    render(){
        return (
            <div className="search">
                <input type="text" onChange={this.handleInputChange.bind(this)}/>
            </div>
        );
    }
}

export default SearchInput;
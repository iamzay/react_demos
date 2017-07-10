import React from 'react';
import {connect} from 'react-redux';
import {selectReddit} from '../actions';

const Picker=({options,value,handleChange})=>{
    return (
        <div>
            <h2>
                {value}
            </h2>
            <select onChange={e=>handleChange(e.target.value)} value={value}>
                {
                    options.map((option,id)=><option value={option} key={id}>{option}</option>)
                }
            </select>
            <hr/>
        </div>
    )
};

const mapStateToProps=state=>({value:state.selectedReddit});
const mapDispatchToProps=dispatch=>({handleChange:value=>dispatch(selectReddit(value))});

export default connect(mapStateToProps,mapDispatchToProps)(Picker);
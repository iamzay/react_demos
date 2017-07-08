/**
 * Created by zay on 2017/7/8.
 */
import {connect} from 'react-redux';
import Link from '../components/Link';
import {setFilterText} from '../actions';

const mapStateToProps=(state,ownProps)=>({active:state.filterText===ownProps.filterText});
const mapDispatchToProps=(dispatch,ownProps)=>({onClick:()=>dispatch(setFilterText(ownProps.filterText))});

const LinkContainer=connect(mapStateToProps,mapDispatchToProps)(Link);

export default LinkContainer;
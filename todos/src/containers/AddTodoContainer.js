/**
 * Created by zay on 2017/7/8.
 */
import AddTodo from '../components/AddTodo';
import {addTodo} from '../actions';
import {connect} from 'react-redux';

const mapDispatchToProps=dispath=>({onClick:(text)=>dispath(addTodo(text))});

export default connect(null,mapDispatchToProps)(AddTodo);
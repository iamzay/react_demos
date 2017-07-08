/**
 * Created by zay on 2017/7/7.
 */
import todos from './todos';
import filterText from './filterText';
import {combineReducers} from 'redux';

const reducer=combineReducers({todos,filterText});

export default reducer;
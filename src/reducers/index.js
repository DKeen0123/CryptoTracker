import { combineReducers } from 'redux';
import balance from './reducer_balance';
import bitcoin from './reducer_bitcoin';
import ethereum from './reducer_ethereum';

export default combineReducers({ balance, bitcoin, ethereum });

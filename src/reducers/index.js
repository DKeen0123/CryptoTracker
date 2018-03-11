import { combineReducers } from 'redux';
import balance from './reducer_balance';
import bitcoin from './reducer_bitcoin';

export default combineReducers({ balance, bitcoin });

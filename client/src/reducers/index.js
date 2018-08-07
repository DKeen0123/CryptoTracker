import { combineReducers } from 'redux';
import bitcoin from './reducer_bitcoin';
import ethereum from './reducer_ethereum';
import crypto from './reducer_crypto';

export default combineReducers({ bitcoin, ethereum, crypto });

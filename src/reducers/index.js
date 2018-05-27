import { combineReducers } from 'redux';
import balance from './reducer_balance';
import bitcoin from './reducer_bitcoin';
import ethereum from './reducer_ethereum';
import crypto from './reducer_crypto';
import selectedCrypto from './reducer_selected_crypto';

export default combineReducers({ balance, bitcoin, ethereum, crypto, selectedCrypto });

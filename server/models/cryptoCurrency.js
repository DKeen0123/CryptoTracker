const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cryptoCurrencySchema = new Schema({
  name: String,
  amount: Number
});

module.exports = mongoose.model('CryptoCurrency', cryptoCurrencySchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FactSchema = new Schema({
  fact: String,
  submittedBy: String
})

const Fact = mongoose.model('fact', FactSchema);

module.exports = Fact;
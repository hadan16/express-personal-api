var mongoose = require("mongoose");
  Schema = mongoose.Schema;

var QuoteSchema = new Schema({
  phrase: String,
  author: String,
  topic: String
});

var Quote = mongoose.model('Quote', QuoteSchema);

//quote model export
module.exports = Quote;

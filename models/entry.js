var mongoose = require('mongoose');

var EntrySchema = new mongoose.Schema({
  author: String,
  caption: String,
  img_url: String,
  date_posted: Date
});

mongoose.model('Entry', EntrySchema);

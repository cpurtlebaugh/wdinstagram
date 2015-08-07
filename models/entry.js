var mongoose = require('mongoose');

var EntrySchema = new mongoose.Schema({
  name: String,
  img_url: String,
  date_posted: Date
});

mongoose.model('Entry', EntrySchema);

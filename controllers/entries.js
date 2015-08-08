// Controller for Entries

module.exports = entry;

// sourced in models
var entry = require('../models/entry');

// GET '/' - renders entries index page
module.exports.renderEntriesIndex = function(req, res, next) {
  res.render('entries/index', { title: 'WDInstagram' });
};

router.get('/entries', function(request, response, next){
  Entry.find(function(error, Entries){
    if(error) return response.send(error);
    response.send(entries);
  });
});

router.post('/entries', function(request, response, next){
  var entry = new Entry();
  entry.author = request.body.author;
  entry.img_url = request.body.img_url;
  entry.save(function(error, entry){
    if(error) return response.send(error);
    response.send(entry);
  });
});

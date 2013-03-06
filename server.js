var express = require('express'),
    fact = require('./routes/facts');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/facts', fact.findAll);
app.get('/facts/:id', fact.findById);
app.post('/facts', fact.addWine);
app.put('/facts/:id', fact.updateWine);
app.delete('/facts/:id', fact.deleteWine);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
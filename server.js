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

app.listen(3000);
console.log('Listening on port 3000...');
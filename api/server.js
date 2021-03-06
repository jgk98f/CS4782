var express = require('express'),
framework = require('./routes/api');

var app = express();
var morgan = require('morgan')

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('combined'))

app.get('/api/frameworks', framework.findAllFrameworks);
app.get('/api/frameworks/:name', framework.findFrameworkByName);
app.get('/api/frameworks/type/:type', framework.findFrameworkByBusinessType);

app.get('/api/frameworks/:name/controls', framework.findAllFrameworkControls);
app.get('/api/frameworks/:fname/controls/:name', framework.findFrameworkControlByFrameworkNameAndControlName);
app.get('/api/references/:name', framework.findControlsByReference);
app.get('/api/frameworks/controls/like/:description', framework.findSimilarControlsByDescription);
app.get('/api/frameworks/controls/:control/tag/:tag', framework.addTagToControl);
app.get('/api/frameworks/controls/tag/:tag', framework.findControlsByTag);

app.listen(3000);
console.log('Listening on port 3000...');
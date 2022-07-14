const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', routes.index);
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port);
console.log('Server started at http://localhost:' + port);
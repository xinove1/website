const express = require('express');

const app = express();

app.use('/', require('./src/routes'));

app.listen(8080);
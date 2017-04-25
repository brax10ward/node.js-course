const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send({
        braxton: 'Braxton',
        jessica: 'jessica',
        jay: 'Jay'
    });
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});

module.exports.app = app;
var express = require('express');
var app = express();
var port = 7000;
const bodyParser = require('body-parser');

app.listen(port, () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    console.log("server up");
    app.get('/', () => {
        console.log("api working");
    });
    app.get('/call', () => {
        console.log("answer");
    });

});

module.exports = {
    app
};

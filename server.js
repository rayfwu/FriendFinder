var express = require('express');
// var path = require('path');
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);




// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '/app/public/home.html'));
// });

// app.use(function(req, res) {
//     res.status(404).end('error');
// });

app.listen(PORT, function() {
    console.log(`Listening on port ${port}.`);
});
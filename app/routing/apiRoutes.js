var path = require('path');
var fs = require('fs');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.sendFile(path.join(__dirname, '../data/friends.js'));
    });

    app.post('/api/friends', function(req, res) {
        var newProfile = req.body;
        console.log(newProfile);

        // data is an array with everything that's been recorded so far
        var data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/friends.js'), 'utf8'));

        // add the user entered data into the data array and then rewrite the file with the new contents
        data.push(newProfile);
        console.log(data);
        fs.writeFile(path.join(__dirname, '../data/friends.js'), JSON.stringify(data), function(err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });
}
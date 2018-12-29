//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/School-admin-ng-material'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'/dist/School-admin-ng-material/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
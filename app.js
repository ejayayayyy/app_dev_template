const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

const routes = require('./routes/router');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);
app.use(express.static('public'))

app.listen(port, () => {
    console.log("Server running on http://localhost:" + port);
    
})
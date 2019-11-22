const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 7777;

app.listen(port, () => { console.log(`Listening to port ${port}!! lets go David!!`) })
app.use(express.static(__dirname + '/client/dist/'))

app.use(bodyParser.json())

app.use('/', () => { console.log('hello world') })

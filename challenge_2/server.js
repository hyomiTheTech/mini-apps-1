const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 7777;
const controller = require('./controller')

app.use(bodyParser.json())

app.use('/', express.static('client'));

app.use(bodyParser.urlencoded({ extended: true }))
app.listen(port, console.log(`Listening to the port ${port} lets go david!`))

// app.get('/', controller.getAll)
app.post('/a', controller.postIt)
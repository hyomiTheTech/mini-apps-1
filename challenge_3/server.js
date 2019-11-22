const express = require('express');
const app = express();
const port = 7777;
const bodyParser = require('body-parser')
const controller = require('./controller')

app.listen(port, () => console.log(`Listening to on the port ${port} Lets get it David!`))

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + "/client/dist/"));

// app.get('/', (req, res) => res.send('Hello World!'))

//=============================router==============================

app.get('/', controller.sendAll)
app.post('/signup', controller.postLoginInfo)
app.post('/shipping/:id', controller.postShipInfo)
app.post('/card/:id', controller.postCardInfo)
const fs = require('fs')
const helper = require('./helper.js')

module.exports = {
    getAll: ((req, res) => {
        res.status(200).send("hello")
    }),
    postIt: ((req, res) => {
        var data = req.body.input
        var parsed = JSON.parse(data)
        var text = helper.makeCsv(parsed)
        fs.writeFile('csv.csv', text, (err) => {
            if (err) throw err;
        })
        res.status(200).send("post complete!!")
    })
}


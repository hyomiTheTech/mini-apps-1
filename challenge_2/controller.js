const fs = require('fs')

module.exports = {
    getAll: ((req, res) => {
        res.status(200).send("hello")
    }),
    postIt: ((req, res) => {
        var data = req.body.input
        console.log(req.body.input)
        fs.writeFile('csv.csv', data, (err) => {
            if (err) throw err;
        })
        res.status(200).send("post complete!!")
    })
}


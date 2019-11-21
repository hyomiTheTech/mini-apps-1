const dbHelper = require('./database/dbHelper')

module.exports = controller = {
    sendAll: (req, res) => {
        dbHelper.getAll((err, info) => {
            if (err) {
                res.status(404).send(`Cannot get info from database!`)
            } else {
                res.status(200).send(info)
            }
        })
    },
    postLoginInfo: (req, res) => {
        console.log(req.body)
        dbHelper.insertLoginInfo(req, (err, info) => {
            if (err) {
                res.status(404).send(`Cannot post info into database!`)
            } else {
                res.status(200).send(`Login Successful!`)
            }
        })
    },
    postShipInfo: (req, res) => {
        dbHelper.insertShipInfo(req, (err, info) => {
            if (err) {
                res.status(404).send(`Cannot post info into database!`)
            } else {
                res.status(200).send(`Shipping on the Way!`)
            }
        })
    },
    postCardInfo: (req, res) => {
        dbHelper.insertCardInfo(req, (err, info) => {
            if (err) {
                res.status(404).send(`Cannot post info into database! ${err}`)
            } else {
                res.status(200).send(`Card info is here!`)
            }
        })
    }
};
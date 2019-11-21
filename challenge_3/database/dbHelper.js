const db = require('./index')

module.exports = dbHelper = {
    getAll: (callback) => {
        db.query(`select * from userinfos`, (err, allUsers) => {
            if (err) {
                callback(err)
            } else {
                callback(null, allUsers)
            }
        })
    },
    insertLoginInfo: (req, callback) => {
        db.query(`INSERT INTO userinfos(user, email, user_password) VALUES ("${req.body.user}", "${req.body.email}", "${req.body.user_password}");`, (err, info) => {
            if (err) {
                callback(err)
            } else {
                callback(null, info)
            }
        })
    },
    insertShipInfo: (req, callback) => {
        db.query(`UPDATE userinfos SET line_1="${req.body.line_1}", line_2="${req.body.line_2}", city="${req.body.city}", user_state="${req.body.user_state}", zip="${req.body.zip}", phone="${req.body.phone}" WHERE user = "${req.params.id}";`, (err, info) => {
            if (err) {
                callback(err)
            } else {
                callback(null, info)
            }
        })
    },
    insertCardInfo: (req, callback) => {
        console.log(req.body)
        console.log(req.params.id)
        db.query(`UPDATE userinfos SET credit_card="${req.body.credit_card}", expire_date="${req.body.expire_date}", cvv="${req.body.cvv}", billing_zip="${req.body.billing_zip}" WHERE user = "${req.params.id}";`, (err, info) => {
            if (err) {
                callback(err)
            } else {
                callback(null, info)
            }
        })
    },

};
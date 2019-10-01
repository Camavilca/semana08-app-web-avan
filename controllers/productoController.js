const model = require('../models/pro_model');

module.exports = {
    show: (req, res) => {
        model.find({}, (err, items) => {
            if (!err) {
                res.json(items);
            } else {
                return console.log(err);
            }
        })
    },
    create: (req, res) => {

    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    }
}
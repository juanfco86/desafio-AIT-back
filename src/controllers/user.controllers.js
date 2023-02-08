const User = require('../models/user.model')

const checkUser = (req, res) => {
    const params = req.params

    User.findOne({ email: params.email }, (error, data) => {
        if (error || !data) {
            return res.status(400).json({
                status: "error",
                msg: "Error find User"
            })
        }
        if (!!data.length) {
            console.log('The User exists in DB');
            return res.status(200).json({
                status: "success",
                data: data,
                msg: "Nice, have user in data"
            })
        } else {
            console.log('The User dont exists in DB');
            return res.status(200).json({
                status: "success",
                data: false,
                msg: "The Name User dont exists in DB"
            })
        }
    })
}

const createUser = (req, res) => {
    try {
        let body = req.body
        const newUser = new User(body)

        newUser.save((error, data) => {
            if (error || !data) {
                return res.status(400).json({
                    status: "error",
                    msg: "Error save POST"
                })
            }
            return res.status(200).json({
                status: "success",
                data: data,
                msg: "The POST save correctly"
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: "error",
            msg: "Error save POST"
        })
    }
}

module.exports = {
    checkUser,
    createUser
}
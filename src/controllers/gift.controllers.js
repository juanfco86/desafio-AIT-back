const giftsModel = require("../models/gifts.model");

const myGiftList = (req, res) => {
    const myGifts = giftsModel.find({})
    myGifts.exec((error, data) => {
        if (error || !data) {
            return res.status(400).json({
                status: "error",
                msg: "Error or dont find gift"
            })
        }
        return res.status(200).json({
            status: "success",
            info: data,
            msg: "Have gifts in .myGifts"
        })
    })
}

const newGift = (req, res) => {
    try {
        let body = req.body
        const createGift = new giftsModel(body)

        createGift.save((error, data) => {
            if (error || !data) {
                return res.status(400).json({
                    status: "error",
                    msg: "Error POST new gift"
                })
            }
            return res.status(200).json({
                status: "success",
                info: data,
                msg: "The POST gift save correctly"
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: "error",
            msg: "Error save POST new gift"
        })
    }
}

module.exports = {
    newGift,
    myGiftList
}
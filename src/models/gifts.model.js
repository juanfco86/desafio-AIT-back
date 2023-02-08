const { Schema, model } = require('mongoose')

const GiftSchema = Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        default: ''
    },
    genre: {
        type: String,
        default: ''
    },
    userEmail: {
        type: String,
        required: true
    }
    // url: {
    //     type: String,
    //     default: ""
    // },
    // username: {
    //     type: String,
    //     default: ""
    // },
    // title: {
    //     type: String,
    //     default: ""
    // }
})

module.exports = model("Gift", GiftSchema, "gifts")
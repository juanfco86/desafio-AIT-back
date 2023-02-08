const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        default: ""
    },
    last_name: {
        type: String,
        default: ""
    },
    profilePicture: {
        type: String,
        default: ""
    },
    gifs: {
        type: Array,
        default: []
    }
})

module.exports = model("User", UserSchema, "users")
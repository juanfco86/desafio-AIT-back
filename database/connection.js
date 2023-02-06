const mongoose = require("mongoose");

const connection = async() => {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to DB');
    } catch (error) {
        throw new Error('Failed Connect to DB')
    }
}

module.exports = connection
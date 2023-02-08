const cors = require('cors')
const express = require('express');
const userRouter = require('./routes/users.routes')
const giftRouter = require('./routes/gifts.routes')

// CREAR SERVIDOR NODE
const app = express();

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/user", userRouter)
app.use("/api/gift", giftRouter)

module.exports = app

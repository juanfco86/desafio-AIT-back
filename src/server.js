const cors = require('cors')
const express = require('express');

// CREAR SERVIDOR NODE
const app = express();

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use("/api/user", userRouter)

module.exports = app

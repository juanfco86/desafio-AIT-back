const connection = require('./database/connection');
const dotenv = require('dotenv');
const app = require('./src/server')

dotenv.config();
connection();

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Listening in PORT " + port);
})
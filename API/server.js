const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
const dbConfig = require('./config/config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("DB Connected");
}).catch(err => {
    console.log("DB not Connected, reason: ", err);
    process.exit();
});
app.get('/', (req, res) => {
    res.json({ "message": "Welcome" })
});

require('./app/routes/router')(app);

app.listen(8080, () => {
    console.log("Server is listening in port 8080");
});
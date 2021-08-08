const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const { dirname } = require('path');

const connectDB = require('./server/database/connection');

const app = express();
dotenv.config({
  path: 'config.env',
});
const port = process.env.PORT || 8080;

//log requests

app.use(morgan('tiny'));

//mongoDB connection

connectDB();


//parse requests

app.use(bodyparser.urlencoded({ extended: true }));

//set view engine

app.set('view engine', 'ejs');

//load assets

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

//load routers

app.use('/', require('./server/routes/router'));

//Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

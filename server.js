require('dotenv').config();  //file konfigurasi

const express = require('express');
const app = express();
const path = require('path')
const ejsMate = require('ejs-mate')
const mainRoute = require('./routes/mainRoute')
const port = process.env.PORT;

// middleware
const morgan = require('morgan');

//using view engine
app.engine('ejs' , ejsMate);
app.set('view engine' , 'ejs')
app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname , 'public'))); //static file

//route
app.use('/' , mainRoute)
app.use('/about' , mainRoute)

//start server
app.listen(port , () => {
    console.log(`Your server running on http://localhost:${port}`)
});
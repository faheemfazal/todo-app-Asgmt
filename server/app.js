


const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const User = require('./models/userModel')
const bodyParser = require('body-parser')


const app = express()
connectDB()

const userRoutes = require('./routes/userRoutes')






app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json());



app.use('/',userRoutes);

app.listen(4000,(err)=>{
  console.log(err,'kitty');
})


module.exports=app
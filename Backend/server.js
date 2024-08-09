const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const {connectDB} = require('./connection')
connectDB(); 

app.listen(process.env.PORT, () => {
    console.log(`server running at http://localhost:${process.env.PORT}`);
})

const authRoutes = require('./Routes/auth.js');
app.use('/api/auth', authRoutes);

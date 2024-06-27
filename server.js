const express = require('express')
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectdb = require('./config/db')

dotenv.config({path: './config/config.env'})
connectdb();
const transactions = require('./routes/Transactions')
const app = express();
app.use(express.json())

app.use('/api/v1/transactions', transactions)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

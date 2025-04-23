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
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions)

const path = require('path');

// Serve frontend (only in production)


const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'Client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));
  });
}

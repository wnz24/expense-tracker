const express = require('express');
const router = express.Router();
const {getTransactions,addTransactions,deleteTransactions} = require('../controllers/transactionCaontroller')


//gettransactions & deletetransaction
 router
 .route('/')
 .get(getTransactions)
 .post(addTransactions);

//deletetransactions
 router
 .route('/:id')
 .delete(deleteTransactions);




module.exports= router
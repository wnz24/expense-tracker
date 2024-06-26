
// @desc  Get transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = (req,res,next)=>{
    res.send("Get Transactions");

}

// @desc  Add transactions
// @route POST /api/v1/transactions
// @access Public
exports.addTransactions = (req,res,next)=>{
    res.send("Add Transactions");

}

// @desc  Delete transactions
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransactions = (req,res,next)=>{
    res.send("Delete Transactions");

}
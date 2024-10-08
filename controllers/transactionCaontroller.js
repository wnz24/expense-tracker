const Transaction = require('../models/Transactions')
// @desc  Get transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async(req,res,next)=>{
   try {
    const transaction = await Transaction.find();
    return res.status(200).json({
        success: true,
        count: transaction.length,
        data:transaction
    })
   } catch (error) {
     return res.send(500).json({
        success: false,
        error: "Server Error"
     })
   }

}

// @desc  Add transactions
// @route POST /api/v1/transactions
// @access Public
exports.addTransactions = async(req,res,next)=>{
    const{text,amount} = req.body
    try {
      const transaction = await Transaction.create(req.body);
     return res.status(201).json({
        success: true,
        data: transaction
     })  
    } catch (error) {
       if(error.name === 'ValidationError'){
        const messages = Object.values(error.errors).map(val=> val.message)
        return res.status(400).json({
            success:false,
            error:messages
        })
       
       }else{
        return res.status(500).json({
            success: false,
            error: "Server Error"
         })
       }
    }
    

}

// @desc  Delete transactions
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: "No transaction found"
            });
        }

        await Transaction.deleteOne({ _id: req.params.id });

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(400).json({
                success: false,
                error: "Invalid transaction ID"
            });
        }
        console.error(error);
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
};
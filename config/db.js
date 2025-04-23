const mongoose = require('mongoose')


const connectdb = async ()=>{
    try {
         const conn = await mongoose.connect(`mongodb+srv://wajeeha912:${process.env.MONGO_PASSWORD}@expensetracker.bmojmra.mongodb.net/expensetracker`)
         console.log(`MongoDB Connected:${conn.connection.host}`.cyan.underline.bold)
    } catch (error) {
        console.log(`Error: ${error.message}`.red)
        process.exit(1)
    }
}

module.exports = connectdb
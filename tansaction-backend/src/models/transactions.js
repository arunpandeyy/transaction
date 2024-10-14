const mongoose =  require('mongoose');

const TransactionSchema = new mongoose.Schema({
    ammount:Number,
    discription:String,
    tarnsactionType:{
        type:String,
        enum:['debit','credit']
    },
    run_balance: Number
},{timestamps:true})

module.exports = mongoose.model('Transactions',TransactionSchema)
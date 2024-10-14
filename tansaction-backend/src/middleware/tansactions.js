const transactions = require('../models/transactions')

const getAllTransactions = async (req, res) => {
    try {
        const allTransactions = await transactions.find().sort({ createdAt: -1 })
        res.status(200).json({ success: true, message: 'Data fetched', data: allTransactions })
    } catch (err) {
        console.log(err, ":- err");

        res.status(400).json({ success: false, message: "some error trigered" })
    }
}

const createTransactions = async (req, res) => {
    try {

        const { ammount, discription, tarnsactionType } = req.body

        const allTransactions = await transactions.find().sort({ _id: -1 })

        const data = {
            ammount,
            discription,
            tarnsactionType
        }
        let runningBalance

        if (allTransactions.length === 0) {
            data.run_balance = ammount

            if (tarnsactionType == 'debit')
                return res.status(400).json({ success: true, message: 'You have insuficient Balance', data: allTransactions })

            transactions.create(data)
            return res.status(200).json({ success: true, message: 'Data Stored', data: allTransactions })
        }

        if (tarnsactionType == 'debit') {
            if (allTransactions[0].run_balance < ammount)
                return res.status(400).json({ success: true, message: 'You have insuficient Balance', data: allTransactions })

            runningBalance = allTransactions[0].run_balance - ammount
        }

        if (tarnsactionType == 'credit') {
            console.log(typeof allTransactions[0].run_balance);
            
            runningBalance = Number(allTransactions[0].run_balance) + Number(ammount)
        }
        data.run_balance = runningBalance
        console.log(data);

        transactions.create(data)
        return res.status(200).json({ success: true, message: 'Data Stored', data: allTransactions })
    } catch (err) {
        res.status(400).json({ success: false, message: "some error trigered" })
    }
}

module.exports = { getAllTransactions, createTransactions }
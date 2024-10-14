const express = require('express');
const router = express.Router();
const transactions =  require('../middleware/tansactions');

router.get('/transactions',transactions.getAllTransactions)
router.post('/createTransaction',transactions.createTransactions)

module.exports = router
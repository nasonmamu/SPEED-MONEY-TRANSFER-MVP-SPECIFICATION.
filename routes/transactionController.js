const Transaction = require('../models/transaction');

// Controller function to create a new transaction
async function createTransaction(req, res) {
   const{sender,receiver,amount}=req.body
   try{
    const newTransaction = new Transaction({
        sender: req.user._id, // Set sender to the currently logged-in user
        receiver,
        amount,
        receipt:req.file ? req.file.filename : null,
    });
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
   }catch(err){
    res.status(400).json({error:'Failed to create transaction'})
   }
}

// Controller function to get all transactions for the logged-in user
async function getTransactions(req, res) {
    // ... (implement logic to fetch transactions for the user)
}

// Controller function to get a specific transaction by ID
async function getTransactionById(req, res) {
    // ... (implement logic to fetch the transaction)
}

module.exports = {
  createTransaction,
  getTransactions,
  getTransactionById
};

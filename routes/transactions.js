const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const auth = require('../middleware/auth'); // Add authentication middleware
const upload = require('../middleware/upload');


// Create a new transaction (protected by auth middleware)
router.post('/',auth, upload.single('receipt'), transactionController.createTransaction);

// Get all transactions for the logged-in user (protected)
router.get('/', auth, transactionController.getTransactions);

// Get a specific transaction by ID (protected)
router.get('/:id', auth, transactionController.getTransactionById);

module.exports = router;
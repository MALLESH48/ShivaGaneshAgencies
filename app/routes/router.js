/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
router.use('/account', require('./api/accountRoutes'));
router.use('/salesorder', require('./api/salesOrderRoutes'));
router.use('/items', require('./api/itemsRoutes'));
router.use('/ledger', require('./api/ledgerRoutes'));
module.exports = router;
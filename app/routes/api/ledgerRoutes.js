/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const LedgerController = require('../../controller/ledgerController');
const ledgerController = new LedgerController();

/**
 * Driver Entity routes
 */
router.get('/count', function (req, res) {
    ledgerController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    ledgerController.exists(req, res);
});

router.get('/:id', function (req, res) {
    ledgerController.findById(req, res)
});

router.get('/', function (req, res) {
    ledgerController.findAll(res);
});

router.put('/:id', function (req, res) {
    ledgerController.update(req, res)
});

router.post('/create', function (req, res) {
    ledgerController.create(req, res);
});

router.delete('/:id', function (req, res) {
    ledgerController.deleteById(req, res)
});

module.exports = router;
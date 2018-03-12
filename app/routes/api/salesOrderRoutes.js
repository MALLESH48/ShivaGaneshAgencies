/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const SalesOrderController = require('../../controller/salesOrderController');
const salesOrderController = new SalesOrderController();

/**
 * Driver Entity routes
 */
router.get('/count', function (req, res) {
    salesOrderController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    salesOrderController.exists(req, res);
});

router.get('/:id', function (req, res) {
    salesOrderController.findById(req, res)
});

router.get('/', function (req, res) {
    salesOrderController.findAll(res);
});

router.put('/:id', function (req, res) {
    salesOrderController.update(req, res)
});

router.post('/create', function (req, res) {
    salesOrderController.create(req, res);
});

router.delete('/:id', function (req, res) {
    salesOrderController.deleteById(req, res)
});

module.exports = router;
/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const ItemsController = require('../../controller/itemsController');
const itemsController = new ItemsController();

/**
 * Driver Entity routes
 */
router.get('/count', function (req, res) {
    itemsController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    itemsController.exists(req, res);
});

router.get('/:id', function (req, res) {
    itemsController.findById(req, res)
});

router.get('/', function (req, res) {
    itemsController.findAll(res);
});

router.put('/:id', function (req, res) {
    itemsController.update(req, res)
});

router.post('/create', function (req, res) {
    itemsController.create(req, res);
});

router.delete('/:id', function (req, res) {
    itemsController.deleteById(req, res)
});

module.exports = router;
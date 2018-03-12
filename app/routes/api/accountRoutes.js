/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const AccountController = require('../../controller/accountController');
const accountController = new AccountController();

/**
 * Car Entity routes
 */
router.get('/count', function (req, res) {
    accountController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    accountController.exists(req, res);
});

router.get('/:id', function (req, res) {
    accountController.findById(req, res);
});
router.get('/accountType/:id' , function(req,res){
	accountController.findByAccountType(req,res);
});
router.get('/', function (req, res) {
    accountController.findAll(res);
});

router.put('/:id', function (req, res) {
    accountController.update(req, res);
});

router.post('/create', function (req, res) {
    accountController.create(req, res);
});

router.delete('/:id', function (req, res) {
    accountController.deleteById(req, res);
});

module.exports = router;
/* Load Car Data Access Object */
const LedgerDao = require('../dao/LedgerDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const Ledger = require('../model/ledger');

/**
 * Car Controller
 */
class LedgerController {

    constructor() {
        this.LedgerDao = new LedgerDao();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;

        this.LedgerDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.LedgerDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.LedgerDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let ledger = new Ledger();
		ledger.ledgerId = req.body.ledgerId;
        ledger.accountId = req.body.accountId;
        ledger.orderId = req.body.orderId;
        ledger.date = req.body.date;
		ledger.totalamount = req.body.totalamount;
		ledger.amountpaid = req.body.amountpaid;
        ledger.paidBy = req.body.paidBy;

        return this.LedgerDao.update(ledger)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let ledger = new Ledger();
		ledger.ledgerId = req.body.ledgerId;
        ledger.accountId = req.body.accountId;
        ledger.orderId = req.body.orderId;
        ledger.date = req.body.date;
		ledger.totalamount = req.body.totalamount;
		ledger.amountpaid = req.body.amountpaid;
        ledger.paidBy = req.body.paidBy;

        return this.LedgerDao.create(ledger)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));


    };
	
	deleteById(req, res) {
        let itemId = req.params.id;
        this.LedgerDao.deleteById(itemId)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

}

module.exports = LedgerController;
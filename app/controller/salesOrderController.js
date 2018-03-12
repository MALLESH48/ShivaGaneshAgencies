/* Load Driver Data Access Object */
const SalesOrderDao = require('../dao/SalesOrderDao');

/* Load Controller Common function */
const controllerCommon = require('./common/controllerCommon');

/* Load Driver entity */
const SalesOrder = require('../model/SalesOrder');

/**
 * Driver Controller
 */
class SalesOrderController {

    constructor() {
        this.salesOrderDao = new SalesOrderDao();
        this.common = new controllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;
        this.salesOrderDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.salesOrderDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {
        this.salesOrderDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let salesorder = new SalesOrder();
        salesorder.orderId = req.body.orderId;
		salesorder.accountId = req.body.accountId;
		salesorder.date = req.body.date;
		salesorder.rate = req.body.rate;
		salesorder.bags = req.body.bags;
		salesorder.value = req.body.value;
		salesorder.commisionpercent = req.body.commisionpercent;
		salesorder.commisionValue = req.body.commisionValue;
		salesorder.noofbagsUsed = req.body.noofbagsUsed;
		salesorder.costofeachbag = req.body.costofeachbag;
		salesorder.bagsCost = req.body.bagsCost;
		salesorder.personResponisible = req.body.personResponisible;
		salesorder.kooli = req.body.kooli;
		salesorder.place = req.body.place;
		salesorder.totalcost = req.body.totalCost;
		

        return this.salesOrderDao.update(salesorder)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let salesorder = new SalesOrder();
        if (req.body.orderId) {
            salesorder.orderId = req.body.orderId;
        }
        salesorder.accountId = req.body.accountId;
		salesorder.date = req.body.date;
		salesorder.rate = req.body.rate;
		salesorder.bags = req.body.bags;
		salesorder.value = req.body.value;
		salesorder.commisionpercent = req.body.commisionpercent;
		salesorder.commisionValue = req.body.commisionValue;
		salesorder.noofbagsUsed = req.body.noofbagsUsed;
		salesorder.personResponisible = req.body.personResponisible;
		salesorder.kooli = req.body.kooli;
		salesorder.place = req.body.place;
		salesorder.costofeachbag = req.body.costofeachbag;
		salesorder.bagsCost = req.body.bagsCost;
		salesorder.totalcost = req.body.totalCost;

        if (req.body.orderId) {
            return this.salesOrderDao.createWithId(salesorder)
                .then(this.common.findSuccess(res))
                .catch(this.common.serverError(res));
        }
        else {
            return this.salesOrderDao.create(salesorder)
                .then(this.common.findSuccess(res))
                .catch(this.common.serverError(res));
        }
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params req, res
     * returns database deletion status
     */
    deleteById(req, res) {
        let id = req.params.orderId;

        this.salesOrderDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params req, res
     * @return
     */
    exists(req, res) {
        let id = req.params.orderId;

        this.salesOrderDao.exists(id)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = SalesOrderController;
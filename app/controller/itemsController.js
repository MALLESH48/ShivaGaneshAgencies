/* Load Car Data Access Object */
const ItemsDao = require('../dao/ItemsDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const Item = require('../model/Item');

/**
 * Car Controller
 */
class AccountController {

    constructor() {
        this.ItemsDao = new ItemsDao();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;

        this.ItemsDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.ItemsDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.ItemsDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let item = new Item();
		item.date = req.body.date;
        item.sellerAccntId = req.body.sellerAccntId;
        item.orderId = req.body.orderId;
        item.noofbags = req.body.noofbags;
		item.rate = req.body.rate;
		item.amount = req.body.amount;
   

        return this.ItemsDao.update(item)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let item = new Item();
		item.date = req.body.date;
        item.sellerAccntId = req.body.sellerAccntId;
        item.orderId = req.body.orderId;
        item.noofbags = req.body.noofbags;
		item.rate = req.body.rate;
		item.amount = req.body.amount;

        return this.ItemsDao.create(item)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));


    };
	
	deleteById(req, res) {
        let itemId = req.params.id;
        this.ItemsDao.deleteById(itemId)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

}

module.exports = AccountController;
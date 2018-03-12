/* Load Car Data Access Object */
const AccountDao = require('../dao/AccountDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const Account = require('../model/account');

/**
 * Car Controller
 */
class AccountController {

    constructor() {
        this.AccountDao = new AccountDao();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;

        this.AccountDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
	
	
	findByAccountType(req,res){
		let accountType = req.params.id;
		this.AccountDao.findByAccountType(accountType)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
		
	};

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.AccountDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
	

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.AccountDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let account = new Account();
        account.id = req.body.id;
        account.accountName = req.body.accountName;
        account.accountType = req.body.accountType;
   

        return this.AccountDao.update(account)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let account = new Account();
        account.accountName = req.body.accountName;
        account.accountType = req.body.accountType;

        return this.AccountDao.create(account)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        

    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params req, res
     * returns database deletion status
     */
    deleteById(req, res) {
        let id = req.params.id;

        this.AccountDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params req, res
     * @return
     */
    exists(req, res) {
        let id = req.params.id;

        this.AccountDao.exists(id)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = AccountController;
/* Load Car entity */
const Account = require('../model/Account');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class CarDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT id, accountName, accountType FROM Account WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Account(row.id, row.accountName, row.accountType));
    };

	findByAccountType(accountTYpe) {
		let sqlRequest = "SELECT id, accountName, accountType FROM Account WHERE accountType=$accountType";
        let sqlParams = {$accountType : accountTYpe};
		return this.common.findAllById(sqlRequest,sqlParams).then(rows => {
            let accounts = [];
            for (const row of rows) {
                accounts.push(new Account(row.id, row.accountName, row.accountType));
            }
            return accounts;
        });
		
    }		
	
    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM Account";
        return this.common.findAll(sqlRequest).then(rows => {
            let accounts = [];
            for (const row of rows) {
                accounts.push(new Account(row.id, row.accountName, row.accountType));
            }
            return accounts;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM Account";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Car
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Account) {
        let sqlRequest = "UPDATE Account SET " +
            "accountName=$accountName, " +
            "accountType=$accountType " +
            "WHERE id=$id";

        let sqlParams = {
            $accountName: Account.accountName,
            $accountType: Account.accountType,
            $id: Account.id
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Car
     * returns database insertion status
     */
    create(Account) {
        let sqlRequest = "INSERT into Account (accountName, accountType) " +
            "VALUES ($accountName, $accountType)";
        let sqlParams = {
            $accountName: Account.accountName,
            $accountType: Account.accountType,
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM Account WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM Account WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = CarDao;
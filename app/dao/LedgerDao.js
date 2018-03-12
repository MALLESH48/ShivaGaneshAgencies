/* Load Car entity */
const Ledger = require('../model/ledger');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class LedgerDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT * FROM Ledger WHERE accountId=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(rows => {
			let items = [];
			for(const row of rows){
            items.push(new Ledger(row.ledgerId,row.accountId,row.orderId, row.date, row.totalamount,row.amountpaid,row.paidBy));
			}
			return items;
		})
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM Ledger";
        return this.common.findAll(sqlRequest).then(rows => {
            let items = [];
            for (const row of rows) {
                items.push(new Ledger(row.ledgerId,row.accountId,row.orderId, row.date, row.totalamount,row.amountpaid,row.paidBy));
            }
            return items;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM Ledger";
        return this.common.findOne(sqlRequest);
    };

  

    /**
     * Creates the given entity in the database
     * @params Car
     * returns database insertion status
     */
    create(Ledger) {
        let sqlRequest = "INSERT into Ledger (accountId,orderId, date,totalamount,amountpaid,paidBy) " +
            "VALUES ( $accountId,$orderId,$date,$totalamount,$amountpaid,$paidBy)";
        let sqlParams = {
            $accountId: Ledger.accountId,
            $orderId: Ledger.orderId,
            $date: Ledger.date,
			$totalamount: Ledger.totalamount,
			$amountpaid:Ledger.amountpaid,
			$paidBy:Ledger.paidBy
        };
        return this.common.run(sqlRequest, sqlParams)
    };

    

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(ledgerId) {
        let sqlRequest = "DELETE FROM Ledger WHERE ledgerId=$id";
        let sqlParams = {$id: ledgerId};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM items WHERE orderId=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = LedgerDao;
/* Load Driver entity */
const SalesOrder = require('../model/SalesOrder');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Driver Data Access Object
 */
class SalesOrderDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT * FROM salesorder WHERE personResponisible=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(rows =>{
			let salesorders = [];
			for (const row of rows) {
            salesorders.push(new SalesOrder(row.orderId, row.accountId, row.date, row.rate, row.bags,row.value,row.commisionpercent,row.commisionValue,row.noofbagsUsed,row.costofeachbag,row.bagsCost,row.personResponisible,row.kooli,row.place,row.totalCost));
			}
			return salesorders;
		});
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM salesorder";
        return this.common.findAll(sqlRequest).then(rows => {
            let salesorders = [];
            for (const row of rows) {
                salesorders.push(new SalesOrder(row.orderId, row.accountId, row.date, row.rate, row.bags,row.value,row.commisionpercent,row.commisionValue,row.noofbagsUsed,row.costofeachbag,row.bagsCost,row.personResponisible,row.kooli,row.place,row.totalCost));
            }
            return salesorders;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM salesorder";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params salesorder
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(salesorder) {
        let sqlRequest = "UPDATE salesorder SET " +
            "accountId=$accountId, " +
            "date=$date, " +
            "bags=$bags, " +
			"value=$value," +
			"commisionpercent=$commisionpercent,"+
			"commisionValue=$commisionValue,"+
			"noofbagsUsed=$noofbagsUsed,"+
			"personResponisible=$personResponisible," +
			"kooli=$kooli,"+
			"place=$place,"+
			"totalcost=$totalcost,"+
			"costofeachbag=$costofeachbag,"+
			"bagsCost=$bagsCost"+
            "WHERE orderId=$id";

        let sqlParams = {
            $rate: salesorder.rate,
            $date: salesorder.date,
            $accountId: salesorder.accountId,
            $id: salesorder.orderId,
			$bags : salesorder.bags,
			$value :salesorder.value,
			$commisionpercent : salesorder.commisionpercent,
			$commisionValue : salesorder.commisionValue, 
			$noofbagsUsed : salesorder.noofbagsUsed,
			$personResponisible:salesorder.personResponisible,
			$kooli :salesorder.kooli,
			$place : salesorder.place,
			$totalcost :salesorder.totalcost,
			$costofeachbag :salesorder.costofeachbag,
		    $bagsCost :salesorder.bagsCost,
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Driver
     * returns database insertion status
     */
    create(salesorder) {
        let sqlRequest = "INSERT into salesorder (accountId, date, rate, bags, value,place,commisionpercent,commisionValue,noofbagsUsed,costofeachbag,bagsCost,personResponisible,kooli,totalCost) " +
            "VALUES ($accountId, $date, $rate ,$bags,$value,$place,$commisionpercent,$commisionValue,$noofbagsUsed,$costofeachbag,$bagsCost,$personResponisible,$kooli,$totalcost)";
        let sqlParams = {
            $rate: salesorder.rate,
            $date: salesorder.date,
            $accountId: salesorder.accountId,
            $id: salesorder.orderId,
			$bags : salesorder.bags,
			$value :salesorder.value,
			$commisionpercent : salesorder.commisionpercent,
			$commisionValue : salesorder.commisionValue, 
			$noofbagsUsed : salesorder.noofbagsUsed,
			$personResponisible:salesorder.personResponisible,
			$kooli :salesorder.kooli,
			$place : salesorder.place,
			$totalcost :salesorder.totalcost,
			$costofeachbag :salesorder.costofeachbag,
		    $bagsCost : salesorder.bagsCost,
        };
        return this.common.run(sqlRequest, sqlParams).then(function(lastId)
		{
			return lastId;
		})
    };

  

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM salesorder WHERE orderId=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM salesorder WHERE orderId=$id";
        let sqlParams = {$id: id};
        return this.common.existsOne(sqlRequest, sqlParams);
    };
}

module.exports = SalesOrderDao;
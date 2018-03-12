/* Load Car entity */
const Item = require('../model/Item');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class ItemsDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT * FROM items WHERE orderId=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(rows => {
			let items = [];
			for(const row of rows){
            items.push(new Item(row.itemId,row.date,row.sellerAccntId, row.orderId, row.noofbags,row.rate,row.amount));
			}
			return items;
		})
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM items";
        return this.common.findAll(sqlRequest).then(rows => {
            let items = [];
            for (const row of rows) {
                items.push(new Item(row.itemId,row.date,row.sellerAccntId, row.orderId, row.noofbags,row.rate,row.amount));
            }
            return items;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM items";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Car
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Item) {
        let sqlRequest = "UPDATE items SET " +
            "noofbags=$noofbags, " +
            "rate=$rate," +
			"amount=$amount"+
            "WHERE orderId=$orderId and sellerAccntId=$sellerAccntId";

        let sqlParams = {
            $sellerAccntId: Item.sellerAccntId,
            $orderId: Item.orderId,
            $noofbags: Item.noofbags,
			$rate: Item.rate,
			$amount:Item.amount
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Car
     * returns database insertion status
     */
    create(Item) {
        let sqlRequest = "INSERT into items (date,sellerAccntId, orderId,noofbags,rate,amount) " +
            "VALUES ($date,$sellerAccntId, $orderId,$noofbags,$rate,$amount)";
        let sqlParams = {
            $sellerAccntId: Item.sellerAccntId,
            $orderId: Item.orderId,
            $noofbags: Item.noofbags,
			$rate: Item.rate,
			$amount:Item.amount,
			$date:Item.date
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(itemId) {
        let sqlRequest = "DELETE FROM items WHERE itemId=$id";
        let sqlParams = {$id: itemId};
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

module.exports = ItemsDao;
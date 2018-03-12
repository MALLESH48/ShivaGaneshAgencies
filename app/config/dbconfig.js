/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./sqlite.db');

/* Init car and driver tables if they don't exist */
let init = function () {
    db.run("CREATE TABLE if not exists Account (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        "accountName TEXT," +
        "accountType INT" +
        ")");

    db.run("CREATE TABLE if not exists salesorder (" +
        "orderId INTEGER PRIMARY KEY AUTOINCREMENT," +
		"accountId INT,"+
		"date DATE,"+
        "rate INT," +
        "bags INT," +
        "value INT," +
		"place TEXT," +
		"commisionpercent SMALLINT," +
		"commisionValue INT," +
		"noofbagsUsed  INT," +
		"costofeachbag  INT," +
		"bagsCost INT," +
		"personResponisible INT," +
		"kooli  INT," +
		"totalCost  INT" +
        ")");
	db.run("CREATE TABLE if not exists items (" +
	       "itemId INTEGER PRIMARY KEY AUTOINCREMENT," +
		   "date DATE," +
	       "sellerAccntId INT," +
		   "orderId INT," +
		   "noofbags INT," +
		   "rate INT," +
		   "amount INT" +
		   ")");
		   
	db.run("CREATE TABLE if not exists Ledger (" +
             "ledgerId INTEGER PRIMARY KEY AUTOINCREMENT,"	+
			 "accountId INT,"+
			 "orderId INT,"+
			 "date DATE," +
			 "totalamount INT," +
			 "amountpaid INT," +
			 "paidBy  INT" +
			 ")")	   
};

module.exports = {
    init: init,
    db: db
};


/**
 * Driver Entity (ES6 Class)
 */

class SalesOrder {
    constructor(orderId,accountId,date,rate,bags,value,commisionpercent,commisionValue,noofbagsUsed,costofeachbag,bagsCost,personResponisible,kooli,place,totalcost) {
        this.orderId = orderId;
		this.accountId = accountId;
		this.date = date;
		this.rate =rate;
		this.bags = bags;
		this.value = value;
		this.commisionpercent = commisionpercent;
		this.commisionValue =commisionValue;
		this.noofbagsUsed =noofbagsUsed;
		this.costofeachbag = costofeachbag;
		this.bagsCost =bagsCost
		this.personResponisible = personResponisible;
		this.kooli = kooli;
		this.place = place;
		this.totalcost =totalcost;
    }
}

module.exports = SalesOrder;
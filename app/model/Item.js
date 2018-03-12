class Item {
    constructor(itemId,date,sellerAccntId, orderId, noofbags,rate,amount) {
		this.itemId = itemId;
		this.date = date;
        this.sellerAccntId = sellerAccntId;
        this.orderId = orderId;
        this.noofbags = noofbags;
		this.rate = rate;
		this.amount = amount;
    }
}

module.exports = Item;
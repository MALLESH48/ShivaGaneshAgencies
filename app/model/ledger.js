class Ledger {
    constructor(ledgerId,accountId,orderId,date,totalamount, amountpaid, paidBy) {
		this.ledgerId = ledgerId;
		this.accountId = accountId;
		this.orderId = orderId;
		this.date = date;
        this.totalamount = totalamount;
        this.amountpaid = amountpaid;
        this.paidBy = paidBy;
    }
}

module.exports = Ledger;
class Calender{
    constructor(order){
        this.reservedDate=order.date
        this.freeDate=order.date + "2 hour" 
    }
}

module.exports=Calender
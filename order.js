class Order{
    constructor(member,PT,date){
        this.member=member
        this.PT=PT
        this.price=PT.sessionFee      
        this.date=date
    }
}

module.exports=Order
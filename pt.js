const Calender=require('./calender')
const Order=require('./order')

class PT{
    constructor(id=uuid.v4(),firstName,lastName,email,sports,sessionFee,location,calenders=[],orders=[]){
        this.uuid=id
        this.firstName=firstName|| "Myname"
       this.lastName= lastName || "Mylastname"
       this.email=email ||"xy@xmail.com"
       this.sports= sports || "CrossFit"
       this.sessionFee= sessionFee || "100"
       this.location= location || "esenyurt"     
       this.calenders=[]  
       this.orders=[] 
    }
    setPrice(sessionFee){
        this.sessionFee=sessionFee
    }

    setLocation(Location){
        this.location=Location
    }
    // static create({firstName,lastName,email,sports,sessionFee,location}){
    //     const newPT = new Member(firstName,lastName,email,sports,sessionFee,location,calenders,orders)
    //     newPT.orders=orders
    //     newPT.calenders=calenders
    //     return newPT
    // }
    static create(id,firstName,lastName,email,sports,sessionFee,location,calenders,orders){
        return new PT(id,firstName,lastName,email,sports,sessionFee,location,calenders,orders)
    }

}

module.exports=PT
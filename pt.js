class PT{
    constructor(firstName,lastName,email,sports,sessionFee,location){
       this.firstName=firstName|| "Myname"
       this.lastName= lastName || "Mylastname"
       this.email=email ||"xy@xmail.com"
       this.sports= sports || "CrossFit"
       this.sessionFee= sessionFee || "100"
       this.location= location || "esenyurt"        
    }
    setPrice(sessionFee){
        this.sessionFee=sessionFee
    }
    
}

module.exports=PT
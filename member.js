class Member{
    constructor(firstName,lastName,email,phone,photo,creditcard){
        this.firstName=firstName || "Myname"
        this.lastName=lastName || "Mylastname"
        this.email=email || "x@y.com"
        this.phone=phone || 9055502525
        this.photo=photo || "Myphoto"
        this.creditcard=creditcard || 5544998877665544
    }
    greet(member){
        console.log("Hello "+member.firstName+" "+member.lastName+" Welcome to PT&You")
    }    
    updateProfile(firstName,lastName,email,phone,photo,creditcard){
        this.firstName=firstName 
        this.lastName=lastName 
        this.email=email 
        this.phone=phone 
        this.photo=photo 
        this.creditcard=creditcard              
    }
    // findPT(startDate,endDate,location,sports){
    //     {
    //         foreach(PT){
    //             if(PT.location==location){
    //                 if(PT.schedule.freeDate>=startDate&&PT.schedule.freeDate<endDate){
    //                     return PT.firstName
    //                 }
    //             } else {
    //                 return "There is no suitable PT"
    //             }
    //         }
            
    //     }
    // }
    shareOnWall(this,location){
        this.member= member
        var event= member.firstName + "makes an activity at"+location
        console.log(event)
        this.member.wall.push(event)
    }
    comment(member,description,location){
        let comm= new Comment
        comm.description=description
        comm.location=location
        this.member.wall.push(comm)
    }
    bookPT(member,PT,price,creditcard,startDate,endDate){
        order = new Order(this.member,this.PT,this.location,this.member.creditcard,this.PT.sessionFee,this.startDate,this.endDate)
    }
}

module.exports=Member
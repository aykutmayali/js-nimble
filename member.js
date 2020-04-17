const Wall = require('./wall')

class Member{
    constructor(firstName,lastName,email){
        this.firstName=firstName || "Myname"
        this.lastName=lastName || "Mylastname"
        this.email=email || "x@y.com"
        this.walls=[]
    }
    greet(member){
        console.log("Hello "+member.firstName+" "+member.lastName+" Welcome to PT&You")
    }    
    updateProfile(firstName,lastName,email){
        this.firstName=firstName 
        this.lastName=lastName 
        this.email=email        
        this.walls=[]   
        console.log("Name :"+this.firstName+" Surname: "+this.lastName+" Email: "+this.email)       
    }
    shareOnWall(location){
        const wall=new Wall(this,location)               
        this.walls.push(wall)
        var event= this.firstName + " makes a sports activity at "+location+", Damn!!"
        console.log(event)
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
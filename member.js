   const Wall = require('./wall')
   const Order = require('./order')
   const PT = require('./pt')

class Member{
    constructor(firstName,lastName,email){
        this.firstName=firstName || "Myname"
        this.lastName=lastName || "Mylastname"
        this.email=email || "x@y.com"
        this.walls=[]
        this.orders=[]
    }
    greet(member){
        console.log("Hello "+member.firstName+" "+member.lastName+" Welcome to PT&You")
    }    
    updateProfile(firstName,lastName,email){
        this.firstName=firstName 
        this.lastName=lastName 
        this.email=email        
        this.walls=[]
        this.orders=[]   
        console.log("Name :"+this.firstName+" Surname: "+this.lastName+" Email: "+this.email)       
    }
    shareOnWall(location){
        const wall=new Wall(this,location)               
        this.walls.push(wall)
        var event= this.firstName + " makes a sports activity at "+location+", Damn!!"
        console.log(event)
        return wall
    }

    bookPT(PT,date){
        const order = new Order(this,PT,date)
        this.orders.push(order)
        var event=this.firstName+" ordered a training session from "+PT.firstName + " price is :"+ PT.sessionFee + " date :"+date
        console.log(event)
        PT.orders.push(order)
        PT.calenders.push(order)
        return order
    }
    
}

module.exports=Member
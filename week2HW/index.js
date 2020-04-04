class Member{
    constructor(firstName,lastName,email,phone,photo,creditcard){
        this.firstName=firstName || "Myname"
        this.lastName=lastName || "Mylastname"
        this.email=email || "x@y.com"
        this.phone=phone || 9055502525
        this.photo=photo || "Myphoto"
        this.creditcard=creditcard || 5544998877665544
        this.walls=[]
        this.orders=[]
        this.measurements[]
    }     
    updateProfile(firstName,lastName,email,phone,photo,creditcard){
        this.firstName=firstName 
        this.lastName=lastName 
        this.email=email 
        this.phone=phone 
        this.photo=photo 
        this.creditcard=creditcard              
    }
    findPT(startDate,endDate,location,sports){
        {
            foreach(PT){
                if(PT.location==location){
                    if(PT.schedule.freeDate>=startDate&&PT.schedule.freeDate<endDate){
                        return PT.firstName
                    }
                } else {
                    return "There is no suitable PT"
                }
            }
            
        }
    }
    shareOnWall(location,description){        
        const wall= new Wall(this,location,description || " ")        
        this.member.walls.push(wall)
        return wall
    }
    comment(location,description){
        let comm= new Comment
        comm.description=description
        comm.location=location
        const wall=new Wall(this,comm.location,com.description)
        this.member.wall.push(wall)
        return wall
    }
    bookPT(pt,price,creditcard,date,location){
        const order=new Order(this,pt,price,creditcard,date,location)
        this.member.orders.push(order)
        return order
    }
    setMeasurement(type,date,value,unit,description){
        const measurement=new measurement(type,date,value,unit,description)
        this.measurement.push(measurement)
        return measurement
    }
}

class PT{
    constructor(firstName,lastName,email,phone,photo,accountNumber,sports,Documents,usingBrand,seesionFee,location){
        this.firstName=firstName || "Myname"
        this.lastName=lastName || "Mylastname"
        this.email=email || "x@y.com"
        this.phone=phone || 9055502525
        this.photo=photo || "Myphoto"
        this.accountNumber=accountNumber || 5544998877665544
        this.sports= sports || "CrossFit"
        this.Documents= Documents || []
        this.usingBrand= usingBrand || "Nike" 
        this.seesionFee= sessionFee || 100
        this.location= location || "Istanbul Avrupa"        
    }
    setPrice(number){
        this.price=number
        console.log("Session fee for this PT is {0}",number)
    }
    setDate(date)
    {   
        this.freeDate=date       
    }
}
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
        console.log("Hello"+member.firstName+" "+member.lastName+"Welcome to PT&You")
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

    shareOnWall(member,location){
        this.member=member
        console.log(member.firstName + "makes an activity at"+location)
    }
    comment(description,location){
        let com= new Comment
        com.description=description
        com.location=location
    }
    bookPT(member,PT,location,startDate,endDate){
        order = new Order(this.member,this.PT,this.location,this.member.creditcard,this.PT.sessionFee,this.startDate,this.endDate)
    }
}

class PT{
    constructor(sports,Documents,usingBrand,seesionFee,location){
        this.sports= sports || "CrossFit"
        this.Documents= Documents || []
        this.usingBrand= usingBrand || "Nike" 
        this.seesionFee= sessionFee || 100
        this.location= location || "Istanbul Avrupa"        
    }
    setPrice(number){
        console.log("Session fee for this PT is {0}",number)
    }
    setDate(startDate,endDate){
        console.log(" for this PT free between {0},{1} dates",startDate,endDate)
    }
}


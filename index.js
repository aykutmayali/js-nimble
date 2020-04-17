const Member = require('./member')
const Wall= require('./wall')
const Location=require('./location')
const PT=require('./pt')

aykut = new Member('aykut','mayali','aykutmayali@gmail.com')
hakki = new Member('hakki','saric')

esenyurt=new Location('coords','esenyurt')

 hakki.greet(aykut);
 aykut.shareOnWall("esenyurt");

 hakki.updateProfile('hakki','saric','hs@xmail.com')

 erkan = new PT('erkan','arkan','ea@xmail.com')
function showPT(pt){
    console.log("This pt : "+pt.firstName + " Location :"+pt.location + " sports is :"+pt.sports+" fee is :"+pt.sessionFee)
}
showPT(erkan)


// class Member{
//     constructor(firstName,lastName,email,phone,photo,creditcard){
//         this.firstName=firstName || "Myname"
//         this.lastName=lastName || "Mylastname"
//         this.email=email || "x@y.com"
//         this.phone=phone || 9055502525
//         this.photo=photo || "Myphoto"
//         this.creditcard=creditcard || 5544998877665544
//     }
//     greet(member){
//         console.log("Hello"+member.firstName+" "+member.lastName+"Welcome to PT&You")
//     }    
//     updateProfile(firstName,lastName,email,phone,photo,creditcard){
//         this.firstName=firstName 
//         this.lastName=lastName 
//         this.email=email 
//         this.phone=phone 
//         this.photo=photo 
//         this.creditcard=creditcard              
//     }
//     findPT(startDate,endDate,location,sports){
//         {
//             foreach(PT){
//                 if(PT.location==location){
//                     if(PT.schedule.freeDate>=startDate&&PT.schedule.freeDate<endDate){
//                         return PT.firstName
//                     }
//                 } else {
//                     return "There is no suitable PT"
//                 }
//             }
            
//         }
//     }
//     shareOnWall(member,location){
//         this.member= member
//         var event= member.firstName + "makes an activity at"+location
//         console.log(event)
//         this.member.wall.push(event)
//     }
//     comment(member,description,location){
//         let comm= new Comment
//         comm.description=description
//         comm.location=location
//         this.member.wall.push(comm)
//     }
//     bookPT(member,PT,price,creditcard,startDate,endDate){
//         order = new Order(this.member,this.PT,this.location,this.member.creditcard,this.PT.sessionFee,this.startDate,this.endDate)
//     }
// }

// class PT{
//     constructor(sports,Documents,usingBrand,seesionFee,location){
//         this.sports= sports || "CrossFit"
//         this.Documents= Documents || []
//         this.usingBrand= usingBrand || "Nike" 
//         this.seesionFee= sessionFee || 100
//         this.location= location || "Istanbul Avrupa"        
//     }
//     setPrice(number){
//         console.log("Session fee for this PT is {0}",number)
//     }
//     setDate(startDate,endDate){
//         console.log(" for this PT free between {0},{1} dates",startDate,endDate)
//     }
// }

// class Calender{
//     constructor(reservedDate,freeDate){
//         this.reservedDate=reservedDate
//         this.freeDate=freeDate
//     }
// }
// class Wall{
//     constructor(){
//         this.event=[]
//         this.comment=[]
//     }
// }

// class Order{
//     constructor(member,PT,price,creditcard,startDate,endDate){
//         this.member=member
//         this.PT=PT
//         this.price=price
//         this.creditcard=creditcard
//         this.startDate=startDate
//         this.endDate=endDate
//     }
// }
const Member = require('./member')
const Wall= require('./wall')
const Order=require('./order')
const Location=require('./location')
const PT=require('./pt')

aykut = new Member('aykut','mayali','aykutmayali@gmail.com')
hakki = new Member('hakki','saric')

esenyurt=new Location('coords','esenyurt')

 hakki.greet(aykut);
 aykut.shareOnWall("esenyurt");

 hakki.updateProfile('hakki','saric','hs@xmail.com')

 erkan = new PT('erkan','arkan','ea@xmail.com')
 seda = new PT('seda','kimse','sk@xmail.com','yoga')

function showPT(pt){
    console.log("This PT : "+pt.firstName + " Location :"+pt.location + " sports is :"+pt.sports+" fee is :"+pt.sessionFee)
}
showPT(erkan)

aykut.bookPT(erkan,"18.04.2020 14:00:00")
hakki.bookPT(seda,"18.04.2020 15:00:00")
aykut.bookPT(seda,"19.04.2020 14:00:00")

function printMemberBooking(order){
    console.log("This order was ordered at :"+ order.date+" by "+order.member.firstName+" with PT :"+order.PT.firstName)
}

function showMemberOrders(member){
    member.orders.array.array.forEach(element => {
        printMemberBooking
    });
}

showMemberOrders(hakki)
showMemberOrders(aykut)


const colors=require('colors')
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
hakki.bookPT(erkan,"19.04.2020 15:00:00")
function printMemberBooking(order){
    console.log(colors.bgGray("This order was ordered at :"+colors.bgBlack(order.date.brightRed+" ")+" by "+colors.bgBrightBlue(colors.black(order.member.firstName+" ")))+colors.bgGray(" with PT :")+colors.bgRed(colors.black(order.PT.firstName+" "))+ colors.bgGray(" price : ")+ colors.bgBrightYellow(colors.black(order.price+" ")))
}

function showMemberOrders(member){
    member.orders.forEach(printMemberBooking)
}

showMemberOrders(hakki)
showMemberOrders(aykut)
// printMemberBooking(aykut.orders[0])
// printMemberBooking(aykut.orders[1])
// printMemberBooking(hakki.orders[0])
// printMemberBooking(hakki.orders[1])
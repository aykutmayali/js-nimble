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
function showPT(pt){
    console.log("This PT : "+pt.firstName + " Location :"+pt.location + " sports is :"+pt.sports+" fee is :"+pt.sessionFee)
}
showPT(erkan)

aykut.bookPT(erkan,"18.04.2020 14:00:00")

function showMemberOrders(member){
    
}
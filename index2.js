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

// irem = new PT('pilates','herDocuments','adidas',160,'alsancak')
// beril = new PT('crossfit','herDocuments','nike',150,'maslak') 

// const sports={
//     CrossFit : 'crossfit', 
//     Yoga : 'yoga',
//     Pilates :'pilates', 
//     Fitness : 'fitness'
// }

// esenyurt = new Location([1234654987],'Istanbul');
// maslak= new Location([4646989989],'Istanbul');
// alsancak= new Location([7979484845],'Izmir');

// beril.setDate('15-03-2020 15:00','15-03-2020 16:00');
// irem.setDate('15-03-2020 16:00','15-03-2020 17:00');

// aykut.findPT('15-03-2020 16:00','15-03-2020 17:00','alsancak','pilates')
// hakki.findPT('15-03-2020 15:00','15-03-2020 16:00','maslak','crossfit')

// aykut.shareOnWall('aykut','alsancak');
// aykut.comment('aykut','too easy','alsancak');


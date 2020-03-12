class Member{
    constructor(firstName,lastName,email,phone){
        this.firstName=firstName
        this.lastName=lastName
        this.email=email
        this.phone=phone
    }


    greet(member){
        console.log("Hello"+member.firstName+member.lastName+"Welcome to PT&You")
    }
    findPT(startDate,endDate,location,sports){
        console.log("Between dates"+startDate+"and"+endDate+"in"+location+"about"+sports+":\n")
    }
    updateProfile(firstName,lastName,email,phone,photo,creditcard,sports,measurements,certificate,usingBrand,sessionFee,location){
        this.firstName=firstName
        this.lastName=lastName
        this.email=email
        this.phone=phone
        this.photo=photo
        this.creditcard=creditcard       
        this.sports=sports
        this.measurements.push(measurements)
        this.certificate.push(certificate)
        this.usingBrand.push(usingBrand)
        this.sessionFee=sessionFee
        this.location=location
    }
    shareOnWall(member,location){
        this.member=member
        console.log(member.firstName + "makes an activity at"+location)
    }
    comment(stars,member,location){
        console.log("There is "+stars+"for"+this.shareOnWall(member,location))
    }
    bookPT(member,PT,location,time){
        console.log("Member :"+member.firstName+"make a training with PT:"+PT.firstName+"at "+location+"on"+time)
    }
}

const member1=new Member('aykut','mayali','aykut@mayali.com','+905066566565')
member1.greet()
member1.comment(5,member1,'esenyurt')
const member2=new Member('x','men','x@y.com','56565656')
member1.bookPT(member1,member2,'maslak','20.03.2020')
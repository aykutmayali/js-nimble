// console.log('hello')

// const numberOfPeopleInClass =10

// function tellNumberInClass(){
//     console.log(numberOfPeopleInClass)
// }

// tellNumberInClass()

//Driver , Passenger , Booking classları olacak

class Driver{
    constructor(name,location){
        this.name=name
        this.location=this.location
    }
}
class Passenger{
    constructor(name){
        this.name=name        
        this.location=this.location
        this.bookings = []
    }
    book(driver,origin,destination){
        const booking=new Booking(driver,this,origin,destination)
        this.bookings.push(booking)
        return booking
    }
}
class Booking{
    constructor(driver,passenger,origin,destination){
        this.driver=driver
        this.passenger=passenger
        this.origin=origin
        this.destination=destination
    }
}

const armagan= new Passenger('Armagan')
const stefan = new Driver('Stefan')
armagan.book(stefan,'Kreuzberg','Köln')
stefan.pickUp(armagan)
stefan.drive(bookingFromKreuzbergToKöln.destination)
console.log('${armagan.name} has ${armagan.bookings.length}booking(s).')
console.log('${armagan.name} has ${armagan.bookings[1].origin} to $armagan.bookings[1].destinaiton')

class Driver {
  constructor(name, location) {
    this.name = name
    this.location = location
  }
}

class Passenger {
  constructor(name, location) {
    this.name = name
    this.location = location
    this.bookings = []
  }

  book(driver, origin, destination) {
    const booking = new Booking(driver, this, origin, destination)

    this.bookings.push(booking)

    return booking
  }
}

class Booking {
  constructor(driver, passenger, origin, destination) {
    this.driver = driver
    this.passenger = passenger
    this.origin = origin
    this.destination = destination
  }
}

const armagan = new Passenger('Armagan', 'Kreuzberg')
const stefan = new Driver('Stefan', 'Treptower Park')

const bookingFromKreuzbergToNeukolln = armagan.book(stefan, 'Kreuzberg', 'Neukolln')
// stefan.drive(bookingFromKreuzbergToNeukolln.origin)
// stefan.pickUp(armagan)
// stefan.drive(bookingFromKreuzbergToNeukolln.destination)
// armagan.endBooking(bookingFromKreuzbergToNeukolln)

console.log(`${armagan.name} has ${armagan.bookings.length} booking(s).`)

console.log(`${armagan.name} wants to travel from ${armagan.bookings[0].origin} to ${armagan.bookings[0].destination}`)

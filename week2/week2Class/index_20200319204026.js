function printBooking(booking) {
  console.log(`${booking.passenger.name} booked ${booking.driver.name} to travel from ${booking.origin} to ${booking.destination}`)
}

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

const booking1 = armagan.book(stefan, 'Kreuzberg', 'Neukolln')
const booking2 = armagan.book(stefan, 'Neukolln', 'Mitte')
const booking3 = armagan.book(stefan, 'Mitte', 'Kreuzberg')
const booking4 = armagan.book(stefan, 'Kreuzberg', 'SXF')

function printBookingHistory(passenger) {
  passenger.bookings.forEach(printBooking)
}

printBookingHistory(armagan)

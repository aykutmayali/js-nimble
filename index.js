const Passenger = require('./passenger')
const Driver = require('./driver')

const armagan = new Passenger('Armagan', 'Kreuzberg')
const stefan = new Driver('Stefan', 'Treptower Park')

armagan.book(stefan, 'Kreuzberg', 'Neukolln')
armagan.book(stefan, 'Neukolln', 'Mitte')
armagan.book(stefan, 'Mitte', 'Kreuzberg')
armagan.book(stefan, 'Kreuzberg', 'SXF')

function printBooking(booking) {
  console.log(`${booking.passenger.name} booked ${booking.driver.name} to travel from ${booking.origin} to ${booking.destination}`)
}

function printBookingHistory(passenger) {
  passenger.bookings.forEach(printBooking)
}

printBookingHistory(armagan)

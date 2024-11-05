const { bookings } = require('../../data/data');

/*
http://localhost:3000/api/bookings
*/

function getBookings(req, res) {
  res.json(bookings);
}

module.exports = {
  getBookings
}

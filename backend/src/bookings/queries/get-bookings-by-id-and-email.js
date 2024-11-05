const { bookings } = require('../../data/data');

/*
http://localhost:3000/api/bookings/:businessId/email/:email
http://localhost:3000/api/bookings/1/email/user@example.com
*/

function getBookingsByIdAndEmail(req, res) {
  const businessId = req.params.businessId;
  const email = req.params.email;
  
  const filteredBookings = bookings.filter(booking => booking.businessId === parseInt(businessId) && booking.userEmail === email);
  if (filteredBookings.length > 0) {
    res.json(filteredBookings);
  } else {
    res.status(404).json({ message: 'No bookings found for this business and email' });
  }
}

module.exports = {
  getBookingsByIdAndEmail
}

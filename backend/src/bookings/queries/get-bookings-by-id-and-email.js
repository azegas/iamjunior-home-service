const { bookings } = require('../../data/data');

/*
http://localhost:3000/api/bookings/:businessId/email/:email
http://localhost:3000/api/bookings/1/email/user@example.com
*/

/**
 * @swagger
 * /api/bookings/{businessId}/email/{email}:
 *   get:
 *     summary: Get bookings by business ID and email
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: businessId
 *         required: true
 *         description: The ID of the business
 *       - in: path
 *         name: email
 *         required: true
 *         description: The email of the user
 *     responses:
 *       200:
 *         description: A list of bookings
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

const { businesses, bookings } = require('../../../data/data');

/*
http://localhost:3000/api/businesses/:id/bookings/date/:date
http://localhost:3000/api/businesses/1/bookings/date/2023-10-01
*/

/**
 * @swagger
 * /api/businesses/{id}/bookings/date/{date}:
 *   get:
 *     summary: Get bookings for a business by ID and date
 *     tags: [Businesses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the business
 *       - in: path
 *         name: date
 *         required: true
 *         description: The date of the booking
 *     responses:
 *       200:
 *         description: A list of bookings
 */

function getBusinessByIdAndDate(req, res) {
  const businessId = req.params.id;
  const date = req.params.date;

  console.log('businessId:', businessId);
  console.log('date:', date);
    
  const business = businesses.find(business => business.id === parseInt(businessId));
  if (business) {
    const bookingsForDate = bookings.filter(booking => booking.businessId === parseInt(businessId) && booking.date === date);
    if (bookingsForDate.length > 0) {
      res.json({ business, bookings: bookingsForDate });
    } else {
      res.status(404).json({ message: 'No bookings found for this date' });
    }
  } else {
    res.status(404).json({ message: 'Business not found' });
  }
}

module.exports = {
  getBusinessByIdAndDate
}

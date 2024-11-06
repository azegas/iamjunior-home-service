const { BusinessModel } = require('../../../models/Business');
const { BookingModel } = require('../../../models/Booking');

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

async function getBusinessByIdAndDate(req, res) {
  const businessId = req.params.id;
  const date = req.params.date;

  console.log('businessId:', businessId);
  console.log('date:', date);
    
  try {
    const business = await BusinessModel.findById(businessId);
    if (business) {
      const bookingsForDate = await BookingModel.find({ businessId: businessId, date: date });
      if (bookingsForDate.length > 0) {
        res.json({ business, bookings: bookingsForDate });
      } else {
        res.status(404).json({ message: 'No bookings found for this date' });
      }
    } else {
      res.status(404).json({ message: 'Business not found' });
    }
  } catch (error) {
    console.error('Error fetching business or bookings:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = {
  getBusinessByIdAndDate
}

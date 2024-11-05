const { bookings } = require('../../../data/data');

/*
http://localhost:3000/api/bookings
*/

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: A list of bookings
 */

function getBookings(req, res) {
  res.json(bookings);
}

module.exports = {
  getBookings
}

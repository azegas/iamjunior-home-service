const { businesses } = require('../../../data/data');

/*
http://localhost:3000/api/businesses
*/

/**
 * @swagger
 * /api/businesses:
 *   get:
 *     summary: Get all businesses
 *     tags: [Businesses]
 *     responses:
 *       200:
 *         description: A list of businesses
 */

function getBusinesses(req, res) {
  if (businesses.length === 0) {
    return res.status(404).json({ success: false, message: 'No businesses found.' });
  }
  res.json(businesses);
}

module.exports = {
  getBusinesses
}

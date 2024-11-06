const { BusinessModel } = require('../../../db/business-model');

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

async function getBusinesses(req, res) {
  try {
    const businesses = await BusinessModel.find();
    if (businesses.length === 0) {
      return res.status(404).json({ success: false, message: 'No businesses found.' });
    }
    res.json(businesses);
  } catch (error) {
    console.error('Error fetching businesses:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
}

module.exports = {
  getBusinesses
}

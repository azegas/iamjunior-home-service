const { BusinessModel } = require('../../../models/Business');

/*
http://localhost:3000/api/businesses/:id
http://localhost:3000/api/businesses/1
*/

/**
 * @swagger
 * /api/businesses/{id}:
 *   get:
 *     summary: Get a business by ID
 *     tags: [Businesses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the business
 *     responses:
 *       200:
 *         description: A business
 */

async function getBusinessById(req, res) {
  const businessId = req.params.id;
  try {
    const business = await BusinessModel.findById(businessId);
    if (business) {
      res.json(business);
    } else {
      res.status(404).json({ message: 'Business not found' });
    }
  } catch (error) {
    console.error('Error fetching business:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
}

module.exports = {
  getBusinessById
}

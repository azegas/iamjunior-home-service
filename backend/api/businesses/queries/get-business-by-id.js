const { businesses } = require('../../../data/data');

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

function getBusinessById(req, res) {
  const businessId = req.params.id;
  const business = businesses.find(business => business.id === parseInt(businessId));
  if (business) {
    res.json(business);
  } else {
    res.status(404).json({ message: 'Business not found' });
  }
}

module.exports = {
  getBusinessById
}

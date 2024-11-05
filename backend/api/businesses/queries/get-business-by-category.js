const { businesses } = require('../../../data/data');

/*
http://localhost:3000/api/businesses/category/:category
http://localhost:3000/api/businesses/category/fashion
*/

/**
 * @swagger
 * /api/businesses/category/{category}:
 *   get:
 *     summary: Get businesses by category
 *     tags: [Businesses]
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         description: The category of the business
 *     responses:
 *       200:
 *         description: A list of businesses
 */

function getBusinessByCategory(req, res) {
  const category = req.params.category;
  const business = businesses.filter(business => business.category.toLowerCase() === category.toLowerCase());
  if (business.length > 0) {
    res.json(business);
  } else {
    res.status(404).json({ message: 'Business with such category does not exist' });
  }
}

module.exports = {
  getBusinessByCategory
}

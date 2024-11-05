const { categories } = require('../../../data/data');

/*
http://localhost:3000/api/categories
*/

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: A list of categories
 */

function getCategories(req, res) {
  if (categories.length === 0) {
    return res.status(404).json({ success: false, message: 'No categories found.' });
  }
  res.json(categories);
}

module.exports = {
  getCategories
}
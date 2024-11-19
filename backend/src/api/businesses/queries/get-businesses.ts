import { BusinessModel } from '../model';

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

const getBusinesses = async function (req, res) {
  try {
    // populate basically means "expand" the category field to include ALL the fields in the Category model.
    // Without it - we would only get the category id
    const businesses = await BusinessModel.find().populate('category');
    if (businesses.length === 0) {
      return res.status(404).json({ success: false, message: 'No businesses found.' });
    }
    return res.json(businesses);
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

export { getBusinesses };

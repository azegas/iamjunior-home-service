import { BusinessModel } from '../businesses-model';
import { CategoryModel } from '../../categories/categories-model';
import { Request, Response } from 'express';

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

const getBusinessByCategory = async (req: Request, res: Response): Promise<void> => {
  const categoryName = req.params.category;
  try {
    // Find the category ID by name
    const category = await CategoryModel.findOne({ name: categoryName });
    if (!category) {
      res.status(404).json({ message: 'Category does not exist' });
    }
    // Use the category ID to find businesses
    const businesses = await BusinessModel.find({ category: category?._id });
    if (businesses.length > 0) {
      res.json(businesses);
    } else {
      res.status(404).json({ message: 'Businesses with such category do not exist' });
    }
  } catch {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export { getBusinessByCategory };

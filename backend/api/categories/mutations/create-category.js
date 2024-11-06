const { CategoryModel } = require('../model');

/*
http://localhost:3000/api/categories

{
    "name": "labukas",
    "color": "pink",
    "icon": "https://google.com"
}
*/

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               color:
 *                 type: string
 *               icon:
 *                 type: string
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Invalid input
 *       409:
 *         description: Category already exists
 */

async function createCategory(req, res) {
    const { name, color, icon } = req.body;

    if (!name || !color || !icon) {
        return res.status(400).json({ success: false, message: 'Please provide name, color, and icon.' });
    }
    if (typeof name !== 'string' || typeof color !== 'string' || typeof icon !== 'string' || !icon.startsWith('http')) {
        return res.status(400).json({ success: false, message: 'Name should be a string, color should be a string, and icon should be a string starting with http.' });
    }

    try {
        const existingCategory = await CategoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(409).json({ success: false, message: `Category with name '${name}' already exists.` });
        }
        const newCategory = new CategoryModel({
            name,
            color,
            icon
        });
        const category = await newCategory.save();
        res.status(201).json({
            success: true,
            message: 'Category created successfully',
            category
        });
    } catch (error) {
        // 11000 is a MongoDB-specific error code that indicates a duplicate key error
        if (error.code === 11000) {
            return res.status(409).json({ success: false, message: 'Category already exists.' });
        }
        return res.status(500).json({ success: false, message: 'Internal server error.' });
    }
}

module.exports = {
    createCategory
}
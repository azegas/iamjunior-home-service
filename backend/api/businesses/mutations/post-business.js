const { BusinessModel } = require('../../../db/category-business');
const { CategoryModel } = require('../../../db/category-model');

/*
http://localhost:3000/api/businesses

{
    "name": "Fake Business Name",
    "description": "This is a fake business description.",
    "address": "123 Fake Street, Faketown, USA",
    "worker": "John Doe",
    "category": "cleaning",
    "contactPerson": "John Doe",
    "email": "john.doe@fakebusiness.com",
    "images": ["image1.jpg", "image2.jpg"]
}
*/

/**
 * @swagger
 * /api/businesses:
 *   post:
 *     summary: Create a new business
 *     tags: [Businesses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               address:
 *                 type: string
 *               worker:
 *                 type: string
 *               category:
 *                 type: string
 *               contactPerson:
 *                 type: string
 *               email:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Business created successfully
 *       400:
 *         description: Invalid input
 */

async function postBusiness(req, res) {

    const { name, description, address, worker, category, contactPerson, email, images } = req.body;

    if (!name || !description || !address || !worker || !category || !contactPerson || !email || !images) {
        return res.status(400).json({
            success: false,
            message: 'Required fields: name, description, address, category, contactPerson, email, and images.'
        });
    }

    if (typeof name !== 'string' || typeof description !== 'string' || typeof address !== 'string' || typeof contactPerson !== 'string' || typeof email !== 'string' || !email.includes('@') || !Array.isArray(images)) {
        return res.status(400).json({
            success: false,
            message: 'Name, description, address, contactPerson, and email should be strings, images should be an array, and email should contain @.'
        });
    }

    const categoryExists = await CategoryModel.findOne({ name: category });
    if (!categoryExists) {
        return res.status(400).json({
            success: false,
            message: `Category '${category}' does not exist. Available categories are: ${categories.map(cat => cat.name).join(', ')}.`
        });
    }

    const newBusiness = new BusinessModel({
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        worker: req.body.worker,
        category: categoryExists._id,
        contactPerson: req.body.contactPerson,
        email: req.body.email,
        images: req.body.images
    });

    await newBusiness.save();
    
    res.json({
        success: true,
        message: 'Business created successfully',
        business: newBusiness
    });
}

module.exports = {
    postBusiness
}
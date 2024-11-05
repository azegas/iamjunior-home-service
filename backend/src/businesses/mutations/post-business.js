const { businesses } = require('../../data/data');
const { categories } = require('../../data/data');

/*
http://localhost:3000/api/businesses

{
    "name": "Fake Business Name",
    "description": "This is a fake business description.",
    "address": "123 Fake Street, Faketown, USA",
    "category": "Food",
    "contactPerson": "John Doe",
    "email": "john.doe@fakebusiness.com",
    "images": ["image1.jpg", "image2.jpg"]
}
*/

function postBusiness(req, res) {

    const { name, description, address, category, contactPerson, email, images } = req.body;

    if (!name || !description || !address || !category || !contactPerson || !email || !images) {
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

    const categoryExists = categories.some(cat => cat.name === category);
    if (!categoryExists) {
        return res.status(400).json({
            success: false,
            message: `Category '${category}' does not exist. Available categories are: ${categories.map(cat => cat.name).join(', ')}.`
        });
    }

    businesses.push({
        id: businesses.length + 1,
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        category: req.body.category,
        contactPerson: req.body.contactPerson,
        email: req.body.email,
        images: req.body.images
    });
    
    res.json({
        success: true,
        message: 'Business created successfully',
        business: businesses[businesses.length - 1]
    });
}

module.exports = {
    postBusiness
}
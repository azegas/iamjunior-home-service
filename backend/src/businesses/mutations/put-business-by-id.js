const { businesses } = require('../../data/data');

/*
http://localhost:3000/api/businesses/:id
http://localhost:3000/api/businesses/1

{
    "name": "New Name",
    "description": "New Description",
    "address": "New Address",
    "category": "New Category",
    "contactPerson": "New Contact Person",
    "email": "new.email@business.com",
    "images": ["new-image1.jpg", "new-image2.jpg"]
}
*/

function putBusiness(req, res) {
    const businessId = req.params.id;
    
    const business = businesses.find(business => business.id === parseInt(businessId));
    if (!business) {
        return res.status(404).json({ message: 'Business with such id does not exist' });
    }

    const allowedFields = ['name', 'description', 'address', 'category', 'contactPerson', 'email', 'images'];

    // Extract fields from req.body and separate known from unknown
    const providedFields = Object.keys(req.body);
    const unknownFields = providedFields.filter(field => !allowedFields.includes(field));

    // Check for any unknown fields
    if (unknownFields.length > 0) {
        return res.status(400).json({ message: 'Unknown fields provided', unknownFields });
    }

    // Check if there’s at least one valid field to update
    const hasValidFields = providedFields.some(field => allowedFields.includes(field) && req.body[field]);
    if (!hasValidFields) {
        return res.status(400).json({ message: 'Please provide at least one valid field to update' });
    }

    // Update business fields only if they are provided and of the correct type
    allowedFields.forEach(field => {
        if (req.body[field] !== undefined) {
            if (field === 'images') {
                if (!Array.isArray(req.body[field])) {
                    return res.status(400).json({ message: 'Images should be an array' });
                }
                if (!req.body[field].every(image => typeof image === 'string')) {
                    return res.status(400).json({ message: 'All images should be strings' });
                }
            } else {
                if (field === 'email' && !req.body[field].includes('@')) {
                    return res.status(400).json({ message: 'Email should contain @' });
                }
                if (typeof req.body[field] !== 'string') {
                    return res.status(400).json({ message: `${field} should be a string` });
                }
            }
            business[field] = req.body[field];
        }
    });

    // Return success message with updated business data
    res.json({ message: 'Business updated', business });
}

module.exports = {
    putBusiness
};
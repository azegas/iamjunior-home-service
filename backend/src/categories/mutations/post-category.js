const { categories } = require('../../data/data');

/*
http://localhost:3000/api/categories

{
    "name": "labukas",
    "color": "pink",
    "url": "https://google.com"
}
*/

function postCategory(req, res) {
    const { name, color, url } = req.body;
    if (!name || !color || !url) {
        return res.status(400).json({ success: false, message: 'Please provide name, color, and url.' });
    }
    if (typeof name !== 'string' || typeof color !== 'string' || typeof url !== 'string' || !url.startsWith('http')) {
        return res.status(400).json({ success: false, message: 'Name should be a string, color should be a string, and url should be a string starting with http.' });
    }
    // Check if category already exists
    if (categories.some(category => category.name === name)) {
        return res.status(400).json({ success: false, message: `Category with name '${name}' already exists.` });
    }
    categories.push({
        id: categories.length + 1,
        name,
        color,
        url
    });
    
    res.json({
        success: true,
        message: 'Category created successfully',
        category: categories[categories.length - 1]
    });
}

module.exports = {
    postCategory
}
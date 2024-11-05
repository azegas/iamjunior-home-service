const { categories } = require('../../data/data');

/*
http://localhost:3000/api/categories
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
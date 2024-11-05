const { businesses } = require('../../data/data');

/*
http://localhost:3000/api/businesses/category/:category
http://localhost:3000/api/businesses/category/fashion
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

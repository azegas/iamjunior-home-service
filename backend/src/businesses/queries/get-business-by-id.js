const { businesses } = require('../../data/data');

/*
http://localhost:3000/api/businesses/:id
http://localhost:3000/api/businesses/1
*/

function getBusinessById(req, res) {
  const businessId = req.params.id;
  const business = businesses.find(business => business.id === parseInt(businessId));
  if (business) {
    res.json(business);
  } else {
    res.status(404).json({ message: 'Business not found' });
  }
}

module.exports = {
  getBusinessById
}

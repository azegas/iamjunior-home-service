const express = require('express');

const { getBusinesses } = require('./queries/get-businesses');
const { postBusiness } = require('./mutations/post-business');
const { getBusinessById } = require('./queries/get-business-by-id');
const { getBusinessByCategory } = require('./queries/get-business-by-category');
const { putBusiness } = require('./mutations/put-business-by-id');
const {
  getBusinessByIdAndDate,
} = require('./queries/get-business-bookings-by-id-and-booking-date');

// can use authMiddleware to make so that certain endpoints are only usable by authenticated users
// const { authMiddleware } = require('../../middlewares/authMiddleware');

const businessesRouter = express.Router();

businessesRouter.get('/', getBusinesses);
businessesRouter.post('/', postBusiness);
businessesRouter.get('/:id', getBusinessById);
businessesRouter.get('/category/:category', getBusinessByCategory);
businessesRouter.put('/:id', putBusiness);
businessesRouter.get('/:id/bookings/date/:date', getBusinessByIdAndDate);

module.exports = {
  businessesRouter,
};

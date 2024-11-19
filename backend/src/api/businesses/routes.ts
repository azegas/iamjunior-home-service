import express from 'express';

import { getBusinesses } from './queries/get-businesses';
import { postBusiness } from './mutations/post-business';
import { getBusinessById } from './queries/get-business-by-id';
import { getBusinessByCategory } from './queries/get-business-by-category';
import { putBusiness } from './mutations/put-business-by-id';
import { getBusinessByIdAndDate } from './queries/get-business-bookings-by-id-and-booking-date';

// can use authMiddleware to make so that certain endpoints are only usable by authenticated users
// import { authMiddleware } from '../../middlewares/authMiddleware';

const businessesRouter = express.Router();

businessesRouter.get('/', getBusinesses);
businessesRouter.post('/', postBusiness);
businessesRouter.get('/:id', getBusinessById);
businessesRouter.get('/category/:category', getBusinessByCategory);
businessesRouter.put('/:id', putBusiness);
businessesRouter.get('/:id/bookings/date/:date', getBusinessByIdAndDate);

export { businessesRouter };

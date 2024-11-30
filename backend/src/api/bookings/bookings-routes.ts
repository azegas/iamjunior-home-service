import express from 'express';

import { getBookings } from './queries/get-bookings';
import { getBookingsByIdAndEmail } from './queries/get-bookings-by-id-and-email';
import { postBooking } from './mutations/post-booking';
import { deleteBooking } from './mutations/delete-booking';

const bookingsRouter = express.Router();

bookingsRouter.get('/', getBookings);
bookingsRouter.get('/:businessId/email/:email', getBookingsByIdAndEmail);
bookingsRouter.post('/', postBooking);
bookingsRouter.delete('/:id', deleteBooking);

export { bookingsRouter };

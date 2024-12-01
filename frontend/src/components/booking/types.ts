export type Booking = {
  businessId: string;
  date: string;
  time: string;
  userEmail: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type BookingResponse = {
  message: string;
  booking: Booking;
};
import { Booking } from '@/components/booking/types';
import BookingsCard from '@/components/booking/BookingsCard';
import styles from './BookingList.module.scss';
const BookingList = ({ bookings }: { bookings: Booking[] }) => {
  return (
    <>
      <div className={styles.bookingsList}>
        {bookings.map((booking) => (
          <BookingsCard key={booking.businessId} booking={booking} />
        ))}
      </div>
    </>
  );
};

export default BookingList;

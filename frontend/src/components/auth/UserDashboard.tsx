import '@/styles/global.scss';
import { useUser } from '@/context/UserContext';
import Container from '@/components/common/Container';
import { useQuery } from '@tanstack/react-query';
import fetchBookingsByUser from '@/api/fetchBookingsByUser';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import BookingList from '@/components/booking/BookingList';
import './UserDashboard.scss';

const UserDashboard = () => {
  const { user } = useUser() ?? {};

  const {
    data: bookings,
    isLoading: isLoadingBookings,
    error: errorBookings,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: () => fetchBookingsByUser(user?.email ?? ''),
  });

  return (
    <>
      <Container>
        <h1 className="title">User Dashboard</h1>
        <p>
          <b>Username:</b> {user?.username}
        </p>

        {isLoadingBookings && <Loading />}
        {!isLoadingBookings && !errorBookings && bookings && (
          <div className="bookingsContainer">
            <BookingList bookings={bookings} />
          </div>
        )}
        {!isLoadingBookings && !bookings && (
          <Error message="You have no bookings, make some first." />
        )}
      </Container>
    </>
  );
};

export default UserDashboard;

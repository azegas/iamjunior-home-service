import { Booking } from '@/components/booking/types';
import { formatErrorMessage } from '@/utils/utils';

const fetchBookingsByUser = async (userEmail: string): Promise<Booking[]> => {
  const isProd = import.meta.env.VITE_PROD === 'true';
  const apiUrl = `${isProd ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL}api/bookings/email/${userEmail}`;

  try {
    // Intentionally adding a delay to simulate a long loading process. It happens only for the innitial load thanks to staleTime: Infinity
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 seconds delay

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const bookingsData: Partial<Booking>[] = await response.json();

    if (!bookingsData || bookingsData.length === 0) {
      throw new Error('Bookings not found');
    }

    return bookingsData as Booking[];
  } catch (error) {
    const errorMessage = formatErrorMessage(error);
    throw new Error(errorMessage);
  }
};

export default fetchBookingsByUser;

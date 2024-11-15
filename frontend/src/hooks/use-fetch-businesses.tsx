import { useState, useEffect } from 'react';
import { Business } from '@/components/business/types';

type UseFetchBusinessesReturn = {
  businesses: Business[] | null;
  errorsBusinesses: { message: string }[];
  isLoadingBusinesses: boolean;
};

const useFetchBusinesses = (): UseFetchBusinessesReturn => {
  const [businesses, setBusinesses] = useState<Business[] | null>(null);
  const [errorsBusinesses, setErrorsBusinesses] = useState<
    { message: string }[]
  >([]);
  const [isLoadingBusinesses, setIsLoadingBusinesses] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      // check if we are in production or development, and set the api url accordingly (from .env file)
      const isProd = import.meta.env.VITE_PROD === 'true';

      try {
        const apiUrl = `${isProd ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL}api/businesses`;
        const businessesResponse = await fetch(apiUrl);
        const businessesData = await businessesResponse.json();

        if (!businessesData) {
          setErrorsBusinesses([{ message: 'Businesses not found' }]);
        } else {
          setBusinesses(businessesData);
        }

        setIsLoadingBusinesses(false); // Stop loading regardless of success or errors
      } catch {
        setErrorsBusinesses([{ message: 'Failed to fetch data' }]);
        setIsLoadingBusinesses(false);
      }
    };

    fetchData();
  }, []);

  return { businesses, errorsBusinesses, isLoadingBusinesses };
};

export default useFetchBusinesses;

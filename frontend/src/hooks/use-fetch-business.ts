import { useState, useEffect } from 'react';
import { Business } from '@/components/business/types';
import { formatErrorMessage } from '@/utils/utils';

type UseFetchBusinessReturn = {
  business: Business | null;
  errorsBusiness: { message: string }[];
  isLoadingBusiness: boolean;
};

const useFetchBusiness = (id: string): UseFetchBusinessReturn => {
  const [business, setBusiness] = useState<Business | null>(null);
  const [errorsBusiness, setErrorsBusiness] = useState<{ message: string }[]>([]);
  const [isLoadingBusiness, setIsLoadingBusiness] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      // check if we are in production or development, and set the api url accordingly (from .env file)
      const isProd = import.meta.env.VITE_PROD === 'true';
      try {
        const apiUrl = `${isProd ? import.meta.env.VITE_SERVER_URL_PROD : import.meta.env.VITE_SERVER_URL}api/businesses/${id}`;
        const businessResponse = await fetch(apiUrl);

        if (!businessResponse.ok) {
          throw new Error(`HTTP error! status: ${businessResponse.status}`);
        }

        // partial type checking allows to have some but not necessarily all Business properties, preventing TypeScript errors if some fields are missing
        const businessData: Partial<Business> = await businessResponse.json();

        if (!businessData) {
          setErrorsBusiness([{ message: 'Business not found' }]);
        } else {
          setBusiness(businessData as Business);
        }

        setIsLoadingBusiness(false); // Stop loading regardless of success or errors
      } catch (err) {
        const errorMessage = formatErrorMessage(err);
        setErrorsBusiness([{ message: errorMessage }]);
        setIsLoadingBusiness(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return { business, errorsBusiness, isLoadingBusiness };
};

export default useFetchBusiness;

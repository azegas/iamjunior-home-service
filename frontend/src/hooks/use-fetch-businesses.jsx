import { useState, useEffect } from 'react';

const useFetchBusinesses = () => {
  const [businesses, setBusinesses] = useState(null);
  const [errorsBusinesses, setErrorsBusinesses] = useState([]);
  const [isLoadingBusinesses, setIsLoadingBusinesses] = useState(true);

  // TODO make a separate hook to fetch one business by id. For business detail page for example, why fetch all businesses?

  useEffect(() => {
    const fetchData = async () => {
      try {
        const businessesResponse = await fetch(
          'http://localhost:3000/api/businesses',
        );
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

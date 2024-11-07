import { useState, useEffect } from 'react';

const useFetchBusiness = (id) => {
    const [business, setBusiness] = useState(null);
    const [errorsBusiness, setErrorsBusiness] = useState();
    const [isLoadingBusiness, setIsLoadingBusiness] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const businessResponse = await fetch(`http://localhost:3000/api/businesses/${id}`);
                const businessData = await businessResponse.json();

                if (!businessData) {
                    setErrorsBusiness([{ message: 'Business not found' }]);
                } else {
                    setBusiness(businessData);
                }

                setIsLoadingBusiness(false); // Stop loading regardless of success or errors
            } catch {
                setErrorsBusiness([{ message: 'Failed to fetch data' }]);
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

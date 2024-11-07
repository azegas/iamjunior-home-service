import { useState, useEffect } from 'react';

const useFetch = () => {
    const [categories, setCategories] = useState(null);
    const [businesses, setBusinesses] = useState(null);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await fetch('http://localhost:3000/api/categories');
                const categoriesData = await categoriesResponse.json();

                const businessesResponse = await fetch('http://localhost:3000/api/businesses');
                const businessesData = await businessesResponse.json();

                if (!categoriesData) {
                    setErrors([{ message: 'Categories not found' }]);
                } else {
                    setCategories(categoriesData);
                }

                if (!businessesData) {
                    setErrors([{ message: 'Businesses not found' }]);
                } else {
                    setBusinesses(businessesData);
                }

                setIsLoading(false); // Stop loading regardless of success or errors
            } catch (error) {
                setErrors([{ message: 'Failed to fetch data' }]);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { categories, businesses, errors, isLoading };
};

export default useFetch;

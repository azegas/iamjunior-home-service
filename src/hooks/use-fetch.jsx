import { useState, useEffect } from "react";
import data from '../../data/db.json';

const useFetchFile = () => {
    const [services, setServices] = useState(null);
    const [businesses, setBusinesses] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            try {
                setTimeout(() => {
                    setServices(data.services);
                    setBusinesses(data.businesses);
                    setIsLoading(false);
                }, 500);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { services, businesses, error, isLoading };
};

export default useFetchFile;

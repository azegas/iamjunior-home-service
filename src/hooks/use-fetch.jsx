import { useState, useEffect } from "react";
import data from '../../data/db.json';

const useFetchFile = () => {
    const [services, setServices] = useState(null);
    const [businesses, setBusinesses] = useState(null);
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                const newErrors = []; // Local array to collect any errors

                if (!data.services) {
                    newErrors.push("Services not found");
                } else {
                    setServices(data.services);
                }

                if (!data.businesses) {
                    newErrors.push("Businesses not found");
                } else {
                    setBusinesses(data.businesses);
                }

                if (newErrors.length > 0) {
                    setErrors(newErrors);
                }

                console.log(newErrors);

                setIsLoading(false); // Stop loading regardless of success or errors
            }, 500);
        };

        fetchData();
    }, []);

    return { services, businesses, errors, isLoading };
};

export default useFetchFile;

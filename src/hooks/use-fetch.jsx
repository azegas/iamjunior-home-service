import { useState, useEffect } from "react";
import { saveToLocalStorage, getFromLocalStorage } from '../utils/utils';

const useFetch = (url) => {
    // for DATA - having initial useState value as null instead of an empty array, then having 'services && businesses &&' 
    // in front of component let's us know when the data has been fetched, it is shown ONLY when its fetched
    const [data, setData] = useState(null); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // If the url includes 'businesses', and business data is not present in local storage, then wait 2 seconds before fetching the business data (faked loading effect)
    // We assume that services are hardcoded and instantly available, for them we don't apply timeout/loading effect, and we don't save to local storage
    // dont apply timeout/loading to services, dont save to local storage
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (url.includes('businesses')) {
                    const existingBusinessesData = getFromLocalStorage('businesses');
                    if (existingBusinessesData) {
                        setData(existingBusinessesData);
                    } else {
                        const response = await fetch(url);
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const data = await response.json();
                        setTimeout(() => {
                            setData(data);
                            saveToLocalStorage('businesses', data);
                        }, 2000);
                    }
                } else { 
                    // Assuming `data` for other cases is hardcoded or directly available (f.x services)
                    const response = await fetch(url);
                    const data = await response.json();
                    setData(data);
                }
            } catch (error) {
                console.error('Fetch error:', error.message);
                setError(error.message);
            } finally {
                setLoading(false); // Always stop loading at the end
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
};

export default useFetch;
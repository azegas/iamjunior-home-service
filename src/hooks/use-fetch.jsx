import { useState, useEffect } from "react";

const useFetch = (url) => {
    // for DATA - having initial useState value as null instead of an empty array, then having 'services && businesses &&' 
    // in front of component let's us know when the data has been fetched, it is shown ONLY when its fetched
    const [data, setData] = useState(null); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // initial loading state is false, not to have blitc flicker of loading component at the beginning

    useEffect(() => {
        const fetchData = async () => {
            // Check local storage for existing data, if it exists, set the data and loading to false, and return(stopping the function from going further)
            setLoading(true); // Only show the loading component while fetching data (when fetchData is called), not sooner
            const localStorageData = localStorage.getItem(url);
            if (localStorageData) {
                setData(JSON.parse(localStorageData));
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // if the url includes 'businesses', then wait 2 seconds before setting the data. Loading effect faked
                // we assume that services are hardcoded and instantly available, but businesses need to be fetched from some external source
                
                // Save fetched data to local storage
                localStorage.setItem(url, JSON.stringify(data));
                
                if (url.includes('businesses')) {
                    setTimeout(() => {
                        setData(data);
                        setLoading(false); // changing the loading state to false. This is done to mimic a real-world scenario where fetching data might take some time.
                    }, 5000);
                } else {    
                    setData(data);
                    setLoading(false);
                }
            } catch (error) {
                // console.error('Fetch error:', error.message);
                setError(error.message);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
};

export default useFetch;

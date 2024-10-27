import { useState, useEffect } from "react";

const useFetch = (url) => {
    // for DATA - having initial useState value as null instead of an empty array, then having 'services && businesses &&' 
    // in front of component let's us know when the data has been fetched, it is shown ONLY when its fetched
    const [data, setData] = useState(null); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // initial loading state is true, because we want to show loading component while fetching data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // if the url includes 'businesses', then wait 2 seconds before setting the data. Loading effect faked
                // we assume that services are hardcoded and instantly available, but businesses need to be fetched from some external source
                if (url.includes('businesses')) {
                    setTimeout(() => {
                        setData(data);
                        setLoading(false); // changing the loading state to false. This is done to mimic a real-world scenario where fetching data might take some time.
                    }, 2000);
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

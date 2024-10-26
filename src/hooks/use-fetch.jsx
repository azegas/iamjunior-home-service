import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                // console.error('Fetch error:', error.message);
                setError(error.message);
            }
        };

        fetchData();
    }, [url]);

    return { data, error };
};

export default useFetch;

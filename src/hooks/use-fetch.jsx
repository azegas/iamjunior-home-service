import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([]);

    // TODO create error handling
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data));
        }, []);

    return { data };
};

export default useFetch;

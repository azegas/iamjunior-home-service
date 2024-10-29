import BusinessList from '../components/business/BusinessList';
import useFetchFile from '../hooks/use-fetch';
import { useState } from 'react';


const Favorites = () => {
    // Fetch data using the custom hook
    const { businesses, errors, isLoading } = useFetchFile();
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

    // Filter businesses to show only favorites
    const filteredBusinesses = businesses
    ? businesses.filter(business => favorites.includes(business.id))
    : [];

    return <BusinessList businesses={filteredBusinesses} serviceName="Favorites" />;
};

export default Favorites;
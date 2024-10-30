import BusinessList from '../components/business/BusinessList';
import useFetchFile from '../hooks/use-fetch';
import { useFavorite } from '../context/FavoriteContext';


const Favorites = () => {
    const { businesses } = useFetchFile();
    const { favorites } = useFavorite();
    
    const filteredBusinesses = businesses
    ? businesses.filter(business => favorites.includes(business.id))
    : [];

    return <BusinessList businesses={filteredBusinesses} serviceName="Favorites" />;
};

export default Favorites;
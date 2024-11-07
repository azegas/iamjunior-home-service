import BusinessList from '../components/business/BusinessList';
import useFetch from '../hooks/use-fetch';
import { useFavorite } from '../context/FavoriteContext';
import { useUser } from '../context/UserContext';
import '../styles/global.scss';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
    const { businesses } = useFetch();
    const { favorites } = useFavorite();
    const { user } = useUser();
    const navigate = useNavigate();

    const filteredBusinesses = businesses ? businesses.filter((business) => favorites.includes(business._id)) : [];

    if (favorites.length === 0) {
        return user ? (
            <div className="container middleOfPage">
                No favorites yet. Visit homepage to discover businesses!{' '}
                <button onClick={() => navigate('/')}>Show me all the businesses</button>
            </div>
        ) : (
            <div className="container middleOfPage">
                No favorites yet. Please login first to add some!{' '}
                <button onClick={() => navigate('/login')}>Login</button>
            </div>
        );
    }

    return <BusinessList businesses={filteredBusinesses} categoryName="Favorites" />;
};

export default Favorites;

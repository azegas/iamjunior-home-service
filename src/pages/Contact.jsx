import '../styles/global.scss';
import { useUser } from '../context/UserContext';
import { useFavorite } from '../context/FavoriteContext';

const Contact = () => {
    const { user } = useUser();
    const { favorites } = useFavorite();

    console.log('favorites', favorites );
    return (
        <div className="container">
            <h1 className="title">Contact Us, {user ? user.username : ''}</h1>
            <p className="text">Details about how to contact us.</p>
        </div>
    );
}

export default Contact;
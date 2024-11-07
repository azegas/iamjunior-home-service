import BusinessCard from './BusinessCard';
import styles from './BusinessList.module.scss';
import { useFavorite } from '../../context/FavoriteContext';

const BusinessList = ({ businesses, categoryName }) => {
    const { handleFavorite } = useFavorite();

    return (
        <div className="container">
            <h1 className="titleSmaller">{categoryName}</h1>
            <div className={styles.businessList}>
                {businesses.map((business) => (
                    <div key={business._id}>
                        <BusinessCard business={business} onFavoriteClick={() => handleFavorite(business._id)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusinessList;

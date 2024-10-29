import BusinessCard from './BusinessCard';
import styles from './BusinessList.module.scss';
import { Link } from 'react-router-dom';

const BusinessList = ({ businesses, serviceName }) => {

    const handleFavoriteClick = (businessId) => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.includes(businessId)) {
            favorites = favorites.filter(id => id !== businessId);
        } else {
            favorites.push(businessId);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    return (
        <div className="container">
                <h1 className="titleSmaller">{serviceName}</h1>
                <div className={styles.businessList}>
                    {businesses.map((business) => (
                        <div key={business.id}>
                            <BusinessCard business={business} onFavoriteClick={() => handleFavoriteClick(business.id)} />
                        </div>
                    ))}
                </div>
            </div>  
    );
};

export default BusinessList;
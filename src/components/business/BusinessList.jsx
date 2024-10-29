import BusinessCard from './BusinessCard';
import styles from './BusinessList.module.scss';

const BusinessList = ({ businesses, serviceName }) => {

    const handleFavoriteClick = (businessId) => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.includes(businessId)) {
            favorites = favorites.filter(id => id !== businessId);
            alert(`${businessId} removed from favorites`);  
        } else {
            favorites.push(businessId);
            alert(`${businessId} added to favorites`);
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
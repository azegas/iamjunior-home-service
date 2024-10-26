import BusinessCard from './BusinessCard';
import styles from './BusinessList.module.scss';

const BusinessList = ({ businesses }) => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Choose from {businesses.length} businesses</h2>
                <div className={styles.businessList}>
                {businesses.map((business) => (
                    <BusinessCard key={business.id} business={business} />
                    ))}
                </div>
            </div>  
        </div>
    );
};

export default BusinessList;
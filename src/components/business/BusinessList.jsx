import BusinessCard from './BusinessCard';
import styles from './BusinessList.module.scss';

const BusinessList = ({ businesses }) => {
    return (
        <div className={styles.businessList}>
            {businesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
            ))}
        </div>
    );
};

export default BusinessList;
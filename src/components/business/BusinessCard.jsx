import styles from './BusinessCard.module.scss';

const BusinessCard = ({ business }) => {
    return (
        <div className={styles.businessCard}>
            <img className={styles.image} src={business.image} alt={business.name} />
            <p className={styles.category}>{business.category}</p>
            <p className={styles.name}>{business.name}</p>
            <p className={styles.worker}>{business.worker}</p>
            <p className={styles.address}>{business.address}</p>
            <button>Book Now</button>
        </div>
    );
};

export default BusinessCard;
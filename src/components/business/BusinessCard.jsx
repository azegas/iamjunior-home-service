import styles from './BusinessCard.module.scss';

const BusinessCard = ({ business }) => {
    return (
        <div className={styles.businessCard}>
            <img src={business.image} alt={business.name} />
            <p>{business.category}</p>
            <p>{business.name}</p>
            <p>{business.address}</p>
            <p>{business.worker}</p>
            <button>Book Now</button>
        </div>
    );
};

export default BusinessCard;
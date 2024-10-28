import BusinessCard from './BusinessCard';
import styles from './BusinessList.module.scss';
import { Link } from 'react-router-dom';

const BusinessList = ({ businesses, serviceName }) => {
    return (
        <div className="container">
                <h1 className="titleSmaller">{serviceName}</h1>
                <div className={styles.businessList}>
                    {businesses.map((business) => (
                        <Link to={`/business/${business.id}`} key={business.id}>
                            <BusinessCard business={business} />
                        </Link>
                    ))}
                </div>
            </div>  
    );
};

export default BusinessList;
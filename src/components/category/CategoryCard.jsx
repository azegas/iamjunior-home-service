import styles from './CategoryCard.module.scss';
import { NavLink } from 'react-router-dom';

const CategoryCard = ({ service, className }) => {
    return (
        <NavLink to={`/search/${service.name}`} className={`${styles.categoryCard} ${className}`}>
            <img src={service.icon} alt={service.name} />
            <p>{service.name}</p>
        </NavLink>
    );
};

export default CategoryCard;

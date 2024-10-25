import styles from './CategoryCard.module.scss';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ service }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/search/${service.name}`);
    };

    return (
        <div className={styles.categoryCard} onClick={handleCardClick}>
            <img src={service.icon} alt={service.name} />
            <p>{service.name}</p>
        </div>
    );
};

export default CategoryCard;

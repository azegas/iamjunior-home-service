import styles from './CategoryCard.module.scss';

const CategoryCard = ({ service }) => {
    return (
        <div className={styles.categoryCard}>
            <img src={service.icon} alt={service.name} />
            <p>{service.name}</p>
        </div>
    );
};

export default CategoryCard;

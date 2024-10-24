import CategoryCard from './CategoryCard';
import styles from './CategoryList.module.scss';

const CategoryList = ({ services }) => {    
    return (
        <>
            <div className={styles.categoryList}>
                {services.map((service) => (
                    <CategoryCard key={service.id} service={service} />
                ))}
            </div>
        </>
    );
};

export default CategoryList;
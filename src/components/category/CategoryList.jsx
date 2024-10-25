import CategoryCard from './CategoryCard';
import styles from './CategoryList.module.scss';
import categoryCardStyles from './CategoryCard.module.scss';

const CategoryList = ({ services, className }) => {    
    return (
        <>
            {/* Custom class names 'className' can be passed to override the default styling */}
            <div className={`${styles.categoryList} ${className}`}>
                {services.map((service) => (
                    <CategoryCard key={service.id} service={service} className={categoryCardStyles.categoryCardSidebar}/>
                ))}
            </div>
        </>
    );
};

export default CategoryList;

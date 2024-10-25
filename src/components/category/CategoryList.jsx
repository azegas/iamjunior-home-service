import CategoryCard from './CategoryCard';
import styles from './CategoryList.module.scss';

const CategoryList = ({ services, classNameList, classNameCard }) => {    
    return (
        <>
            <div className={`${styles.categoryList} ${classNameList}`}>
                {services.map((service) => (
                    <CategoryCard key={service.id} service={service} className={classNameCard}/>
                ))}
            </div>
        </>
    );
};

export default CategoryList;

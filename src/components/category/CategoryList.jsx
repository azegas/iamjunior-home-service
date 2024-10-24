import CategoryCard from './CategoryCard';
import SearchInput from '../common/SearchInput';
import styles from './CategoryList.module.scss';

const CategoryList = () => {
    return (
        <div className={styles.categoryList}>
            <SearchInput />
            <CategoryCard />
            <CategoryCard />
        </div>
    );
};

export default CategoryList;
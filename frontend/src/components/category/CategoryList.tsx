import CategoryCard from './CategoryCard';
import styles from './CategoryList.module.scss';
import { Business } from '@/components/business/types';
import { Category } from './types';

type CategoryListProps = {
  categories: Category[];
  classNameList: string;
  classNameCard: string;
  businesses: Business[];
  showCount: boolean;
};

const CategoryList = ({
  categories,
  classNameList,
  classNameCard,
  businesses,
  showCount,
}: CategoryListProps) => {
  return (
    <>
      <div className={`${styles.categoryList} ${classNameList}`}>
        {categories.map((category: Category) => (
          <CategoryCard
            key={category.id}
            category={category}
            className={classNameCard}
            businesses={businesses}
            showCount={showCount}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryList;

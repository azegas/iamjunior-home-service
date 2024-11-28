import BusinessCard from './BusinessCard';
import styles from './BusinessList.module.scss';
import { useFavorite } from '@/context/FavoriteContext';
import Container from '../common/Container';
import { Business } from './types';

type BusinessListProps = {
  businesses: Business[];
  categoryName: string;
};

const BusinessList = ({ businesses, categoryName }: BusinessListProps) => {
  const { handleFavorite } = useFavorite() ?? {};

  return (
    <Container>
      <h1 className="titleSmaller">{categoryName}</h1>
      <div className={styles.businessList}>
        {businesses.map((business) => (
          <div key={business._id}>
            <BusinessCard
              business={business}
              onFavoriteClick={() => handleFavorite?.(business._id)}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BusinessList;

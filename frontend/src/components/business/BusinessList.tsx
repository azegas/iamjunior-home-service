import BusinessCard from './BusinessCard';
import styles from './BusinessList.module.scss';
import { useFavorite } from '@/context/FavoriteContext';
import Container from '../common/Container';
import { Business } from './types';

// function declaration without ts
// const BusinessList = ({ businesses, categoryName }) => {

// same function declaration using BusinessListProps type and props

type BusinessListProps = {
  businesses: Business[];
  categoryName: string;
};

// const BusinessList = (props: BusinessListProps) => {

// same function declaration using BusinessListProps type and destructured props
// const BusinessList = ({ businesses, categoryName }: BusinessListProps) => {

// deliberately using props instead of destructured props
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

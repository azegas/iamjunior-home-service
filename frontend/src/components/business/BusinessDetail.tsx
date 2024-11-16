import { useParams } from 'react-router-dom';
import useFetchBusiness from '@/hooks/use-fetch-business';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import styles from './BusinessDetail.module.scss';
import '@/styles/global.scss';
import Container from '@/components/common/Container';

const BusinessDetail = () => {
  // specifies that id is expected to be a string
  const { id } = useParams<{ id: string }>();
  // if id is potentially undefined, id ?? '' ensures an empty string as a fallback
  const { business, errorsBusiness, isLoadingBusiness } = useFetchBusiness(id ?? '');

  if (isLoadingBusiness) return <Loading />;

  if (errorsBusiness && errorsBusiness.length > 0)
    return <Error message={errorsBusiness[0].message} />;

  if (business) {
    return (
      <Container>
        <h1 className="title">{business.name}</h1>
        <img
          src={
            business.images?.[0] ||
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/200px-No-Image-Placeholder.svg.png?20200912122019'
          }
          alt={business.name}
          className={styles.businessImage}
        />
        <p>
          <strong>Category:</strong> {business.category?.name || 'Category not available'}
        </p>
        <p>
          <strong>Description:</strong> {business.description || 'Description not available'}
        </p>
        <p>
          <strong>Address:</strong> {business.address || 'Address not available'}
        </p>
        <p>
          <strong>Contact Person:</strong> {business.worker || 'Contact person not available'}
        </p>
      </Container>
    );
  }

  return null;
};

export default BusinessDetail;

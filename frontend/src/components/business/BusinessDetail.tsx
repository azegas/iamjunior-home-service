import { useParams } from 'react-router-dom';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import styles from './BusinessDetail.module.scss';
import '@/styles/global.scss';
import Container from '@/components/common/Container';
import { useQuery } from '@tanstack/react-query';
import fetchBusiness from '@/api/fetchBusiness';

const BusinessDetail = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: business,
    isLoading: isLoadingBusiness,
    error: errorsBusiness,
  } = useQuery({
    queryKey: ['business', id],
    queryFn: () => fetchBusiness(id ?? ''),
    staleTime: Infinity, // Do not refetch business
  });

  if (isLoadingBusiness) return <Loading />;

  if (errorsBusiness) {
    if (Array.isArray(errorsBusiness)) {
      return <Error message={errorsBusiness[0].message} />;
    } else {
      return <Error message={errorsBusiness.message} />;
    }
  }

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

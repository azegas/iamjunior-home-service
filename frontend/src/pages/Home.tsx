import Hero from '../components/common/Hero';
import Loading from '../components/common/Loading';
import BusinessList from '../components/business/BusinessList';
import Error from '../components/common/Error';
import { useQuery } from '@tanstack/react-query';
import fetchCategories from '../api/fetchCategories';
import fetchBusinesses from '../api/fetchBusinesses';

const Home = () => {
  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: errorsCategories,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: Infinity, // never consider the data stale (dont need to refetch even in the background)
  });

  const {
    data: businesses,
    isLoading: isLoadingBusinesses,
    error: errorsBusinesses,
  } = useQuery({
    queryKey: ['businesses'],
    queryFn: fetchBusinesses,
    staleTime: Infinity, // don't refetch categories if they are already fetched and are in cache
  });

  return (
    <>
      {/* Show error message if there is an error */}
      {errorsCategories && <Error message={errorsCategories.message} />}
      {errorsBusinesses && <Error message={errorsBusinesses.message} />}

      {/* Show loading component while fetching data */}
      {(isLoadingCategories || isLoadingBusinesses) && <Loading />}

      {/* Show hero and business list components only if data is fetched */}
      {!isLoadingCategories && categories && <Hero categories={categories} />}
      {!isLoadingBusinesses && businesses && (
        <BusinessList businesses={businesses} categoryName="All Businesses" />
      )}
    </>
  );
};

export default Home;

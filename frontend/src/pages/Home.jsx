import Hero from '../components/common/Hero';
import Loading from '../components/common/Loading';
import BusinessList from '../components/business/BusinessList';
import Error from '../components/common/Error';
import useFetch from '../hooks/use-fetch';

const Home = () => {
    const { categories, businesses, errors, isLoading } = useFetch();

    return (
        <>
            {/* Show error message if there is an error */}
            {errors && errors.map((error, index) => <Error key={index} message={error.message} />)}

            {/* Show loading component while fetching data */}
            {isLoading && <Loading />}

            {/* Show hero and business list components only if data is fetched */}
            {!isLoading && categories && <Hero categories={categories} />}
            {!isLoading && businesses && <BusinessList businesses={businesses} />}
        </>
    );
};

export default Home;

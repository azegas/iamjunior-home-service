import Hero from '../components/common/Hero';
import Loading from '../components/common/Loading';
import BusinessList from '../components/business/BusinessList';
import Error from '../components/common/Error';
import useFetchFile from '../hooks/use-fetch';

const Home = () => {

    const { services, error: servicesError } = useFetchFile();
    const { businesses, error: businessesError } = useFetchFile();

    return (
        <>
            {/* Show error message if there is an error */}
            {servicesError && <Error message={servicesError}/>}
            {businessesError && <Error message={businessesError}/>}

            {/* Show hero component only if services are fetched */}
            {services && <Hero services={services} />}
            {businesses && <BusinessList businesses={businesses} />}

            {/* Show loading component only while fetching data */}
            {!businesses && !services && <Loading />}

        </>
    );
}

export default Home;
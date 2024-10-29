import Hero from '../components/common/Hero';
import Loading from '../components/common/Loading';
import BusinessList from '../components/business/BusinessList';
import Error from '../components/common/Error';
import useFetchFile from '../hooks/use-fetch';

const Home = () => {

    const { services, error: servicesError } = useFetchFile();
    const { businesses, error: businessesError, isLoading: businessesLoading } = useFetchFile();

    return (
        <>
            {services && <Hero services={services} />}
            {servicesError && <Error message={servicesError}/>}
            {/* Since initial businessesLoading is true - show loading component while businesses are being fetched */}
            {!businessesError && !servicesError && businessesLoading && <Loading />}
            {businessesError && <Error message={businessesError}/>}
            {/* 
            && - If left is false (null), then it does not output what is on the right (BusinessList component). 
            It means ONLY if data is fetched, component is shown 
            */}
            {businesses && <BusinessList businesses={businesses} />}
        </>
    );
}

export default Home;
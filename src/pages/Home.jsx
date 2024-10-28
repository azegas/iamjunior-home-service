import Hero from '../components/common/Hero';
import Loading from '../components/common/Loading';
import BusinessList from '../components/business/BusinessList';
import Error from '../components/common/Error';
import useFetch from '../hooks/use-fetch';

const Home = () => {

    const servicesUrl = 'http://localhost:8000/services';
    const servicesFetch = useFetch(servicesUrl);
    const services = servicesFetch.data;
    const servicesError = servicesFetch.error;

    const businessesUrl = 'http://localhost:8000/businesses';
    const businessesFetch = useFetch(businessesUrl);
    const businesses = businessesFetch.data;
    const businessesError = businessesFetch.error;
    const businessesLoading = businessesFetch.loading;

    return (
        <>
            {services && <Hero services={services} />}
            {servicesError && <Error message={servicesError} whatTriedToReact={servicesUrl}/>}
            {/* Since initial businessesLoading is true - show loading component while businesses are being fetched */}
            {!businessesError && !servicesError && businessesLoading && <Loading />}
            {businessesError && <Error message={businessesError} whatTriedToReact={businessesUrl}/>}
            {/* 
            && - If left is false (null), then it does not output what is on the right (BusinessList component). 
            It means ONLY if data is fetched, component is shown 
            */}
            {businesses && <BusinessList businesses={businesses} />}
        </>
    );
}

export default Home;
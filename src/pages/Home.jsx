import Hero from '../components/common/Hero';
import Loading from '../components/common/Loading';
import BusinessList from '../components/business/BusinessList';
import useFetch from '../hooks/use-fetch';
import Spinner from 'react-bootstrap/Spinner';

const Home = () => {
    const servicesFetch = useFetch('http://localhost:8000/services');
    const services = servicesFetch.data;
    
    const businessesFetch = useFetch('http://localhost:8000/businesses');
    const businesses = businessesFetch.data;
    const businessesLoading = businessesFetch.loading;
    // console.log('businessesLoading', businessesLoading); //since it is true at first, loading component is shown

    return (
        <>
            {services && <Hero services={services} />}
            {/* Since initial businessesLoading is true - show loading component while businesses are being fetched */}
            {businessesLoading && <Loading />}
            {/* 
            && - If left is false (null), then it does not output what is on the right (BusinessList component). 
            It means ONLY if data is fetched, component is shown 
            */}
            {businesses && <BusinessList businesses={businesses} />}
        </>
    );
}

export default Home;
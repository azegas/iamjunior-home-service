import Hero from '../components/common/Hero';
import Loading from '../components/common/Loading';
import BusinessList from '../components/business/BusinessList';

const Home = ({ services, businesses, businessesLoading }) => {
    return (
        <>
            {services && <Hero services={services} />}
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
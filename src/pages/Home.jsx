import Hero from '../components/common/Hero';
import BusinessList from '../components/business/BusinessList';

const Home = ({ services, businesses }) => {
    return (
        <>
            {services && <Hero services={services} />}
            {/* If left is false (null), then it does not output what is on the right (BusinessList component). It means ONLY if data is fetched, component is shown */}
            {businesses && <BusinessList businesses={businesses} />}
        </>
    );
}

export default Home;
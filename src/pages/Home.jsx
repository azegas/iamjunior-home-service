import Hero from '../components/common/Hero';
import BusinessList from '../components/business/BusinessList';

const Home = ({ services, businesses }) => {
    return (
        <>
            <Hero services={services} businesses={businesses}/>
            <BusinessList businesses={businesses} />
        </>
    );
}

export default Home;
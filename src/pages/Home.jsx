import Hero from '../components/common/Hero';
import CategoryList from '../components/category/CategoryList';
import SearchInput from '../components/common/SearchInput';

const Home = ({ services }) => {
    return (
        <>
            <Hero services={services}/>
            <SearchInput />
            <CategoryList services={services} />
        </>
    );
}

export default Home;
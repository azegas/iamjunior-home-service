import SearchResultsCetegoryList from '../components/search/SearchResultsCetegoryList';
import useFetch from '../hooks/use-fetch';
import '../styles/global.scss';

const SearchResults = () => {
    const { data: services } = useFetch('http://localhost:8000/services');
    const { data: businesses } = useFetch('http://localhost:8000/businesses');

    if (!services || !businesses) return <div className="loading">Loading...</div>;

    return (
        <>
            <SearchResultsCetegoryList services={services} businesses={businesses}/>
        </>
    );
}

export default SearchResults;
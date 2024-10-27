import SearchResultsCetegoryList from '../components/search/SearchResultsCetegoryList';
import useFetch from '../hooks/use-fetch';
import '../styles/global.scss';
import Loading from '../components/common/Loading';

const SearchResults = () => {
    const { data: services } = useFetch('http://localhost:8000/services');
    const { data: businesses } = useFetch('http://localhost:8000/businesses');

    // do loading for the WHOLE page (both category list and businisses list), doing this on purpose to show loading component for the whole page
    // also, category component needs to know about businisses, so both have to be loaded
    if (!services || !businesses) return <Loading />;

    return (
        <>
            <SearchResultsCetegoryList services={services} businesses={businesses}/>
        </>
    );
}

export default SearchResults;
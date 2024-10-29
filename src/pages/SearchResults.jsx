import SearchResultsCetegoryList from '../components/search/SearchResultsCetegoryList';
import useFetchFile from '../hooks/use-fetch';
import '../styles/global.scss';
import Loading from '../components/common/Loading';

const SearchResults = () => {
    const { services } = useFetchFile();
    const { businesses } = useFetchFile();

    if (!services || !businesses) return <Loading />;

    return (
        <>
            <SearchResultsCetegoryList services={services} businesses={businesses}/>
        </>
    );
}

export default SearchResults;
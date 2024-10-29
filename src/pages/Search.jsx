import SearchResults from '../components/search/SearchResults';
import useFetchFile from '../hooks/use-fetch';
import '../styles/global.scss';
import Loading from '../components/common/Loading';

const Search = () => {
    const { services } = useFetchFile();
    const { businesses } = useFetchFile();

    if (!services || !businesses) return <Loading />;

    return (
        <>
            <SearchResults services={services} businesses={businesses}/>
        </>
    );
}

export default Search;
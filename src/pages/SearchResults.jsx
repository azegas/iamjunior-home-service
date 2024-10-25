import SearchResultsCetegoryList from '../components/search/SearchResultsCetegoryList';

const SearchResults = ({ services, businesses }) => {
    return (
        <>
            <SearchResultsCetegoryList services={services} businesses={businesses}/>
        </>
    );
}

export default SearchResults;
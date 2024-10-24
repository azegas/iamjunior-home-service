import styles from './SearchInput.module.scss';

const SearchInput = () => {
    return (
        <div className={styles.searchInput}>
            <input type="text" placeholder="Search for a service" />
            <button>Search</button>
        </div>
    );
};

export default SearchInput; 